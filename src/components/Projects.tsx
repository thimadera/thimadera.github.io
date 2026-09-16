import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FolderGit2,
  Images,
  Lock,
  X,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import { PROJECTS } from '../data/projects';
import { getProjectImages } from '../data/projectImages';
import type { Project } from '../types';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';

interface GalleryState {
  projectName: string;
  images: string[];
  startIndex: number;
}

function ProjectGallery({ gallery, onClose }: { gallery: GalleryState; onClose: () => void }) {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const total = gallery.images.length;
  const [index, setIndex] = useState(gallery.startIndex);

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, onClose, prev]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const src = gallery.images[index] ?? gallery.images[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-60 flex flex-col bg-background/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${gallery.projectName} - ${t('projects_view_prints')}`}
    >
      <div
        className="flex items-center justify-between border-b border-border px-5 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{gallery.projectName}</p>
          <p className="font-mono text-xs text-muted">
            {index + 1} / {total}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('projects_gallery_close')}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-surface-2 text-muted transition-colors hover:border-accent/50 hover:text-foreground"
        >
          <X size={18} />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={index}
            src={src}
            alt={`${gallery.projectName} ${index + 1}`}
            initial={reduceMotion ? undefined : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -32 }}
            transition={{ duration: 0.25 }}
            className="max-h-full max-w-full rounded-xl border border-border object-contain"
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label={t('projects_gallery_prev')}
              className="absolute left-3 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-2/90 text-foreground transition-colors hover:border-accent/50 md:left-6"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label={t('projects_gallery_next')}
              className="absolute right-3 grid h-10 w-10 place-items-center rounded-full border border-border bg-surface-2/90 text-foreground transition-colors hover:border-accent/50 md:right-6"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div
          className="flex items-center justify-center gap-2 overflow-x-auto px-5 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          {gallery.images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${gallery.projectName} ${i + 1}`}
              aria-current={i === index}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border transition-colors ${
                i === index ? 'border-accent' : 'border-border opacity-60 hover:opacity-100'
              }`}
            >
              <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
  onOpenGallery,
}: {
  project: Project;
  index: number;
  onOpenGallery: (project: Project, images: string[], startIndex: number) => void;
}) {
  const { t, l } = useI18n();
  const reduceMotion = useReducedMotion();
  const link = project.links[0];
  const images = getProjectImages(project.slug);
  const cover = images[0];

  return (
    <motion.article
      initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
      className="card group flex flex-col overflow-hidden transition-colors hover:border-accent/40"
    >
      {cover && (
        <button
          type="button"
          onClick={() => onOpenGallery(project, images, 0)}
          aria-label={`${project.name} - ${t('projects_view_prints')}`}
          className="group/cover relative block w-full overflow-hidden border-b border-border"
        >
          <img
            src={cover}
            alt={project.name}
            loading="lazy"
            className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover/cover:scale-[1.03]"
          />
          <span className="absolute inset-0 grid place-items-center bg-background/40 opacity-0 transition-opacity group-hover/cover:opacity-100">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3 py-1.5 font-mono text-xs text-foreground backdrop-blur">
              <Images size={14} className="text-accent" />
              {t('projects_view_prints')}
            </span>
          </span>
          {images.length > 1 && (
            <span className="absolute right-3 top-3 rounded-full border border-border bg-surface/90 px-2 py-0.5 font-mono text-[10px] text-muted backdrop-blur">
              {images.length}
            </span>
          )}
        </button>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <FolderGit2 size={22} className="text-accent" />
          {link ? (
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-foreground"
            >
              {l(link.label)}
              <ArrowUpRight size={14} />
            </a>
          ) : project.internal ? (
            <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-muted">
              <Lock size={12} className="text-accent" />
              {t('projects_internal')}
            </span>
          ) : null}
        </div>

        <div>
          <div className="flex items-baseline gap-2">
            <h3 className="font-semibold tracking-tight">{project.name}</h3>
            {project.year && <span className="font-mono text-xs text-muted">{project.year}</span>}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{l(project.description)}</p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [gallery, setGallery] = useState<GalleryState | null>(null);

  const openGallery = useCallback((project: Project, images: string[], startIndex: number) => {
    setGallery({ projectName: project.name, images, startIndex });
  }, []);

  return (
    <Section
      id="projects"
      eyebrow={t('projects_eyebrow')}
      title={t('projects_title')}
      subtitle={t('projects_subtitle')}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} onOpenGallery={openGallery} />
        ))}
      </div>

      <AnimatePresence>
        {gallery && <ProjectGallery gallery={gallery} onClose={() => setGallery(null)} />}
      </AnimatePresence>
    </Section>
  );
}
