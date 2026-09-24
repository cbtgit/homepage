interface GalleryState {
  tabs: HTMLButtonElement[];
  panels: HTMLElement[];
  status: HTMLElement | null;
  activeIndex: number;
}

type ActivateSlide = (index: number, moveFocus?: boolean) => void;

function updateTabState(state: GalleryState): void {
  state.tabs.forEach((tab, index) => {
    const isActive = index === state.activeIndex;
    tab.setAttribute('aria-selected', String(isActive));
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
    state.panels[index].toggleAttribute('hidden', !isActive);
  });
}

function updateStatus(state: GalleryState): void {
  if (state.status) {
    const activeName = state.tabs[state.activeIndex].textContent?.trim();
    state.status.textContent = `${activeName} view, ${state.activeIndex + 1} of ${state.tabs.length}`;
  }
}

function activateSlide(state: GalleryState, index: number, moveFocus = false): void {
  state.activeIndex = (index + state.tabs.length) % state.tabs.length;
  updateTabState(state);
  updateStatus(state);

  if (moveFocus) {
    state.tabs[state.activeIndex].focus();
  }
}

function onTabKeydown(
  event: KeyboardEvent,
  state: GalleryState,
  activate: ActivateSlide,
): void {
  const destinations: Record<string, number> = {
    ArrowRight: state.activeIndex + 1,
    ArrowLeft: state.activeIndex - 1,
    Home: 0,
    End: state.tabs.length - 1,
  };
  const destination = destinations[event.key];

  if (destination !== undefined) {
    event.preventDefault();
    activate(destination, true);
  }
}

function initializeGallery(gallery: HTMLElement): void {
  if (gallery.dataset.initialized === 'true') {
    return;
  }

  const state: GalleryState = {
    tabs: Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-gallery-tab]')),
    panels: Array.from(gallery.querySelectorAll<HTMLElement>('[data-gallery-panel]')),
    status: gallery.querySelector('[data-gallery-status]'),
    activeIndex: 0,
  };
  const activate: ActivateSlide = (index, moveFocus) => activateSlide(state, index, moveFocus);

  state.tabs.forEach((tab, index) => tab.addEventListener('click', () => activate(index)));
  gallery.querySelector('[role="tablist"]')?.addEventListener('keydown', (event) => {
    if (event instanceof KeyboardEvent) {
      onTabKeydown(event, state, activate);
    }
  });
  gallery.querySelector('[data-gallery-previous]')?.addEventListener('click', () => activate(state.activeIndex - 1));
  gallery.querySelector('[data-gallery-next]')?.addEventListener('click', () => activate(state.activeIndex + 1));
  gallery.dataset.initialized = 'true';
}

export function initializeCaseStudyGalleries(): void {
  document.querySelectorAll<HTMLElement>('[data-screenshot-gallery]').forEach(initializeGallery);
}