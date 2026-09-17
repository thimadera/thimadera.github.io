import { Document, Link, Page, StyleSheet, Text, View, pdf } from '@react-pdf/renderer';
import type { Locale, LocalizedString } from '../types';
import { EXPERIENCE } from '../data/experience';
import { SKILLS } from '../data/skills';
import { CONTACT_ITEMS, LANGUAGES, LOCATION, SOCIALS } from '../data/contact';
import { translations } from '../i18n/translations';
import { formatPeriod } from '../utils/dates';

/**
 * Resume generated on the fly from the same data files as the site
 * (experience, skills, contact) - it can never drift out of sync.
 */

const ACCENT = '#047857';
const INK = '#18181b';
const BODY = '#3f3f46';
const MUTED = '#71717a';

/** Helvetica (WinAnsi) lacks some glyphs used by the site data - normalize them. */
function clean(text: string): string {
  return text.replace(/→/g, '-');
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
    gap: 6,
    marginTop: 6,
    fontSize: 9,
    color: MUTED,
  },
  contactLink: { color: BODY, textDecoration: 'none' },
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
  expNote: { fontSize: 8.5, color: MUTED },
  bullet: { flexDirection: 'row', marginTop: 2, gap: 4 },
  bulletDot: { width: 3, height: 3, borderRadius: 1.5, backgroundColor: ACCENT, marginTop: 4 },
  bulletText: { flex: 1, fontSize: 9, lineHeight: 1.4 },
  // Skills
  skillRow: { flexDirection: 'row', marginTop: 3, gap: 4 },
  skillTitle: { width: 72, fontWeight: 'bold', color: INK },
  skillText: { flex: 1 },
});

export function ResumeDocument({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const L = (value: LocalizedString) => clean(value[locale]);
  const education = EXPERIENCE.filter((entry) => entry.badge?.en === 'Education');
  const experience = EXPERIENCE.filter((entry) => entry.badge?.en !== 'Education');

  return (
    <Document
      title="Thiago Madeira - Frontend Engineer"
      author="Thiago Madeira"
      subject="Resume"
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>Thiago Madeira</Text>
        <Text style={styles.role}>Frontend Engineer</Text>
        <Text style={styles.meta}>
          {L(LOCATION)} · {L(LANGUAGES)}
        </Text>
        <View style={styles.contactRow}>
          {CONTACT_ITEMS.map((item) => (
            <Link key={item.kind} src={item.href} style={styles.contactLink}>
              {item.value}
            </Link>
          ))}
          {SOCIALS.map((social) => (
            <Link key={social.name} src={social.url} style={styles.contactLink}>
              {social.name}
            </Link>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.rule} />
        <Text style={styles.sectionTitle}>{locale === 'en' ? 'Summary' : 'Resumo'}</Text>
        <Text style={styles.summary}>{t.hero_bio}</Text>

        {/* Experience */}
        <View style={styles.rule} />
        <Text style={styles.sectionTitle}>{t.experience_title}</Text>
        {experience.map((entry) => {
          return (
          <View
            key={`${entry.company.en}-${entry.start.year}-${entry.start.month ?? 0}`}
            wrap={false}
            style={entry.nested ? styles.expEntryNested : styles.expEntry}
          >
            <View style={styles.expRow}>
              <Text style={styles.company}>{L(entry.company)}</Text>
              <Text style={styles.period}>{formatPeriod(entry.start, entry.end, locale)}</Text>
            </View>
            <Text style={styles.expRole}>
              {L(entry.role)}
            </Text>
            {entry.location && <Text style={styles.expNote}>{L(entry.location)}</Text>}
            {entry.highlights.map((highlight) => (
              <View key={highlight.en} style={styles.bullet}>
                <View style={styles.bulletDot} />
                <Text style={styles.bulletText}>{L(highlight)}</Text>
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
            <Text style={styles.skillTitle}>{L(category.title)}</Text>
            <Text style={styles.skillText}>{category.skills.join(' · ')}</Text>
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
