import { Document, Font, Link, Page, StyleSheet, Text, View, pdf } from '@react-pdf/renderer';
import type { Locale, LocalizedString } from '../types';
import { EXPERIENCE } from '../data/experience';
import { SKILLS } from '../data/skills';
import { CONTACT_ITEMS, LANGUAGES, LOCATION, SOCIALS } from '../data/contact';
import { SITE_URL } from '../data/seo';
import { translations } from '../i18n/translations';
import { formatPeriod } from '../utils/dates';

/**
 * Resume generated on the fly from the same data files as the site
 * (experience, skills, contact) - it can never drift out of sync.
 */

// Never break a word with a hyphen: "mul-ticulturais" splits keywords for PDF text parsers (ATS).
Font.registerHyphenationCallback((word) => [word]);

const ACCENT = '#047857';
const INK = '#18181b';
const BODY = '#3f3f46';
const MUTED = '#71717a';

// Bold Helvetica at 9.5pt averages ~5.3pt per character; a little extra keeps titles on one line.
const SKILL_TITLE_CHAR_WIDTH = 5.6;
const SKILL_TITLE_MAX_WIDTH = 190;

/**
 * Helvetica (WinAnsi) lacks some glyphs used by the site data - normalize them.
 * Middle dots and bullets are also replaced by "|": they are extracted as
 * garbage by PDF text parsers (ATS), which merges neighboring words.
 */
function clean(text: string): string {
  return text.replace(/→/g, '-').replace(/[•·]/g, '|');
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 9.5,
    fontFamily: 'Helvetica',
    color: BODY,
  },
  // Header
  name: { fontSize: 24, fontWeight: 'bold', color: INK },
  role: { fontSize: 11, color: ACCENT, fontWeight: 'bold', marginTop: 2 },
  meta: { fontSize: 9, color: MUTED, marginTop: 4 },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 6,
    fontSize: 9,
    color: MUTED,
  },
  // Accent color plus underline, so the links read as links in a printed or on-screen PDF.
  contactLink: { color: ACCENT, textDecoration: 'underline' },
  rule: { borderBottomWidth: 1, borderBottomColor: '#e4e4e7', marginTop: 14, marginBottom: 10 },
  // Sections
  sectionTitle: {
    fontSize: 10.5,
    fontWeight: 'bold',
    color: INK,
    textTransform: 'uppercase',
    marginBottom: 7,
  },
  // Summary
  summary: { textAlign: 'justify', fontSize: 9.5, lineHeight: 1.45 },
  // Experience
  expEntry: { marginBottom: 8 },
  expEntryNested: { marginBottom: 8, paddingLeft: 12 },
  expRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  company: { fontSize: 10.5, fontWeight: 'bold', color: INK },
  period: { fontSize: 8.5, color: MUTED },
  expRole: { fontSize: 9.5, fontWeight: 'bold', color: ACCENT, marginTop: 1 },
  // A role shown as the entry title (nested roles inside one company) gets the same accent as every other role.
  roleTitle: { fontSize: 9.5, fontWeight: 'bold', color: ACCENT },
  expNote: { fontSize: 8.5, color: MUTED },
  expSummary: { fontSize: 9, color: BODY, marginTop: 2 },
  bullet: { flexDirection: 'row', marginTop: 2, gap: 4 },
  bulletDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: ACCENT, marginTop: 4 },
  bulletText: { flex: 1, fontSize: 9, lineHeight: 1.4 },
  // Skills
  skillRow: { flexDirection: 'row', marginTop: 3, gap: 4 },
  skillTitle: { fontWeight: 'bold', color: INK },
  skillText: { flex: 1 },
});

export function ResumeDocument({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const L = (value: LocalizedString) => clean(value[locale]);
  const education = EXPERIENCE.filter((entry) => entry.badge?.en === 'Education');
  const experience = EXPERIENCE.filter((entry) => entry.badge?.en !== 'Education');
  // The first skills column is as wide as the longest group title in this language.
  const skillTitleWidth = Math.min(
    SKILL_TITLE_MAX_WIDTH,
    Math.ceil(Math.max(...SKILLS.map((category) => L(category.title).length)) * SKILL_TITLE_CHAR_WIDTH),
  );

  return (
    <Document
      title={`Thiago Madeira - ${t.hero_badge}`}
      author="Thiago Madeira"
      subject="Resume"
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>Thiago Madeira</Text>
        <Text style={styles.role}>{t.hero_badge}</Text>
        <Text style={styles.meta}>
          {L(LOCATION)} | {L(LANGUAGES)}
        </Text>
        <View style={styles.contactRow}>
          {CONTACT_ITEMS.map((item) => (
            <Link key={item.kind} src={item.href} style={styles.contactLink}>
              {item.value}
            </Link>
          ))}
          <Link src={SITE_URL} style={styles.contactLink}>
            Portfolio
          </Link>
          {SOCIALS.filter((social) => social.professional).map((social) => (
            <Link key={social.name} src={social.url} style={styles.contactLink}>
              {social.name}
            </Link>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.rule} />
        <Text style={styles.sectionTitle}>{t.resume_summary}</Text>
        <Text style={styles.summary}>{t.resume_bio}</Text>

        {/* Experience */}
        <View style={styles.rule} />
        <Text style={styles.sectionTitle}>{t.experience_title}</Text>
        {experience.map((entry) => {
          return (
          <View
            key={`${entry.company.en}-${entry.role.en}-${entry.start.year}-${entry.start.month ?? 0}`}
            wrap={false}
            style={entry.nested ? styles.expEntryNested : styles.expEntry}
          >
            <View style={styles.expRow}>
              <Text style={entry.roleAsTitle ? styles.roleTitle : styles.company}>
                {L(entry.roleAsTitle ? entry.role : entry.company)}
              </Text>
              <Text style={styles.period}>{formatPeriod(entry.start, entry.end, locale)}</Text>
            </View>
            {!entry.roleAsTitle && L(entry.role) !== '' && (
              <Text style={styles.expRole}>
                {L(entry.role)}
              </Text>
            )}
            {/* Location plus, for client engagements, the badge: makes clear the role is at a client of the consultancy above. */}
            {(entry.location || entry.badge) && (
              <Text style={styles.expNote}>
                {[entry.location && L(entry.location), entry.badge && L(entry.badge)].filter(Boolean).join(' | ')}
              </Text>
            )}
            {entry.summary && <Text style={styles.expSummary}>{L(entry.summary)}</Text>}
            {entry.highlights.map((highlight) => (
              <View key={highlight.en} style={styles.bullet}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>
                  {highlight.label && (
                    <Text style={{ fontWeight: 'bold' }}>{L(highlight.label)}: </Text>
                  )}
                  {L(highlight)}
                </Text>
              </View>
            ))}
          </View>
          );
        })}

        {/* Skills */}
        <View style={styles.rule} />
        <Text style={styles.sectionTitle}>{t.skills_title}</Text>
        {SKILLS.map((category) => (
          <View key={category.title.en} style={styles.skillRow}>
            <Text style={[styles.skillTitle, { width: skillTitleWidth }]}>{L(category.title)}</Text>
            <Text style={styles.skillText}>
              {category.skills.map((skill) => (typeof skill === 'string' ? skill : L(skill))).join(' | ')}
            </Text>
          </View>
        ))}

        {/* Education */}
        <View style={styles.rule} />
        <Text style={styles.sectionTitle}>{t.experience_education}</Text>
        {education.map((entry) => (
          <View
            key={`${entry.company.en}-${entry.start.year}-${entry.start.month ?? 0}`}
            wrap={false}
          >
            <View style={styles.expRow}>
              <Text style={styles.company}>{L(entry.company)}</Text>
              <Text style={styles.period}>{formatPeriod(entry.start, entry.end, locale)}</Text>
            </View>
            <Text style={styles.expRole}>{L(entry.role)}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
}

/** Generate and download the resume in the given locale. */
export async function downloadResume(locale: Locale): Promise<void> {
  const blob = await pdf(<ResumeDocument locale={locale} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `thiago-madeira-${locale}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
