/* ==========================================================
   SAMMA DAS — 3D portfolio script
   Edit content in the DATA section below. No invented facts.
   ========================================================== */

/* ---------- 1. DATA (edit here) ---------- */
const SKILLS = [
  { icon: "◐", en: ["Photo Editing", "Careful retouching and image craft."], bn: ["ফটো এডিটিং", "যত্নসহকারে ছবি সম্পাদনা ও রিটাচিং।"] },
  { icon: "⬡", en: ["Website Development", "Clean, responsive websites."], bn: ["ওয়েবসাইট ডেভেলপমেন্ট", "পরিচ্ছন্ন ও রেসপন্সিভ ওয়েবসাইট।"] },
  { icon: "✦", en: ["Creative Design", "Visual thinking that makes ideas clear."], bn: ["ক্রিয়েটিভ ডিজাইন", "ভাবনাকে স্পষ্ট করে তোলা ভিজ্যুয়াল ডিজাইন।"] },
  { icon: "◎", en: ["Digital Creativity", "Turning imagination into digital form."], bn: ["ডিজিটাল ক্রিয়েটিভিটি", "কল্পনাকে ডিজিটাল রূপ দেওয়া।"] },
  { icon: "◈", en: ["Technology Exploration", "Learning new tools and technologies."], bn: ["প্রযুক্তি অন্বেষণ", "নতুন টুল ও প্রযুক্তি শেখা।"] },
];

const PROJECTS = [
  {
    thumb: "assets/images/project-1.jpg",
    en: ["Personal Portfolio Website", "This 3D portfolio — my introduction and work in one place."],
    bn: ["ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট", "এই 3D পোর্টফোলিও — আমার পরিচয় ও কাজ এক জায়গায়।"],
    tech: "HTML, CSS, JavaScript, Three.js, GSAP",
    url: "", // add a live URL here when available
  },
  {
    thumb: "assets/images/project-2.jpg",
    en: ["Uttar Kattali Shri Shri Raksha Kalibari Website", "Website for Uttar Kattali Shri Shri Raksha Kalibari."],
    bn: ["উত্তর কাটালি শ্রী শ্রী রক্ষা কালীবাড়ি ওয়েবসাইট", "উত্তর কাটালি শ্রী শ্রী রক্ষা কালীবাড়ির ওয়েবসাইট।"],
    tech: "Add technologies", // edit
    url: "",
  },
  {
    thumb: "assets/images/project-3.jpg",
    en: ["Advocate Professional Website", "Professional website for an advocate."],
    bn: ["অ্যাডভোকেট প্রফেশনাল ওয়েবসাইট", "একজন অ্যাডভোকেটের পেশাদার ওয়েবসাইট।"],
    tech: "Add technologies",
    url: "",
  },
  {
    thumb: "assets/images/project-4.jpg",
    en: ["Birthday Celebration Website", "A celebration website made for a special day."],
    bn: ["জন্মদিন উদযাপন ওয়েবসাইট", "একটি বিশেষ দিনের জন্য তৈরি উদযাপন ওয়েবসাইট।"],
    tech: "Add technologies",
    url: "",
  },
  {
    thumb: "assets/images/project-5.jpg",
    en: ["Creative Website Development Projects", "More creative web projects."],
    bn: ["ক্রিয়েটিভ ওয়েবসাইট ডেভেলপমেন্ট প্রজেক্ট", "আরও সৃজনশীল ওয়েব প্রজেক্ট।"],
    tech: "Add technologies",
    url: "",
  },
];

const SOCIAL = [
  { name: "Facebook", short: "f", href: "https://www.facebook.com/samma2389", label: "facebook.com/samma2389" },
  { name: "Instagram", short: "ig", href: "https://www.instagram.com/samma2389/", label: "instagram.com/samma2389" },
  { name: "GitHub", short: "gh", href: "", label: "Add your GitHub link here" }, // placeholder
  { name: "WhatsApp", short: "wa", href: "https://wa.me/8801975093159", label: "01975093159" },
  { name: "Email", short: "@", href: "mailto:sammaeditor@gmail.com", label: "sammaeditor@gmail.com" },
];

const I18N = {
  en: {
    nav_home: "HOME", nav_about: "ABOUT", nav_skills: "SKILLS", nav_projects: "PROJECTS", nav_education: "EDUCATION", nav_contact: "CONTACT",
    name_en: "SAMMA DAS", name_bn: "সাম্য দাশ",
    hero_role: "CREATIVE DESIGNER & WEB DEVELOPER", tagline: "Turning Ideas Into Digital Experiences.",
    btn_projects: "View Projects", btn_contact: "Contact Me",
    about_title: "About Me",
    bio: "My name is Samma Das. I am from Chattogram, Bangladesh. I am currently studying Electrical Technology at Chattogram Government Polytechnic Institute. I am passionate about photo editing, website development, and creative digital experiences. I enjoy learning new technologies, exploring innovative ideas, and transforming imagination into beautiful digital experiences. My goal is to continuously develop my creative and technical skills.",
    f_location: "Location", f_location_v: "Chattogram, Bangladesh",
    f_edu: "Institution", f_edu_v: "Chattogram Government Polytechnic Institute",
    f_dept: "Department", f_dept_v: "Electrical Technology",
    f_hobby: "Hobbies", f_hobby_v: "Reading books, learning technologies, exploring creative ideas",
    skills_title: "Skills & Interests", projects_title: "Creative Projects", edu_title: "Education",
    edu_inst: "Chattogram Government Polytechnic Institute", edu_dept: "Department of Electrical Technology",
    contact_title: "Let's Connect", view: "View Project", fallback_thumb: "Screenshot coming soon",
    cv_title: "Curriculum Vitae", cv_desc: "Education, skills and interests in one document.", cv_btn: "Download CV",
    form_title: "Send a message", f_name: "Full name", f_mail: "Email", f_subject: "Subject", f_msg: "Message",
    btn_send: "Send", btn_mailfallback: "Open in email app",
    msg_required: "Please fill in all fields.", msg_email: "Please enter a valid email address.",
    msg_ok: "Your email app will open with this message. Press send there. This form cannot send messages by itself yet.",
  },
  bn: {
    nav_home: "হোম", nav_about: "আমার সম্পর্কে", nav_skills: "দক্ষতা", nav_projects: "প্রজেক্ট", nav_education: "শিক্ষা", nav_contact: "যোগাযোগ",
    name_en: "SAMMA DAS", name_bn: "সাম্য দাশ",
    hero_role: "ক্রিয়েটিভ ডিজাইনার ও ওয়েব ডেভেলপার", tagline: "ধারণাকে ডিজিটাল অভিজ্ঞতায় রূপ দিচ্ছি।",
    btn_projects: "প্রজেক্ট দেখুন", btn_contact: "যোগাযোগ করুন",
    about_title: "আমার সম্পর্কে",
    bio: "আমার নাম সাম্য দাশ। আমি চট্টগ্রাম, বাংলাদেশের বাসিন্দা। বর্তমানে আমি চট্টগ্রাম সরকারি পলিটেকনিক ইনস্টিটিউটে ইলেকট্রিক্যাল টেকনোলজি বিষয়ে পড়াশোনা করছি। ফটো এডিটিং, ওয়েবসাইট ডেভেলপমেন্ট এবং সৃজনশীল ডিজিটাল অভিজ্ঞতা নিয়ে আমি গভীর আগ্রহী। নতুন প্রযুক্তি শেখা, উদ্ভাবনী ভাবনা খোঁজা এবং কল্পনাকে সুন্দর ডিজিটাল অভিজ্ঞতায় রূপ দেওয়াই আমার লক্ষ্য। আমার সৃজনশীল ও প্রযুক্তিগত দক্ষতা ক্রমাগত উন্নত করাই আমার অঙ্গীকার।",
    f_location: "অবস্থান", f_location_v: "চট্টগ্রাম, বাংলাদেশ",
    f_edu: "প্রতিষ্ঠান", f_edu_v: "চট্টগ্রাম সরকারি পলিটেকনিক ইনস্টিটিউট",
    f_dept: "বিভাগ", f_dept_v: "ইলেকট্রিক্যাল টেকনোলজি",
    f_hobby: "শখ", f_hobby_v: "বই পড়া, নতুন প্রযুক্তি শেখা, সৃজনশীল ভাবনা অন্বেষণ",
    skills_title: "দক্ষতা ও আগ্রহ", projects_title: "সৃজনশীল প্রজেক্ট", edu_title: "শিক্ষা",
    edu_inst: "চট্টগ্রাম সরকারি পলিটেকনিক ইনস্টিটিউট", edu_dept: "ইলেকট্রিক্যাল টেকনোলজি বিভাগ",
    contact_title: "যোগাযোগ করুন", view: "প্রজেক্ট দেখুন", fallback_thumb: "স্ক্রিনশট শীঘ্রই আসছে",
    cv_title: "জীবনবৃত্তান্ত (CV)", cv_desc: "শিক্ষা, দক্ষতা ও আগ্রহ এক ডকুমেন্টে।", cv_btn: "CV ডাউনলোড",
    form_title: "বার্তা পাঠান", f_name: "পুরো নাম", f_mail: "ইমেইল", f_subject: "বিষয়", f_msg: "বার্তা",
    btn_send: "পাঠান", btn_mailfallback: "ইমেইল অ্যাপে খুলুন",
    msg_required: "সব ঘর পূরণ করুন।", msg_email: "সঠিক ইমেইল ঠিকানা লিখুন।",
    msg_ok: "আপনার ইমেইল অ্যাপ খুলবে। সেখানে Send চাপুন। এই ফর্ম এখনো নিজে থেকে বার্তা পাঠাতে পারে না।",
  },
};

/* ---------- 2. HELPERS ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const isTouch = matchMedia("(hover: none), (pointer: coarse)").matches;
const isMobile = innerWidth < 860 || isTouch;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let lang = localStorage.getItem("sd-lang") || "bn";

/* ---------- 3. LANGUAGE ---------- */
function applyLang(l) {
  lang = l;
  localStorage.setItem("sd-lang", l);
  document.documentElement.lang = l === "bn" ? "bn" : "en";
  $$("[data-i18n]").forEach(el => { const v = I18N[l][el.dataset.i18n]; if (v) el.textContent = v; });
  $$(".about-copy > p.reveal").forEach(p => p.textContent = I18N[l].bio);
  $$(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === l));
  renderSkills(false);
  renderProjects(false);
  renderSocial();
}

/* ---------- 4. RENDER CARDS ---------- */
function renderSkills(animate = true) {
  $("#skillGrid").innerHTML = SKILLS.map(s => `
    <article class="card glass tilt">
      <span class="icon">${s.icon}</span>
      <h3>${s[lang][0]}</h3>
      <p>${s[lang][1]}</p>
    </article>`).join("");
  bindTilt($$("#skillGrid .card"));
  if (animate) revealCards("#skillGrid .card");
}

function renderProjects(animate = true) {
  $("#projectGrid").innerHTML = PROJECTS.map(p => `
    <article class="card glass tilt">
      <div class="thumb" style="background-image:url('${p.thumb}');background-size:cover;background-position:center">
        <span>${I18N[lang].fallback_thumb}</span>
      </div>
      <h3>${p[lang][0]}</h3>
      <p>${p[lang][1]}</p>
      <span class="tech">${p.tech}</span>
      ${p.url ? `<a class="btn" href="${p.url}" target="_blank" rel="noopener noreferrer">${I18N[lang].view}</a>` : ""}
    </article>`).join("");
  bindTilt($$("#projectGrid .card"));
  if (animate) revealCards("#projectGrid .card");
}

function renderSocial() {
  $("#socialGrid").innerHTML = SOCIAL.map(s => {
    const attrs = s.href
      ? `href="${s.href}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}`
      : `href="#contact" aria-disabled="true"`;
    return `<a class="glass" ${attrs}>
      <span class="ico">${s.short}</span>
      <span><strong>${s.name}</strong><small>${s.label}</small></span>
    </a>`;
  }).join("");
}

/* ---------- 5. 3D TILT + CARD REVEAL (GSAP) ---------- */
function bindTilt(cards) {
  if (isTouch || reduceMotion) return;
  cards.forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(card, { rotationY: x * 14, rotationX: -y * 14, transformPerspective: 900, duration: 0.4, ease: "power2.out" });
    });
    card.addEventListener("pointerleave", () => gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.6, ease: "elastic.out(1,0.6)" }));
  });
}

function revealCards(sel) {
  if (reduceMotion) return;
  gsap.from(sel, {
    opacity: 0, y: 60, rotationX: -12, duration: 1, ease: "power3.out", stagger: 0.12,
    scrollTrigger: { trigger: sel, start: "top 88%" },
  });
}

/* ---------- 6. 3D BACKGROUND (Three.js) ---------- */
let scene, camera, renderer, objects = [], particles, scrollProgress = 0;
let mouse = { x: 0, y: 0, tx: 0, ty: 0 };
let running = true;

function initScene() {
  const canvas = $("#bg");
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !isMobile, alpha: true, powerPreference: "high-performance" });
  } catch (err) {
    // WebGL fallback: hide canvas, keep the CSS design usable
    canvas.style.display = "none";
    document.body.classList.add("no-webgl");
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, isMobile ? 10 : 8);

  // Soft studio environment so the chrome surfaces get real reflections
  const c = document.createElement("canvas"); c.width = 512; c.height = 256;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, "#1a1d24"); grad.addColorStop(0.5, "#ffffff"); grad.addColorStop(1, "#06070a");
  g.fillStyle = grad; g.fillRect(0, 0, 512, 256);
  g.fillStyle = "#ffffff"; g.fillRect(90, 60, 70, 30); g.fillRect(330, 110, 90, 22); // softboxes
  const envTex = new THREE.CanvasTexture(c);
  envTex.mapping = THREE.EquirectangularReflectionMapping;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(envTex).texture;

  const chrome = new THREE.MeshStandardMaterial({ color: 0xdfe6ee, metalness: 1, roughness: 0.12 });
  const satin = new THREE.MeshStandardMaterial({ color: 0x9fb6c9, metalness: 0.9, roughness: 0.3 });
  const k = isMobile ? 0.7 : 1;

  const defs = [
    { geo: new THREE.TorusKnotGeometry(0.9 * k, 0.28 * k, 180, 28), mat: chrome, pos: [-2.6, 1.2, 0], speed: 0.25 },
    { geo: new THREE.IcosahedronGeometry(0.8 * k, 1), mat: satin, pos: [2.8, -0.8, -1], speed: -0.2 },
    { geo: new THREE.SphereGeometry(0.5 * k, 48, 48), mat: chrome, pos: [0.6, 2.2, -3], speed: 0.15 },
    { geo: new THREE.TorusGeometry(0.9 * k, 0.12 * k, 24, 120), mat: satin, pos: [-1.2, -2.2, -2], speed: 0.3 },
  ];
  defs.forEach(d => {
    const m = new THREE.Mesh(d.geo, d.mat);
    m.position.set(...d.pos);
    m.userData = { base: new THREE.Vector3(...d.pos), speed: d.speed };
    scene.add(m); objects.push(m);
  });

  // Floating dust particles (fewer on mobile)
  const count = isMobile ? 260 : 900;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 22;
  const pg = new THREE.BufferGeometry();
  pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  particles = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xbfd9f0, size: 0.03, transparent: true, opacity: 0.6 }));
  scene.add(particles);

  const key = new THREE.DirectionalLight(0xffffff, 1.1); key.position.set(4, 6, 6); scene.add(key);
  const rim = new THREE.PointLight(0xa9d8ff, 1.2, 20); rim.position.set(-5, 2, 4); scene.add(rim);
  scene.add(new THREE.AmbientLight(0xffffff, 0.15));

  // Scroll-driven camera journey across the page
  gsap.to(camera.position, {
    z: isMobile ? 6 : 4.5, y: -1.2, ease: "none",
    scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 1 },
  });
  ScrollTrigger.create({
    trigger: document.body, start: "top top", end: "bottom bottom",
    onUpdate: self => { scrollProgress = self.progress; },
  });

  if (!isTouch) {
    addEventListener("pointermove", e => {
      mouse.tx = (e.clientX / innerWidth - 0.5);
      mouse.ty = (e.clientY / innerHeight - 0.5);
    }, { passive: true });
  }
  addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) tick(); });
  tick();
}

function onResize() {
  if (!renderer) return;
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}

let t = 0;
function tick() {
  if (!running || !renderer) return;
  requestAnimationFrame(tick);
  t += reduceMotion ? 0 : 0.008;

  mouse.x += (mouse.tx - mouse.x) * 0.05;
  mouse.y += (mouse.ty - mouse.y) * 0.05;

  objects.forEach((m, i) => {
    const b = m.userData.base;
    const drift = reduceMotion ? 0 : Math.sin(t + i) * 0.25;
    m.position.set(b.x + mouse.x * (i + 1) * 0.3, b.y + drift + mouse.y * -0.3 * (i + 1), b.z - scrollProgress * 4 * (i % 2 ? 1 : 0.5));
    m.rotation.x += 0.002 + scrollProgress * 0.01;
    m.rotation.y += m.userData.speed * 0.01;
  });
  particles.rotation.y = scrollProgress * 1.2 + mouse.x * 0.1;

  renderer.render(scene, camera);
}

/* ---------- 7. NAV, MENU, UI ---------- */
function initUI() {
  // Mobile menu
  const burger = $("#burger"), menu = $("#menu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  $$(".menu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", false);
  }));

  // Language switch
  $$(".lang-btn").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));

  // Active nav link
  const links = $$(".menu a");
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section").forEach(s => io.observe(s));

  // Scroll progress, nav glass intensity, back-to-top
  const bar = $("#progress"), top = $("#toTop");
  addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    top.classList.toggle("show", scrollY > 600);
  }, { passive: true });
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  // Custom cursor (desktop only)
  if (!isTouch) {
    const cur = $("#cursor");
    cur.classList.add("on");
    addEventListener("pointermove", e => { cur.style.left = e.clientX + "px"; cur.style.top = e.clientY + "px"; });
    $$("a, button").forEach(el => {
      el.addEventListener("pointerenter", () => cur.classList.add("active"));
      el.addEventListener("pointerleave", () => cur.classList.remove("active"));
    });
  }

  // Portrait tilt (mouse) — uses CSS variables from style.css
  $$(".portrait").forEach(p => {
    if (isTouch || reduceMotion) return;
    p.addEventListener("pointermove", e => {
      const r = p.getBoundingClientRect();
      p.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 16 + "deg");
      p.style.setProperty("--rx", -((e.clientY - r.top) / r.height - 0.5) * 16 + "deg");
    });
    p.addEventListener("pointerleave", () => { p.style.setProperty("--ry", "0deg"); p.style.setProperty("--rx", "0deg"); });
  });

  // Scroll-reveal for generic content
  if (!reduceMotion) {
    $$(".reveal").forEach(el => gsap.from(el, {
      opacity: 0, y: 40, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    }));
  }

  $("#year").textContent = new Date().getFullYear();
}

/* ---------- 8. BOOT ---------- */
function boot() {
  const hideLoader = () => $("#loader").classList.add("done");
  // Safety net: the visitor must never be stuck on the loader, even if something fails
  setTimeout(hideLoader, 2500);

  // Run each step separately so one failing part (e.g. WebGL) does not stop the rest of the site
  const step = (name, fn) => { try { fn(); } catch (err) { console.error("[SD portfolio] " + name + " failed:", err); } };

  step("scroll plugin", () => gsap.registerPlugin(ScrollTrigger));
  step("language", () => applyLang(lang));
  step("ui", initUI);
  step("3d scene", initScene);
  step("cards", () => {
    revealCards("#skillGrid .card");
    revealCards("#projectGrid .card");
  });
  // Hero intro (clearProps keeps the CSS mouse-tilt working afterwards)
  step("hero intro", () => {
    if (!reduceMotion) gsap.from(".portrait-sm", { opacity: 0, scale: 0.9, rotationY: -25, duration: 1.6, ease: "power3.out", delay: 0.2, clearProps: "transform" });
  });
  setTimeout(hideLoader, 400);
}

// Wait for Three.js + GSAP from CDN
window.addEventListener("load", () => {
  if (typeof gsap === "undefined" || typeof THREE === "undefined") {
    $("#loader").classList.add("done");
    document.body.classList.add("no-webgl");
    console.warn("Three.js or GSAP failed to load — check your internet connection.");
    applyLang(lang); initUI();
    return;
  }
  boot();
});

/* ---------- 9. EXTRAS: theme, Dhaka clock, contact form, CV check, PWA ---------- */
function initTheme() {
  $("#themeBtn").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("sd-theme", next);
  });
}

function initClock() {
  const el = $("#clock");
  const tick = () => {
    el.textContent = new Intl.DateTimeFormat(lang === "bn" ? "bn-BD" : "en-GB", {
      timeZone: "Asia/Dhaka", day: "numeric", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: lang !== "bn",
    }).format(new Date());
  };
  tick();
  setInterval(tick, 1000);
}

function initForm() {
  const form = $("#contactForm"), out = $("#formMsg");
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (form.elements.website.value) return; // honeypot: silently ignore bots
    const d = Object.fromEntries(new FormData(form));
    let err = "";
    if (!d.name.trim() || !d.subject.trim() || !d.message.trim()) err = I18N[lang].msg_required;
    else if (!EMAIL.test(d.email.trim())) err = I18N[lang].msg_email;
    out.textContent = err || I18N[lang].msg_ok;
    out.className = "form-msg " + (err ? "error" : "ok");
    if (!err) {
      // No backend yet: hand the message to the visitor's own email app. Nothing is claimed as sent.
      const body = `${d.message}\n\n— ${d.name} (${d.email})`;
      location.href = `mailto:sammaeditor@gmail.com?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    }
  });
}

function initCV() {
  // Show the CV button only if the PDF file actually exists
  fetch("assets/documents/samma-das-cv.pdf", { method: "HEAD" })
    .then(r => { if (r.ok) $("#cvBox").hidden = false; })
    .catch(() => {});
}

function initPWA() {
  if (!("serviceWorker" in navigator)) return;
  const local = ["localhost", "127.0.0.1"].includes(location.hostname);
  if (location.protocol !== "https:" && !local) return; // service workers need HTTPS
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initClock();
  initForm();
  initCV();
  initPWA();
});

/* ---------- 10. ALWAYS SHOW CONTENT ----------
   Content must not wait for slow fonts or CDN files (window "load" can be delayed a long time). */
function renderContent() {
  try { applyLang(lang); } catch (err) { console.error("[SD portfolio] content failed:", err); }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderContent);
else renderContent();

// Hide the loading screen after 3 seconds at most, whatever else is still loading
setTimeout(() => { const l = document.getElementById("loader"); if (l) l.classList.add("done"); }, 3000);
