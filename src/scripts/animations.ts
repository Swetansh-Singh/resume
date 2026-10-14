import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // If reduced motion is preferred, ensure all animated targets are immediately visible
    gsap.set('[data-animate], .hero-elem, .timeline-item, .project-card', {
      opacity: 1,
      y: 0,
      clearProps: 'all',
    });
    return;
  }

  // 1. Hero Load Sequence
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo(
      '.hero-badge',
      { opacity: 0, y: -20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: 0.1 }
    )
    .fromTo(
      '.hero-title-char',
      { opacity: 0, y: 40, rotateX: -30 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.7, stagger: 0.02 },
      '-=0.3'
    )
    .fromTo(
      '.hero-role',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '.hero-bio',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    )
    .fromTo(
      '.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
      '-=0.3'
    )
    .fromTo(
      '.hero-stats-item',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      '-=0.3'
    );

  // 2. Section Headings Reveal
  const sectionHeadings = document.querySelectorAll('.section-heading');
  sectionHeadings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 3. Experience Timeline Scrub
  const timelineLine = document.querySelector('.timeline-progress-line');
  const timelineContainer = document.querySelector('.timeline-container');

  if (timelineLine && timelineContainer) {
    gsap.fromTo(
      timelineLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: timelineContainer,
          start: 'top 75%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      }
    );
  }

  // Timeline Items Reveal
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 4. Project Cards Stagger
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length) {
    ScrollTrigger.batch(projectCards, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power3.out',
          }
        );
      },
    });
  }

  // 5. Skills Tags Stagger
  const skillTags = document.querySelectorAll('.skill-tag');
  if (skillTags.length) {
    ScrollTrigger.batch(skillTags, {
      start: 'top 92%',
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.03,
            ease: 'back.out(1.5)',
          }
        );
      },
    });
  }

  // 6. Navigation Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach((sec) => {
      const top = (sec as HTMLElement).offsetTop;
      const height = (sec as HTMLElement).offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-blue-400');
            link.classList.remove('text-neutral-400');
          } else {
            link.classList.remove('text-blue-400');
            link.classList.add('text-neutral-400');
          }
        });
      }
    });
  });
}

