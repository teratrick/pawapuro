const scripts = {
  fighters: {
    title: "职业棒球 12 球团",
    summary: "最适合第一局的新手剧本。规则接近传统 Success，重点是监督评价、教练任务和后期 Special Tag。",
    meta: ["约 85 周", "2-3 小时", "先学基础"],
    loop: [
      "选择想培养的球员类型和对应球团。",
      "用 Appeal 提高监督和队友评价。",
      "只接看起来能完成的教练任务。",
      "升上一军后，提高继承选手和固有角色评价。",
      "评价到位后，后半段集中追 Special Tag 和诀窍事件。",
      "尽量拿赛季第 1，进入日本系列赛。"
    ],
    keyTitle: "关键数值",
    keys: [
      "二军监督评价到 120 后可以升上一军。",
      "监督评价到 80 后更容易被安排为先发。",
      "女友线目标是 12 月第 4 周前交往。"
    ]
  },
  captain: {
    title: "千将高校",
    summary: "短局循环型剧本。重点不是单局极限，而是通过 Captain Circle、CP 和潜力经验建立长期基础。",
    meta: ["约 48 周", "1-1.5 小时", "较稳定"],
    loop: [
      "看队友和经理的潜力技能。",
      "把合适角色放进 Captain Circle。",
      "练习时积累 CP 和潜力经验。",
      "用 CP 扩大 Circle、编辑成员或强化练习。",
      "结束时选择下一任队长，为下一轮做准备。"
    ],
    keyTitle: "CP 速记",
    keys: [
      "和队友或经理一起练习时，每人约 50 CP。",
      "练习地点有 Needs 时，每个 Needs 约 300 CP。",
      "Circle 扩张费用会逐次提高，前四次约 1000、1500、2000、2500 CP。",
      "强化练习约 1000 CP，适合高收益阶段使用。"
    ]
  },
  future: {
    title: "Powerful Futures",
    summary: "上限高但波动大。核心是积累 Metayancy，并把超 Metayancy 或 Yans Break 放到高等级练习阶段。",
    meta: ["约 80 周", "约 2 小时", "高风险高收益"],
    loop: [
      "找队友多的练习，快速积累 Metayancy。",
      "Metayancy 到 100% 后，判断是直接使用还是等待 Yans Break。",
      "如果 100% 后不发动超 Metayancy，约 3 周后进入 Yans Break。",
      "Yans Break 期间一回合最多连续练习 5 次。",
      "关键月份前准备体力和降低受伤风险的道具。"
    ],
    keyTitle: "新手提醒",
    keys: [
      "不要把第一次目标定成极限育成，先学会爆发节奏。",
      "连续练习会放大受伤风险，装备和道具很重要。",
      "9-10 月开始控制 Metayancy，11 月集中吃高等级练习收益。"
    ]
  }
};

const checklist = [
  {
    title: "开局前",
    items: [
      "决定培养投手还是野手。",
      "选一个剧本，不在一局中临时换目标。",
      "12 球团先看球团是否适合本次目标。"
    ]
  },
  {
    title: "前期",
    items: [
      "练习优先看人多、关键角色在、能涨剧本资源。",
      "体力低时避免硬上高风险练习。",
      "推进关键角色事件，但不为低收益事件放弃主线资源。"
    ]
  },
  {
    title: "中期",
    items: [
      "检查女友线是否能赶上圣诞。",
      "检查队友评价是否接近 Special Tag。",
      "把道具、体力和剧本资源留给关键月份。"
    ]
  },
  {
    title: "后期",
    items: [
      "优先追高收益练习和比赛胜利。",
      "及时分配经验点，避免结算前漏补关键能力。",
      "能拿金特就拿，但不牺牲核心能力。"
    ]
  }
];

const terms = [
  ["Success / サクセス", "限定回合内培养原创球员的剧情育成模式。"],
  ["金特", "强力特殊能力，通常来自角色事件、女友或剧本条件。"],
  ["Special Tag", "高评价队友参与时出现的高收益练习。"],
  ["Metayancy", "Powerful Futures 的核心资源，用于进入超 Metayancy 或 Yans Break。"],
  ["Yans Break", "Powerful Futures 的高风险连续练习爆发状态。"],
  ["Captain Circle", "千将高校的核心配置系统，决定队友技能收益。"],
  ["CP", "Captaincy Point，用于 Circle 编辑、扩张、强化练习等。"],
  ["潜力经验", "千将高校中提升角色潜力等级、解锁潜力技能的资源。"],
  ["监督评价", "12 球团里影响升上一军和先发机会的关键评价。"]
];

const mistakes = [
  ["只点当前经验最多的练习", "单回合经验不是全部。队友评价、女友进度、诀窍事件和后期爆发同样重要。"],
  ["前期疯狂休息", "休息不产出核心资源。能用低风险练习、精神练习、事件恢复或道具解决时，尽量别空过。"],
  ["每个角色都想追", "每局选 1-2 条核心角色线即可，其他角色顺手涨评价。"],
  ["不看剧本专属系统", "Powerful Futures 看 Metayancy，12 球团看任务和评价，千将高校看 Captain Circle 和 CP。"]
];

const panel = document.querySelector("#script-panel");
const segments = document.querySelectorAll(".segment");
const checklistList = document.querySelector("#checklist-list");
const progressText = document.querySelector("#progress-text");
const resetChecks = document.querySelector("#reset-checks");
const termList = document.querySelector("#term-list");
const termSearch = document.querySelector("#term-search");
const mistakeList = document.querySelector("#mistake-list");
const guideContent = document.querySelector("#guide-content");
const guideToc = document.querySelector("#guide-toc");
const guideSearch = document.querySelector("#guide-search");
const checklistStorageKey = "pawapuro-success-checklist";

function readSavedChecklist() {
  try {
    return JSON.parse(localStorage.getItem(checklistStorageKey) || "{}");
  } catch {
    return {};
  }
}

function writeSavedChecklist(state) {
  try {
    localStorage.setItem(checklistStorageKey, JSON.stringify(state));
  } catch {
    // Some file:// or embedded browser contexts block localStorage.
  }
}

function clearSavedChecklist() {
  try {
    localStorage.removeItem(checklistStorageKey);
  } catch {
    // Ignore storage errors; the visible checklist state is still reset.
  }
}

function renderScript(key) {
  const data = scripts[key];
  panel.innerHTML = `
    <header>
      <div>
        <h3>${data.title}</h3>
        <p class="script-summary">${data.summary}</p>
      </div>
      <div class="script-meta">
        ${data.meta.map((item) => `<span class="pill">${item}</span>`).join("")}
      </div>
    </header>
    <div class="script-body">
      <div>
        <h4>核心循环</h4>
        <ol>${data.loop.map((item) => `<li>${item}</li>`).join("")}</ol>
      </div>
      <div class="key-box">
        <h4>${data.keyTitle}</h4>
        <ul>${data.keys.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </div>
  `;
}

function renderChecklist() {
  const savedState = readSavedChecklist();
  checklistList.innerHTML = checklist
    .map((group, groupIndex) => {
      const items = group.items
        .map((item, itemIndex) => {
          const id = `check-${groupIndex}-${itemIndex}`;
          const checked = savedState[id] ? "checked" : "";
          return `
            <label class="check-item" for="${id}">
              <input id="${id}" type="checkbox" ${checked} />
              <span>${item}</span>
            </label>
          `;
        })
        .join("");
      return `<article class="check-group"><h3>${group.title}</h3>${items}</article>`;
    })
    .join("");
}

function updateProgress() {
  const checks = checklistList.querySelectorAll("input[type='checkbox']");
  const checked = checklistList.querySelectorAll("input[type='checkbox']:checked");
  progressText.textContent = `${checked.length} / ${checks.length}`;
  const state = {};
  checks.forEach((input) => {
    state[input.id] = input.checked;
  });
  writeSavedChecklist(state);
}

function renderTerms(filter = "") {
  const normalized = filter.trim().toLowerCase();
  const filtered = terms.filter(([title, body]) => {
    return `${title} ${body}`.toLowerCase().includes(normalized);
  });
  termList.innerHTML = filtered.length
    ? filtered.map(([title, body]) => `<article class="term-card"><h3>${title}</h3><p>${body}</p></article>`).join("")
    : `<article class="term-card"><h3>没有匹配结果</h3><p>换一个关键词试试。</p></article>`;
}

function renderMistakes() {
  mistakeList.innerHTML = mistakes
    .map(([title, body]) => `<article class="mistake-card"><h3>${title}</h3><p>${body}</p></article>`)
    .join("");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function slugify(value, index) {
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
  return slug || `section-${index}`;
}

function parseInlineMarkdown(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return text;
}

function renderTable(lines) {
  const rows = lines
    .filter((line) => !/^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim()))
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => parseInlineMarkdown(cell.trim()))
    );
  if (!rows.length) return "";

  const [head, ...body] = rows;
  return `
    <div class="table-scroll">
      <table>
        <thead><tr>${head.map((cell) => `<th>${cell}</th>`).join("")}</tr></thead>
        <tbody>
          ${body.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const toc = [];
  const html = [];
  let paragraph = [];
  let list = [];
  let listType = null;
  let table = [];
  let sectionOpen = false;
  let headingIndex = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${parseInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    const tag = listType === "ol" ? "ol" : "ul";
    html.push(`<${tag}>${list.map((item) => `<li>${parseInlineMarkdown(item)}</li>`).join("")}</${tag}>`);
    list = [];
    listType = null;
  };

  const flushTable = () => {
    if (!table.length) return;
    html.push(renderTable(table));
    table = [];
  };

  const flushBlocks = () => {
    flushParagraph();
    flushList();
    flushTable();
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushBlocks();
      return;
    }

    if (line.startsWith("|")) {
      flushParagraph();
      flushList();
      table.push(line);
      return;
    }

    flushTable();

    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const title = heading[2].trim();
      const id = slugify(title, headingIndex);

      if (level === 2) {
        if (sectionOpen) html.push("</section>");
        html.push(`<section class="guide-section" id="${id}">`);
        sectionOpen = true;
      } else if (!sectionOpen) {
        html.push('<section class="guide-section guide-section-intro">');
        sectionOpen = true;
      }

      const headingTag = `h${Math.min(level, 4)}`;
      const headingId = level === 2 ? "" : ` id="${id}"`;
      html.push(`<${headingTag}${headingId}>${parseInlineMarkdown(title)}</${headingTag}>`);
      if (level <= 3) {
        toc.push({ id, level, title });
      }
      headingIndex += 1;
      return;
    }

    const unordered = /^[-*]\s+(.+)$/.exec(line);
    if (unordered) {
      flushParagraph();
      if (listType && listType !== "ul") flushList();
      listType = "ul";
      list.push(unordered[1]);
      return;
    }

    const ordered = /^\d+\.\s+(.+)$/.exec(line);
    if (ordered) {
      flushParagraph();
      if (listType && listType !== "ol") flushList();
      listType = "ol";
      list.push(ordered[1]);
      return;
    }

    if (line.startsWith(">")) {
      flushBlocks();
      html.push(`<blockquote>${parseInlineMarkdown(line.replace(/^>\s?/, ""))}</blockquote>`);
      return;
    }

    paragraph.push(line);
  });

  flushBlocks();
  if (sectionOpen) html.push("</section>");
  return { html: html.join(""), toc };
}

function renderGuideToc(toc) {
  guideToc.innerHTML = toc
    .map((item) => {
      const className = item.level === 3 ? "toc-link toc-link-sub" : "toc-link";
      return `<a class="${className}" href="#${item.id}">${escapeHtml(item.title)}</a>`;
    })
    .join("");
}

function filterGuideSections(query) {
  const normalized = query.trim().toLowerCase();
  const sections = guideContent.querySelectorAll(".guide-section");
  let visibleCount = 0;

  sections.forEach((section) => {
    const match = !normalized || section.textContent.toLowerCase().includes(normalized);
    section.hidden = !match;
    if (match) visibleCount += 1;
  });

  guideContent.classList.toggle("is-filtering", Boolean(normalized));
  const emptyState = guideContent.querySelector(".guide-empty");
  if (emptyState) emptyState.remove();
  if (normalized && visibleCount === 0) {
    guideContent.insertAdjacentHTML(
      "afterbegin",
      '<div class="guide-empty">没有匹配的章节，换一个关键词试试。</div>'
    );
  }
}

async function loadGuide() {
  try {
    const response = await fetch("success-mode-guide.zh-CN.md");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const markdown = await response.text();
    const rendered = renderMarkdown(markdown);
    guideContent.innerHTML = rendered.html;
    renderGuideToc(rendered.toc);
  } catch (error) {
    guideContent.innerHTML = `
      <div class="guide-empty">
        无法读取 Markdown 文档。通过 GitHub Pages 或本地 HTTP 服务打开时会正常加载；
        如果直接双击 index.html，浏览器可能会阻止本地 fetch。
      </div>
    `;
    guideToc.innerHTML = "";
  }
}

segments.forEach((button) => {
  button.addEventListener("click", () => {
    segments.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    renderScript(button.dataset.script);
  });
});

checklistList.addEventListener("change", updateProgress);
resetChecks.addEventListener("click", () => {
  checklistList.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });
  clearSavedChecklist();
  updateProgress();
});
termSearch.addEventListener("input", (event) => renderTerms(event.target.value));
guideSearch.addEventListener("input", (event) => filterGuideSections(event.target.value));

renderScript("fighters");
renderChecklist();
renderTerms();
renderMistakes();
updateProgress();
loadGuide();
