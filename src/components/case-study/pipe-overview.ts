import overviewImage from '../../assets/project-screenshots/pipe-overview/pipe-overview-overview.png';
import uploadXmlImage from '../../assets/project-screenshots/pipe-overview/pipe-overview-upload-xml.png';
import inspectedPipesImage from '../../assets/project-screenshots/pipe-overview/pipe-overview-inspected-pipes.png';
import pipeActionsImage from '../../assets/project-screenshots/pipe-overview/pipe-overview-pipe-actions.png';

export const pipeOverview = {
  eyebrow: 'Project details / Per Aarsleff Pipe Overview',
  title: 'One overview for complex pipe renovation projects.',
  description:
    "Internal business application for Denmark's largest construction and civil engineering group Per Aarsleff or their sewer/pipe renovation business. It brings main pipes, laterals, and subprojects into a shared workspace, with tools for importing and reviewing inspection data, updating project records, and coordinating work as plans change. The application lives inside their Microsoft Dynamics 365 application as a web resource.",
  facts: [
    { label: 'Role', value: 'Senior frontend developer' },
    { label: 'Focus', value: 'Architecture and implementation' },
    { label: 'Product', value: 'Internal pipe-renovation planning' },
  ],
  logo: {
    src: '/aarsleff.jpg',
    alt: 'Per Aarsleff logo',
    width: 280,
    height: 151,
    tabletWidth: 224,
    mobileWidth: 200,
  },
  views: [
    {
      name: 'Overview',
      title: 'Project structure and pipe records in one working view',
      description:
        'The project tree, subproject controls, and pipe table keep the selected renovation work visible together.',
      image: overviewImage,
      alt: 'Pipe Overview showing its project tree, project controls, and pipe records for the selected project.',
    },
    {
      name: 'XML upload',
      title: 'Bring inspection files into the project workflow',
      description:
        'The upload dialog provides a drop zone and a list for managing inspection XML files before import.',
      image: uploadXmlImage,
      alt: 'Pipe Overview XML upload dialog with a file drop zone and a list of inspection XML files.',
    },
    {
      name: 'Inspected pipes',
      title: 'Review inspection results before adding pipes',
      description:
        'The inspected pipes table shows locations, dimensions, observations, and validation warnings for imported records.',
      image: inspectedPipesImage,
      alt: 'Pipe Overview inspected pipes tab showing six imported pipe records with dimensions, observations, and warning icons.',
    },
    {
      name: 'Pipe actions',
      title: 'Manage work from the selected pipe',
      description:
        'The contextual menu provides actions for creating borders and work installations, turning pipes and laterals, renumbering, and managing warnings.',
      image: pipeActionsImage,
      alt: 'Pipe Overview project overview with a pipe selected and its contextual action menu open.',
    },
  ],
  mobileViews: [],
  highlights: [
    {
      eyebrow: 'Project structure',
      title: 'Organize the work',
      description:
        'Group renovation work into subprojects by drag and dropping records and manage the associated pipes and laterals from the project overview.',
    },
    {
      eyebrow: 'Day-to-day planning',
      title: 'Keep project data current',
      description:
        'Create and update pipe records, edit project details, and move work between the relevant project structures.',
    },
    {
      eyebrow: 'Inspection workflow',
      title: 'Bring inspection data into context',
      description:
        'Import tv-inspection XML and keep the resulting information alongside the project data used for planning.',
    },
  ],
  technologies: [
    {
      category: 'Application',
      name: 'React and TypeScript',
      description: 'A typed React application delivered as an HTML web resource inside Dynamics 365.',
    },
    {
      category: 'Component library',
      name: 'Microsoft Fluent UI',
      description: 'Consistent interface components aligned with the surrounding Microsoft business application.',
    },
    {
      category: 'Data',
      name: 'TanStack DB',
      description:
        'On-demand collections and live queries keep pipe records filtered by the active project view, with edits persisted through API requests.',
    },
    {
      category: 'API state',
      name: 'TanStack React Query',
      description:
        'Manages the generated API queries and mutations, including request caching and server-state synchronization.',
    },
    {
      category: 'API generation',
      name: 'TypeScript OpenAPI Codegen',
      description:
        'Generates typed API schemas and React Query hooks for queries and mutations across the Pipes, Inspection Import, and Liner Order APIs.',
    },
    {
      category: 'Build',
      name: 'Vite',
      description: 'Local development and production bundling for the Dynamics web resource.',
    },
    {
      category: 'Platform',
      name: 'Dynamics 365 and Dataverse',
      description: "The web application integrates with the customer's Microsoft Dataverse backend.",
    },
    {
      category: 'Localization',
      name: 'Lingui',
      description: 'Backend APIs support project and inspection workflows; Lingui provides Danish and English strings.',
    },
  ],
};