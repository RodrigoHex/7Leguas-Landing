const rails = document.querySelectorAll<HTMLElement>('[data-carousel]');

rails.forEach((rail) => {
  const scope = rail.closest('section');
  const previous = scope?.querySelector<HTMLButtonElement>('[data-rail-prev]');
  const next = scope?.querySelector<HTMLButtonElement>('[data-rail-next]');

  const update = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    if (previous) previous.disabled = rail.scrollLeft <= 4;
    if (next) next.disabled = rail.scrollLeft >= max - 4;
  };

  const move = (direction: -1 | 1) => {
    const firstChild = rail.firstElementChild as HTMLElement | null;
    const styles = getComputedStyle(rail);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    const amount = (firstChild?.getBoundingClientRect().width ?? rail.clientWidth * 0.82) + gap;
    rail.scrollBy({ left: amount * direction, behavior: 'smooth' });
  };

  previous?.addEventListener('click', () => move(-1));
  next?.addEventListener('click', () => move(1));
  rail.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
});

document.querySelectorAll<HTMLElement>('[role="tablist"]').forEach((tabList) => {
  const tabs = tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]');
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    tabs.forEach((candidate) => candidate.setAttribute('aria-selected', String(candidate === tab)));
  }));
});

const packageCarousels = document.querySelectorAll<HTMLElement>('[data-package-carousel]');

packageCarousels.forEach((carousel) => {
  const rail = carousel.querySelector<HTMLElement>('[data-package-rail]');
  const previous = carousel.querySelector<HTMLButtonElement>('[data-package-prev]');
  const next = carousel.querySelector<HTMLButtonElement>('[data-package-next]');
  const toggle = carousel.querySelector<HTMLButtonElement>('[data-package-toggle]');

  if (!rail || !previous || !next || !toggle) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pauseReasons = new Set<string>();
  let pausedByUser = false;
  let autoplayTimer: number | undefined;
  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;
  let draggedDistance = 0;
  let suppressClick = false;

  const getStep = () => {
    const firstSlide = rail.firstElementChild as HTMLElement | null;
    const styles = getComputedStyle(rail);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    return (firstSlide?.getBoundingClientRect().width ?? rail.clientWidth * 0.82) + gap;
  };

  const scrollBehavior = (): ScrollBehavior => reducedMotion.matches ? 'auto' : 'smooth';

  const move = (direction: -1 | 1) => {
    const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
    const step = getStep();

    if (direction === 1 && rail.scrollLeft >= maxScroll - step * 0.45) {
      rail.scrollTo({ left: 0, behavior: scrollBehavior() });
      return;
    }

    if (direction === -1 && rail.scrollLeft <= step * 0.45) {
      rail.scrollTo({ left: maxScroll, behavior: scrollBehavior() });
      return;
    }

    rail.scrollBy({ left: step * direction, behavior: scrollBehavior() });
  };

  const stopAutoplay = () => {
    if (autoplayTimer === undefined) return;
    window.clearInterval(autoplayTimer);
    autoplayTimer = undefined;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (reducedMotion.matches || pausedByUser || pauseReasons.size > 0) return;
    autoplayTimer = window.setInterval(() => move(1), 4200);
  };

  const updateToggle = () => {
    toggle.setAttribute('aria-pressed', String(pausedByUser));
    toggle.setAttribute(
      'aria-label',
      pausedByUser ? 'Reanudar reproducción automática' : 'Pausar reproducción automática',
    );
  };

  const pauseFor = (reason: string) => {
    pauseReasons.add(reason);
    stopAutoplay();
  };

  const resumeFrom = (reason: string) => {
    pauseReasons.delete(reason);
    startAutoplay();
  };

  const moveManually = (direction: -1 | 1) => {
    move(direction);
    startAutoplay();
  };

  previous.addEventListener('click', () => moveManually(-1));
  next.addEventListener('click', () => moveManually(1));

  toggle.addEventListener('click', () => {
    pausedByUser = !pausedByUser;
    updateToggle();
    startAutoplay();
  });

  carousel.addEventListener('mouseenter', () => pauseFor('hover'));
  carousel.addEventListener('mouseleave', () => resumeFrom('hover'));

  rail.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragging = true;
    dragStartX = event.clientX;
    dragStartScroll = rail.scrollLeft;
    draggedDistance = 0;
    pauseFor('drag');
    rail.classList.add('is-dragging');
    rail.setPointerCapture(event.pointerId);
  });

  rail.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    draggedDistance = event.clientX - dragStartX;
    rail.scrollLeft = dragStartScroll - draggedDistance;
  });

  rail.addEventListener('dragstart', (event) => event.preventDefault());

  const finishDrag = (event: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    suppressClick = Math.abs(draggedDistance) > 6;
    rail.classList.remove('is-dragging');
    if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
    resumeFrom('drag');
    window.setTimeout(() => { suppressClick = false; }, 0);
  };

  rail.addEventListener('pointerup', finishDrag);
  rail.addEventListener('pointercancel', finishDrag);
  rail.addEventListener('click', (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopPropagation();
  }, true);

  rail.addEventListener('touchstart', () => pauseFor('touch'), { passive: true });
  rail.addEventListener('touchend', () => resumeFrom('touch'), { passive: true });
  rail.addEventListener('touchcancel', () => resumeFrom('touch'), { passive: true });

  rail.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveManually(event.key === 'ArrowLeft' ? -1 : 1);
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseFor('visibility');
    else resumeFrom('visibility');
  });

  const syncMotionPreference = () => {
    toggle.disabled = reducedMotion.matches;
    if (reducedMotion.matches) {
      toggle.setAttribute('aria-label', 'Reproducción automática desactivada por preferencias de movimiento');
      stopAutoplay();
      return;
    }
    updateToggle();
    startAutoplay();
  };

  reducedMotion.addEventListener('change', syncMotionPreference);
  updateToggle();
  syncMotionPreference();
});
