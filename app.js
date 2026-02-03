// ---- Data you can replace later (CMS, Google Sheet, Airtable, etc.) ----
const POSTS = [
  {
    id: "trust-drivers",
    title: "A practical model of trust for high-knowledge audiences",
    deck:
      "Three drivers show up consistently: channel credibility, workflow fit, and language that signals rigor—plus a simple way to audit your messaging.",
    topic: "Trust & Credibility",
    format: "Framework",
    author: "Medill.Insights Editorial",
    date: "2026-01-21",
    readMins: 6,
  },
  {
    id: "article2",
    title: "ai disclosure",
    deck:
      "ai disclosure framework for marketing and journalism teams",
    topic: "ai and advertising",
    format: "research article",
    author: "Medill.Insights Editorial",
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
    topic: "AI & Work",
    format: "Essay",
    author: "IMC Faculty + Students",
    date: "2026-01-14",
    readMins: 7,
  },
  {
    id: "attention-economy",
    title: "Measurement in the attention economy: what to stop pretending you know",
    deck:
      "A guide to cleaner inference: experiments, quasi-experiments, and the limits of dashboards when channels interact.",
    topic: "Measurement",
    format: "Guide",
    author: "Medill Analytics Lab",
    date: "2025-12-10",
    readMins: 8,
  },
  {
    id: "newsroom-signals",
    title: "Signals, verification, and the new editorial craft",
    deck:
      "Verification is increasingly a workflow problem. Build systems that make good judgment easier, not heroic.",
    topic: "Journalism Practice",
    format: "Field note",
    author: "Journalism Faculty",
    date: "2025-11-22",
    readMins: 5,
  },
  {
    id: "brand-credibility",
    title: "Credibility isn’t tone—it's constraint + evidence",
    deck:
      "Why ‘confident’ language backfires with expert audiences, and how to write claims that survive scrutiny.",
    topic: "Trust & Credibility",
    format: "Mini-study",
    author: "IMC Research Group",
    date: "2025-10-03",
    readMins: 6,
  },
  {
    id: "platform-shifts",
    title: "Platform shifts: how news and marketing teams adapt without whiplash",
    deck:
      "A playbook for responding to algorithm changes with hypothesis-driven testing instead of reactive churn.",
    topic: "Strategy",
    format: "Playbook",
    author: "Medill Practitioners Network",
    date: "2025-09-18",
    readMins: 9,
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

function postCard(post) {
  const el = document.createElement("article");
  el.className = "post";
  el.innerHTML = `
    <div class="topline">
      <span class="badge">${escapeHtml(post.format)}</span>
      <span class="time">${formatDate(post.date)}</span>
    </div>

    <h3>${escapeHtml(post.title)}</h3>
    <p>${escapeHtml(post.deck)}</p>

    <div class="meta">
      <span>${escapeHtml(post.topic)}</span>
      <span>•</span>
      <span>${escapeHtml(post.author)}</span>
      <span>•</span>
      <span>${post.readMins} min read</span>
      <span style="margin-left:auto;">
        <a class="read" href="#post/${encodeURIComponent(post.id)}" aria-label="Read ${escapeHtml(post.title)}">Read →</a>
      </span>
    </div>
  `;
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
  $("#metricPosts").textContent = String(filtered.length);
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
  // Use the first post as a featured pick for now.
  const pick = POSTS[0];
  $("#editorTitle").textContent = pick.title;
  $("#editorDesc").textContent = pick.deck;
  $("#editorByline").textContent = pick.author;
  $("#editorMeta").textContent = `${pick.format} • ${pick.readMins} min read`;
}

let HOME_HTML = "";

function renderHome() {
  const main = $("#main");
  main.innerHTML = HOME_HTML;

  const topics = uniqueTopics(POSTS);
  renderTopicOptions(topics);
  renderTopicChips(topics);

  seedEditorPick();
  renderPosts(POSTS);
  $("#metricPosts").textContent = String(POSTS.length);

  $("#search").addEventListener("input", applyFilters);
  $("#topic").addEventListener("change", (e) => {
    setActiveChip(e.target.value);
    applyFilters();
  });

  initNewsletter();
}

function renderPostDetail(id) {
  const main = $("#main");
  const post = POSTS.find((p) => p.id === id);

  if (!post) {
    main.innerHTML = `
      <section class="section">
        <div class="container">
          <p><a class="read" href="#">← Back to insights</a></p>
          <h1>Post not found</h1>
          <p>The requested post does not exist.</p>
        </div>
      </section>
    `;
    return;
  }

  main.innerHTML = `
    <section class="section">
      <div class="container">
        <p><a class="read" href="#">← Back to insights</a></p>
        <article>
          <h1>${escapeHtml(post.title)}</h1>
          <p>${escapeHtml(post.deck)}</p>
          <p>
            <span>${escapeHtml(post.topic)}</span>
            <span> • </span>
            <span class="badge">${escapeHtml(post.format)}</span>
          </p>
          <p>${escapeHtml(post.author)} • ${formatDate(post.date)} • ${post.readMins} min read</p>
          <div>
            ${
              post.content
                ? post.content
                : "<p>No full content yet. Check back soon for the complete article.</p>"
            }
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderRoute() {
  const hash = window.location.hash || "";
  const m = hash.match(/^#post\/(.+)$/);
  if (m) {
    renderPostDetail(decodeURIComponent(m[1]));
    return;
  }
  renderHome();
}

function init() {
  $("#year").textContent = String(new Date().getFullYear());
  HOME_HTML = $("#main").innerHTML;

  initMenu();
  renderRoute();
  window.addEventListener("hashchange", renderRoute);
}

document.addEventListener("DOMContentLoaded", init);
