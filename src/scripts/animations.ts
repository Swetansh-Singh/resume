import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // If reduced motion is preferred, ensure all animated targets are immediately visible
    gsap.set('[data-animate], .hero-title, .hero-role, .hero-bio, .hero-cta, .project-card, .section-heading', {
      opacity: 1,
      y: 0,
      clearProps: 'all',
    });
    return;
  }

  // 1. Top Section (About) Load Sequence
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo(
      '.hero-badge',
      { opacity: 0, y: -15, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, delay: 0.1 }
    )
    .fromTo(
      '.hero-title',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.2'
    )
    .fromTo(
      '.hero-role',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.4'
    )
    .fromTo(
      '.hero-bio',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.3'
    )
    .fromTo(
      '.hero-cta',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      '-=0.3'
    );

  // 2. Section Headings Reveal
  const sectionHeadings = document.querySelectorAll('.section-heading');
  sectionHeadings.forEach((heading) => {
    gsap.fromTo(
      heading,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  // 3. Project Cards Stagger
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length) {
    ScrollTrigger.batch(projectCards, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(
          batch,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          }
        );
      },
    });
  }

  // 4. Skills Tags Stagger
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
            duration: 0.35,
            stagger: 0.025,
            ease: 'back.out(1.5)',
          }
        );
      },
    });
  }

  // 5. Navigation Scroll Spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 180;
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
