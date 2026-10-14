import { gsap } from 'gsap';

export function initCursorEffects() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Only on pointer-capable desktop devices
  if (!window.matchMedia('(pointer: fine)').matches) {
    return;
  }

  const glow = document.getElementById('cursor-glow');

  if (glow) {
    // Quick setter for 60fps performance
    const setGlowX = gsap.quickTo(glow, 'x', { duration: 0.45, ease: 'power2.out' });
    const setGlowY = gsap.quickTo(glow, 'y', { duration: 0.45, ease: 'power2.out' });

    window.addEventListener('pointermove', (e) => {
      setGlowX(e.clientX);
      setGlowY(e.clientY);
      if (glow.style.opacity === '0' || !glow.style.opacity) {
        glow.style.opacity = '1';
      }
    });

    document.addEventListener('pointerleave', () => {
      glow.style.opacity = '0';
    });
  }

  // Magnetic button pull
  const magneticEls = document.querySelectorAll<HTMLElement>('[data-magnetic="true"]');
  magneticEls.forEach((el) => {
    const strength = parseFloat(el.dataset.magneticStrength || '0.25');

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      gsap.to(el, {
        x: relX * strength,
        y: relY * strength,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
  });

  // 3D Card tilt effect
  const tiltCards = document.querySelectorAll<HTMLElement>('[data-tilt="true"]');
  tiltCards.forEach((card) => {
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        duration: 0.3,
        ease: 'power1.out',
      });

      // Update card glare/border spotlight coordinate
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
  });
}

