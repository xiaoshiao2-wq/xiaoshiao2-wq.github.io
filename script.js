const contactEmail = "2279810794@qq.com";

document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.href = `mailto:${contactEmail}`;
  if (link.classList.contains("contact-link")) {
    link.textContent = contactEmail;
  }
});

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

const revealTargets = document.querySelectorAll(
  ".section-intro, .reel-card, .pipeline-section, .skills-section, .about-section, .contact-section"
);

revealTargets.forEach((target) => target.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((target) => observer.observe(target));
