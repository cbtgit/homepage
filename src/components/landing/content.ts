import unopsOverviewImage from '../../assets/project-screenshots/unops/unops-live-projects-globe-feature.png';
import pipeOverviewImage from '../../assets/project-screenshots/pipe-overview/pipe-overview-overview.png';

export const navItems = [
  { label: 'Home', href: '/' },
  // { label: 'Projects', href: '/#work' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export const metaRows = [
  { label: 'Location', value: 'Aarhus, Denmark' },
  { label: 'Availability', value: '1 October 2026' },
  { label: 'Languages', value: 'Danish, English, German' },
];

export const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind',
  'Vite',
  'TanStack',
  'GitHub Copilot',
];

export const projects = [
  {
    title: 'United Nations data site',
    summary:
      'UNOPS DATA visualizes project activity, partner coverage, and SDG reach across global regions.',
    image: unopsOverviewImage,
    imageAlt: 'UNOPS Data project globe view with clustered locations and project details.',
    tag: 'UNOPS DATA',
  },
  {
    title: 'Project planning application',
    summary:
      'Internal business application for Aarsleff Pipe Technologies for managing pipe renovation projects.',
    image: pipeOverviewImage,
    imageAlt: 'Pipe Overview project tree and pipe records in the project overview.',
    tag: 'AARSLEFF',
  },
];

export const socialItems = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christianbloch/' },
  { label: 'GitHub', href: '#' },
  { label: 'Email', href: 'mailto:cblochth@gmail.com' },
];
