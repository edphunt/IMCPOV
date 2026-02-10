// ---- Data you can replace later (CMS, Google Sheet, Airtable, etc.) ----
const POSTS = [
  // New post template:
  // {
  //   id: "my-new-post",
  //   title: "Post title",
  //   deck: "One-line summary",
  //   topic: "Journalism",
  //   type: "article", // article | podcast | webinar
  //   format: "Essay",
  //   author: "Your Name",
  //   date: "2026-02-03",
  //   readMins: 5,
  //   content: `<p>Optional full post HTML for detail view.</p>`,
  // },
  {
    id: "newsroom-signals",
    title: "Welcome to IMC POV, Northwestern Medill School's thought leadership hub",
    deck:
      "Jeffery Treem, Professor of integrated marketing communications at Northwestern Medill School, introduces IMC POV and discusses Medill's thought leadership goals for 2026",
    topic: "Integrated Marketing Communications",
    format: "Note",
    thumbnail: "./assets/images/imcpovfieldnote2.png",
    author: "Jeffery Treem",
    date: "2026-02-04",
    readMins: 5,
  },
  {
    id: "how-marketers-using-ai",
    title: "How marketers are using AI",
    deck:
      "There's a lot of hype around artificial intelligence (AI). Medill has developed a framework for marketers to focus on three applications.",
    topic: "AI",
    format: "Framework",
    author: "Medill Executive Education Team",
    date: "2026-02-04",
    readMins: 5,
    content: `
<p>Marketers can simplify AI strategy by grouping tools into three practical types: <strong>predictive AI</strong>, which helps forecast customer needs and behaviors; <strong>generative AI</strong>, which helps create content and experiences; and <strong>agentic AI</strong>, which helps automate decisions and actions that drive outcomes.</p>

<p><img src="./assets/images/ai-framework.jpg" alt="AI applications framework for marketers" style="width:100%;height:auto;border-radius:12px;" /></p>
`,
  },
  {
    id: "trust-drivers",
    title: "A practical model of trust for high-knowledge audiences",
    deck:
      "Three drivers show up consistently: channel credibility, workflow fit, and language that signals rigor—plus a simple way to audit your messaging.",
    topic: "Strategic Communication",
    format: "Framework",
    author: "IMC POV Editorial Team",
    date: "2026-01-21",
    readMins: 6,
  },
  {
    id: "article2",
    title: "AI Disclosure",
    deck:
      "An AI disclosure framework for marketing and journalism teams.",
    topic: "Integrated Marketing Communication",
    format: "Research Article",
    author: "IMC POV Editorial Team",
    date: "2026-02-03",
    readMins: 6,
    content: `
<h2>What this is</h2>
<p>This is a starter post page. You can write in plain HTML here for now.</p>

<h2>The framework</h2>
<ol>
  <li><strong>Declarative disclosure</strong>: the advertiser explicitly states GenAI involvement.</li>
  <li><strong>Regulatory disclosure</strong>: platform/policy-driven disclosure labels and requirements.</li>
  <li><strong>Infrastructural disclosure</strong>: metadata, watermarks, and provenance tooling.</li>
</ol>

<h2>Practical takeaway</h2>
<p>Use the lightest disclosure that still builds trust—then add proof (process, constraints, auditability) when stakes are high.</p>
`,
  },
  {
    id: "ai-accountability",
    title: "AI can enhance work—but it can’t be accountable for it",
    deck:
      "In journalism and marketing, accountability isn’t a feature you can automate. Here’s how teams design review loops that keep humans responsible.",
    topic: "Media & Technology",
    format: "Essay",
    thumbnail: "./assets/images/imcpovarticle.png",
    author: "IMC Faculty + Students",
    date: "2026-01-14",
    readMins: 7,
  },
  {
    id: "attention-economy",
    title: "Measurement in the attention economy: what to stop pretending you know",
    deck:
      "A guide to cleaner inference: experiments, quasi-experiments, and the limits of dashboards when channels interact.",
    topic: "Data Analytics & Measurement",
    format: "Guide",
    thumbnail: "./assets/images/imcpovguide.png",
    author: "Medill Analytics Lab",
    date: "2025-12-10",
    readMins: 8,
  },
];

const PODCASTS = [
  {
    id: "pod-episode-04",
    title: "Episode 4: Professor Vijay Viswanathan on what marketers need to know about AI",
    deck: "In this episode, Vijay Viswanathan, who is the Hamad Bin Khalifa Al-Thani Professor of Integrated Marketing Communications and Associate Dean of IMC, covers the essential AI concepts, risks, and opportunities marketers should understand right now.",
    topic: "Media & Technology",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-02-09",
    readMins: 12,
    thumbnail: "./assets/images/imcpovpod.png",
    detailThumbnail: "./assets/images/imcpovpod.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/4abvGifNuvA"
    title="Episode 4: Professor Vijay Viswanathan on what marketers need to know about AI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
  {
    id: "pod-episode-03",
    title: "Episode 3: Spencer Ford, Sport Lead of Global Energy + Collaborations Marketing at Nike",
    deck: "In this episode, Spencer Ford explains how the best brand managers create seamless experiences by anticipating that customers shop in retail environments with mobile devices in hand and social media shaping their decisions.",
    topic: "Strategic Communication",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-01-26",
    readMins: 12,
    thumbnail: "./assets/images/imcpovpod.png",
    detailThumbnail: "./assets/images/imcpovpod.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/xpvOS2Pt0dc"
    title="Episode 3: Spencer Ford, Sport Lead of Global Energy + Collaborations Marketing at Nike"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
  {
    id: "pod-episode-02",
    title: "Episode 2: Srikant Gokhale, Adjunct Lecturer at Northwestern University Medill School",
    deck: "In this episode, Srikant Gokhale provides the history of how strategic thinking has evolved over time, and concludes with a simple explanation: Strategy is a dynamic, customer-centered process.",
    topic: "Strategic Communication",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-02-01",
    readMins: 2,
    thumbnail: "./assets/images/imcpovpod.png",
    detailThumbnail: "./assets/images/imcpovpod.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/3_xlj4xF9gs"
    title="Episode 2: Srikant Gokhale, Adjunct Lecturer at Northwestern University Medill School"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
  {
    id: "pod-episode-01",
    title: "Episode 1: Lilly Raymond, Head of MarTech & Operations at Prudential Financial",
    deck: "In this episode, we discuss how marketing leaders can evaluate AI disruption, define success metrics, and collaborate effectively with technology teams.",
    topic: "Media & Technology",
    format: "Podcast",
    author: "Medill Executive Education Team",
    date: "2026-02-04",
    readMins: 9,
    thumbnail: "./assets/images/imcpovpod.png",
    detailThumbnail: "./assets/images/imcpovpod.png",
    content: `
<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;">
  <iframe
    src="https://www.youtube-nocookie.com/embed/HyQDfZnXgWI"
    title="Episode 1: Lilly Raymond, Head of MarTech & Operations at Prudential Financial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>
`,
  },
];

const WEBINARS = [
  {
    id: "web-ai-disclosure",
    title: "Webinar: AI disclosure that builds trust",
    deck: "A practical model for disclosure depth by risk, audience, and channel.",
    topic: "Integrated Marketing Communication",
    format: "Webinar",
    author: "Northwestern Medill Faculty",
    date: "2026-02-10",
    readMins: 60,
    content: "<p>Webinar page placeholder. Add registration or replay link here.</p>",
  },
  {
    id: "web-measurement-design",
    title: "Webinar: Measurement design beyond dashboards",
    deck: "How to pair experiments and qualitative checks to avoid false confidence.",
    topic: "Data Analytics & Measurement",
    format: "Webinar",
    author: "Medill Analytics Lab",
    date: "2026-02-18",
    readMins: 55,
    content: "<p>Webinar page placeholder. Add registration or replay link here.</p>",
  },
];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function uniqueTopics(posts) {
  return [...new Set(posts.map((p) => p.topic))].sort((a, b) => a.localeCompare(b));
}

function renderTopicOptions(topics) {
  const select = $("#topic");
  topics.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    select.appendChild(opt);
  });
}

function renderTopicChips(topics) {
  const wrap = $("#topicChips");
  if (!wrap) return;
  wrap.innerHTML = "";

  const all = document.createElement("button");
  all.className = "chip active";
  all.type = "button";
  all.dataset.topic = "all";
  all.textContent = "All";
  wrap.appendChild(all);

  topics.forEach((t) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.type = "button";
    b.dataset.topic = t;
    b.textContent = t;
    wrap.appendChild(b);
  });

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button.chip");
    if (!btn) return;
    const topic = btn.dataset.topic;

    // Sync select + chips
    $("#topic").value = topic;
    setActiveChip(topic);

    applyFilters();
  });
}

function setActiveChip(topic) {
  $$(".chip").forEach((c) => c.classList.toggle("active", c.dataset.topic === topic));
}

function getCardCoverImage(post) {
  return post.thumbnail || (post.format === "Framework"
    ? "./assets/images/imcpovframework.png"
    : post.format === "Research Article"
      ? "./assets/images/imcpovarticle.png"
      : post.format === "Podcast"
        ? "./assets/images/imcpovpod.png"
        : "./assets/images/trust-abstract-nu.svg");
}

function postCard(post) {
  const el = document.createElement("article");
  const formatClass = `format-${String(post.format || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
  el.className = `post ${formatClass}`;
  const coverImage = getCardCoverImage(post);
  const coverStyle = coverImage
    ? ` style="--cover-image: url('${escapeHtml(coverImage)}');"`
    : "";
  const coverClass = coverImage ? "post-cover has-thumbnail" : "post-cover";
  const sideBySide = true;
  el.innerHTML = `
    <div class="topline">
      <span class="topline-left">
        <span class="badge">${escapeHtml(post.format)}</span>
        <span class="badge topic-badge">${escapeHtml(post.topic)}</span>
      </span>
      <span class="time">${formatDate(post.date)}</span>
    </div>

    ${sideBySide
      ? `<div class="post-main side-by-side">${coverImage ? `<img class="post-cover-image" src="${escapeHtml(coverImage)}" alt="" aria-hidden="true" />` : ""}<div class="post-copy"><h3>${escapeHtml(post.title)}</h3>${post.deck ? `<p>${escapeHtml(post.deck)}</p>` : ""}</div></div>`
      : `<div class="${coverClass}" aria-hidden="true"${coverStyle}></div><h3>${escapeHtml(post.title)}</h3>${post.deck ? `<p>${escapeHtml(post.deck)}</p>` : ""}`}

    <div class="meta">
      <span>${escapeHtml(post.author)}</span>
      <span style="margin-left:auto;">
        <span class="read">${post.readMins} min ${post.format === "Podcast" ? "listen" : "read"} →</span>
      </span>
    </div>
  `;

  const href = `#post/${encodeURIComponent(post.id)}`;
  el.dataset.href = href;
  el.tabIndex = 0;
  el.setAttribute("role", "link");
  el.setAttribute("aria-label", `Open ${post.title}`);
  el.addEventListener("click", () => {
    window.location.hash = href;
  });
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.hash = href;
    }
  });

  return el;
}

// Very small HTML escape to avoid accidental injection when you swap data sources.
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderPosts(posts) {
  const grid = $("#insightsGrid");
  grid.innerHTML = "";
  if (!posts.length) {
    grid.innerHTML = `<p>No posts yet for this selection.</p>`;
    return;
  }
  posts.forEach((p) => grid.appendChild(postCard(p)));
}

function applyFilters() {
  const q = $("#search").value.trim().toLowerCase();
  const t = $("#topic").value;

  const filtered = POSTS.filter((p) => {
    const matchesTopic = t === "all" ? true : p.topic === t;
    const blob = `${p.title} ${p.deck} ${p.topic} ${p.author} ${p.format}`.toLowerCase();
    const matchesQuery = q ? blob.includes(q) : true;
    return matchesTopic && matchesQuery;
  });

  renderPosts(filtered);
}

function initMenu() {
  const btn = $("#menuBtn");
  const mobile = $("#mobileNav");

  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    mobile.hidden = open;
  });

  // close menu on link click
  mobile.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      btn.setAttribute("aria-expanded", "false");
      mobile.hidden = true;
    }
  });
}

function initNewsletter() {
  const form = $("#newsletterForm");
  if (!form) return;
  const msg = $("#formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = $("#email").value.trim();

    // replace this with your mailing list provider (Mailchimp, Campaign Monitor, etc.)
    msg.textContent = `Thanks—you're in. (Demo) Confirmed: ${email}`;
    form.reset();
  });
}

function seedEditorPick() {
  // Use the first insight in POSTS so home matches the top of Insights.
  const pick = POSTS[0];
  const titleEl = $("#editorTitle") || $("#heroTitle");
  if (titleEl) titleEl.textContent = pick.title;
  $("#editorDesc").textContent = pick.deck;
  $("#editorByline").textContent = pick.author;
  $("#editorMeta").textContent = "";
  const type = $("#editorType");
  if (type) type.textContent = pick.format;
  const topic = $("#editorTopic");
  if (topic) topic.textContent = pick.topic;
  $("#editorTime").textContent = formatDate(pick.date);
  const href = `#post/${encodeURIComponent(pick.id)}`;
  const link = $("#editorLink");
  if (link) {
    link.href = href;
    link.textContent = `${pick.readMins} min ${pick.format === "Podcast" ? "listen" : "read"} →`;
  }
  const cover = $(".home-feature-image");
  if (cover) {
    cover.src = getCardCoverImage(pick);
  }

  const card = $("#homeInsightCard");
  if (card) {
    card.dataset.href = href;
    card.tabIndex = 0;
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `Open ${pick.title}`);
    card.onclick = () => {
      window.location.hash = href;
    };
    card.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.hash = href;
      }
    };
  }
}

function syncHomeLockupWidth() {
  const lockup = $(".home-lockup");
  const left = $(".nav-left a");
  const rightLinks = $$(".nav-right a");
  const right = rightLinks[rightLinks.length - 1];
  if (!lockup || !left || !right) return;

  const width = right.getBoundingClientRect().right - left.getBoundingClientRect().left;
  const safeWidth = Math.max(280, Math.round(width));
  document.documentElement.style.setProperty("--home-lockup-width", `${safeWidth}px`);
}

let HOME_HTML = "";

function renderHome() {
  const main = $("#main");
  main.innerHTML = HOME_HTML;
  seedEditorPick();
  requestAnimationFrame(syncHomeLockupWidth);
}

function renderInsightsPage(filters = {}) {
  const main = $("#main");
  main.innerHTML = `
    <section class="section" id="insights" aria-label="Insights list">
      <div class="container">
        <div class="grid" id="insightsGrid" aria-live="polite"></div>
      </div>
    </section>
  `;

  const filtered = POSTS.filter((p) => {
    const matchesFormat = filters.format ? p.format === filters.format : true;
    const matchesTopic = filters.topic ? p.topic === filters.topic : true;
    return matchesFormat && matchesTopic;
  });

  renderPosts(filtered);
}

function renderSimpleListPage(id, posts) {
  const main = $("#main");
  main.innerHTML = `
    <section class="section" id="${id}" aria-label="${escapeHtml(id)} list">
      <div class="container">
        <div class="grid" id="insightsGrid" aria-live="polite"></div>
      </div>
    </section>
  `;

  renderPosts(posts);
}

function renderCollectionPage(id, title, subtitle, posts) {
  const main = $("#main");
  main.innerHTML = `
    <section class="section" id="${id}">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>${escapeHtml(title)}</h2>
            <p class="section-sub">${escapeHtml(subtitle)}</p>
          </div>
        </div>
        <div class="grid" id="insightsGrid" aria-live="polite"></div>
      </div>
    </section>
  `;
  renderPosts(posts);
}

function renderNewsletterPage() {
  const main = $("#main");
  main.innerHTML = `
    <section class="section cta" id="newsletter" aria-labelledby="newsletterTitle">
      <div class="container newsletter">
        <div>
          <h2 id="newsletterTitle">Get IMC POV in your inbox</h2>
          <p class="section-sub">
            A short, editorial digest—new frameworks, new research, and the best work across Medill.
          </p>
        </div>
        <form class="form" id="newsletterForm">
          <label class="sr-only" for="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="you@domain.com" required />
          <button class="btn primary" type="submit">Subscribe</button>
          <p class="fineprint" id="formMsg" role="status" aria-live="polite">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  `;
  initNewsletter();
}

function renderPostDetail(id) {
  const main = $("#main");
  const post = [...POSTS, ...PODCASTS, ...WEBINARS].find((p) => p.id === id);

  if (!post) {
    main.innerHTML = `
      <section class="section">
        <div class="container">
          <p><a class="read" href="#insights">← insights</a></p>
          <h1>Post not found</h1>
          <p>The requested post does not exist.</p>
        </div>
      </section>
    `;
    return;
  }

  const backHash = post.format === "Podcast"
    ? "#podcasts"
    : post.format === "Webinar"
      ? "#webinars"
      : "#insights";
  const backLabel = post.format === "Podcast"
    ? "podcasts"
    : post.format === "Webinar"
      ? "webinars"
      : "insights";

  const detailCoverClass = post.format === "Podcast" ? "detail-cover detail-cover-half" : "detail-cover";
  const hideDetailCover = post.id === "newsroom-signals";
  const detailCoverSrc = hideDetailCover
    ? ""
    : post.format === "Podcast"
    ? (post.detailThumbnail || "./assets/images/imcpovpod.png")
    : post.thumbnail;
  const detailCover = detailCoverSrc
    ? `<p><img class="${detailCoverClass}" src="${escapeHtml(detailCoverSrc)}" alt="${escapeHtml(post.title)} thumbnail" /></p>`
    : "";

  main.innerHTML = `
    <section class="section">
      <div class="container">
        <p><a class="read" href="${backHash}">← ${backLabel}</a></p>
        <article>
          ${post.format === "Podcast"
            ? `<p class="topline-left">
            <span class="badge">${escapeHtml(post.format)}</span>
            <span class="badge topic-badge">${escapeHtml(post.topic)}</span>
          </p>
          <div>${
            post.content
              ? post.content
              : "<p>No full content yet. Check back soon for the complete article.</p>"
          }</div>
          <h1 class="podcast-detail-title">${escapeHtml(post.title).replaceAll("\n", "<br />")}</h1>
          <p>${escapeHtml(post.deck)}</p>
          <div class="post-byline-block">
            <div>${escapeHtml(post.author)}</div>
            <div>${formatDate(post.date)}</div>
            <div>${post.readMins} min listen</div>
          </div>`
            : `<p class="topline-left">
            <span class="badge">${escapeHtml(post.format)}</span>
            <span class="badge topic-badge">${escapeHtml(post.topic)}</span>
          </p>
          ${detailCover}
          <h1>${escapeHtml(post.title).replaceAll("\n", "<br />")}</h1>
          <p>${escapeHtml(post.deck)}</p>
          <div class="post-byline-block">
            <div>${escapeHtml(post.author)}</div>
            <div>${formatDate(post.date)}</div>
            <div>${post.readMins} min read</div>
          </div>
          <div>
            ${
              post.content
                ? post.content
                : "<p>No full content yet. Check back soon for the complete article.</p>"
            }
          </div>`}
        </article>
      </div>
    </section>
  `;

  if (post.format === "Podcast") primeVideoThumbnail(2);
}

function primeVideoThumbnail(seconds = 2) {
  const v = document.querySelector("video");
  if (!v) return;

  const resetStartOnFirstPlay = () => {
    try {
      v.currentTime = 0;
    } catch (_) {
      // Ignore reset failures on stricter browser policies.
    }
  };

  const seek = () => {
    try {
      v.currentTime = seconds;
      v.pause();
      v.addEventListener("play", resetStartOnFirstPlay, { once: true });
    } catch (_) {
      // Ignore seek failures for stricter browser autoplay policies.
    }
  };

  if (v.readyState >= 1) seek();
  else v.addEventListener("loadedmetadata", seek, { once: true });
}

function setActiveNav(hash) {
  let activeHash = "";
  if (hash.startsWith("#insights")) activeHash = "#insights";
  else if (hash.startsWith("#podcasts")) activeHash = "#podcasts";
  else if (hash.startsWith("#webinars")) activeHash = "#webinars";
  else if (hash.startsWith("#newsletter")) activeHash = "#newsletter";

  $$("header .nav a, #mobileNav a").forEach((a) => {
    const isActive = activeHash && a.getAttribute("href") === activeHash;
    a.classList.toggle("active", Boolean(isActive));
  });
}

function renderRoute() {
  const hash = window.location.hash || "";
  setActiveNav(hash);
  const m = hash.match(/^#post\/(.+)$/);
  if (m) {
    renderPostDetail(decodeURIComponent(m[1]));
    return;
  }
  const insightsFilterMatch = hash.match(/^#insights\/(format|topic)\/(.+)$/);
  if (insightsFilterMatch) {
    const key = insightsFilterMatch[1];
    const value = decodeURIComponent(insightsFilterMatch[2]);
    renderInsightsPage({ [key]: value });
    return;
  }
  if (hash === "#insights") {
    renderInsightsPage();
    return;
  }
  if (hash === "#podcasts") {
    renderSimpleListPage("podcasts", PODCASTS);
    return;
  }
  if (hash === "#webinars") {
    renderSimpleListPage("webinars", WEBINARS);
    return;
  }
  if (hash === "#newsletter") {
    renderNewsletterPage();
    return;
  }
  renderHome();
}

function init() {
  $("#year").textContent = String(new Date().getFullYear());
  HOME_HTML = $("#main").innerHTML;

  showLocalFileWarning();
  initMenu();
  renderRoute();
  window.addEventListener("hashchange", renderRoute);
  window.addEventListener("resize", syncHomeLockupWidth);
}

document.addEventListener("DOMContentLoaded", init);

function showLocalFileWarning() {
  if (window.location.protocol !== "file:") return;

  const banner = document.createElement("div");
  banner.className = "local-warning";
  banner.innerHTML = `
    <div class="container local-warning-inner">
      <span>
        <strong>Local preview:</strong> Safari blocks embedded videos on file:// pages.
        Run <code>./serve.sh</code> and open <code>http://localhost:8000</code>.
      </span>
      <a href="http://localhost:8000/" target="_blank" rel="noopener">Open local server</a>
    </div>
  `;

  const skip = document.querySelector(".skip");
  if (skip && skip.parentNode) {
    skip.parentNode.insertBefore(banner, skip.nextSibling);
  } else {
    document.body.insertBefore(banner, document.body.firstChild);
  }
}
