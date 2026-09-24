export const unopsDataPortal = {
  eyebrow: 'Project details / UNOPS Data Portal',
  title: 'A global data portal to explore projects for The United Nations',
  description:
    'The UNOPS Data Portal is a React and TypeScript application for exploring United Nations Office for Project Services data across countries, partners, and Sustainable Development Goals. The site is fully managed through Craft CMS, which supplies the page configuration and content rendered by the frontend. The same dataset is available through globe, chart, and table views, with filters and route state carried across each experience.',
  facts: [
    { label: 'Role', value: 'Senior frontend developer' },
    { label: 'Focus', value: 'Architecture and implementation' },
    { label: 'Product', value: 'Craft CMS-managed data portal' },
  ],
  liveUrl: 'https://data.unops.org/projects',
  highlights: [
    {
      eyebrow: 'Functional depth',
      title: 'Linked exploration',
      description:
        'Filters, routes, and quick views stay connected so users can move from regional patterns to project-level detail without losing context.',
    },
    {
      eyebrow: 'Product model',
      title: 'Three views, one dataset',
      description:
        'Map clusters, chart distributions, and sortable tables present the same project data instead of splitting it across disconnected screens.',
    },
    {
      eyebrow: 'Engineering',
      title: 'Configured for change',
      description:
        'CMS-configured pages keep rendering consistent while allowing layouts, components, and data sources to evolve independently.',
    },
  ],
  views: [
    {
      name: 'Globe',
      title: 'An interactive globe for geographic discovery',
      description:
        'Mapbox rendering supports clustered project locations, changing detail by zoom level, and contextual access to the underlying records.',
      image: '/projects/unops/unops-live-projects-globe-feature.png',
      alt: 'UNOPS projects globe view with clustered markers and project details beside the map.',
      width: 1166,
      height: 972,
    },
    {
      name: 'Chart',
      title: 'Chart mode for distribution and comparison',
      description:
        'The chart view summarizes the current filtered selection, making it easier to compare regional proportions without leaving the route.',
      image: '/projects/unops/unops-live-projects-chart-feature.png',
      alt: 'UNOPS projects chart view with a regional distribution chart and filter controls.',
      width: 1166,
      height: 972,
    },
    {
      name: 'Table',
      title: 'Table mode for record-level verification',
      description:
        'Sortable project records and export actions retain the same top-level filters used in globe and chart mode.',
      image: '/projects/unops/unops-live-projects-table-feature.png',
      alt: 'UNOPS projects table showing project rows, countries, durations, SDG tags, and statuses.',
      width: 1166,
      height: 972,
    },
  ],
  mobileViews: [
    {
      name: 'Globe',
      image: '/projects/unops/unops-live-projects-globe-mobile.png',
      alt: 'UNOPS projects on mobile in globe mode with bottom navigation and clustered markers.',
      width: 348,
      height: 972,
    },
    {
      name: 'Chart',
      image: '/projects/unops/unops-live-projects-chart-mobile.png',
      alt: 'UNOPS projects on mobile in chart mode with bottom navigation and a regional pie chart.',
      width: 348,
      height: 972,
    },
    {
      name: 'Table',
      image: '/projects/unops/unops-live-projects-table-mobile.png',
      alt: 'UNOPS projects on mobile in table mode with a scrollable project list.',
      width: 348,
      height: 972,
    },
  ],
  technologies: [
    {
      category: 'Application',
      name: 'React and TypeScript',
      description: 'Typed component architecture for the portal shell and its view-specific interfaces.',
    },
    {
      category: 'Content',
      name: 'Craft CMS',
      description: 'Page configuration and content delivered to the frontend through the pages API.',
    },
    {
      category: 'Routing',
      name: 'TanStack Router',
      description: 'Shareable routes for top-level views, detail pages, and URL-backed state.',
    },
    {
      category: 'Data and UI state',
      name: 'React Query and Zustand',
      description: 'Separate async data lifecycle from local filter and interaction state.',
    },
    {
      category: 'Mapping',
      name: 'React Map GL and Mapbox',
      description: 'Globe rendering, clustered points, geographic focus, and country interaction.',
    },
    {
      category: 'Charts',
      name: 'Apache ECharts',
      description: 'Distribution charts and scorecards built from the filtered project dataset.',
    },
    {
      category: 'Interface',
      name: 'Tailwind CSS and Flowbite',
      description: 'Reusable layout and interface primitives inside a branded portal shell.',
    },
    {
      category: 'Testing',
      name: 'Playwright',
      description: 'Browser-based regression coverage for important routes and view states.',
    },
  ],
};