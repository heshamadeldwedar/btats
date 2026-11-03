const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const view = $('#view');

/* ---------- Potato with glasses ---------- */
function potato(cls = 'potato', blink = true) {
  return `<svg class="${cls}" viewBox="0 0 240 270" role="img" aria-label="A potato wearing round glasses">
    <path d="M121 40 C118 26 121 16 127 8" stroke="#3E8E4E" stroke-width="5" fill="none" stroke-linecap="round"/>
    <ellipse cx="111" cy="20" rx="14" ry="7" fill="#5FB36B" transform="rotate(-25 111 20)"/>
    <ellipse cx="140" cy="16" rx="13" ry="6.5" fill="#5FB36B" transform="rotate(20 140 16)"/>
    <path d="M120 36 C180 32 214 80 212 142 C210 208 174 254 116 256 C58 258 26 214 28 150 C30 86 62 40 120 36 Z" fill="#DCA662"/>
    <path d="M190 90 C214 130 210 200 166 238 C196 200 204 140 190 90 Z" fill="#C48E4B" opacity=".55"/>
    <ellipse cx="82" cy="78" rx="26" ry="14" fill="#EDC58C" opacity=".75" transform="rotate(-30 82 78)"/>
    <ellipse cx="60" cy="200" rx="5" ry="4" fill="#B57F3D" opacity=".55"/>
    <ellipse cx="176" cy="96" rx="4" ry="3" fill="#B57F3D" opacity=".55"/>
    <ellipse cx="150" cy="226" rx="6" ry="4" fill="#B57F3D" opacity=".55"/>
    <ellipse cx="72" cy="176" rx="15" ry="8" fill="#EE8F7A" opacity=".55"/>
    <ellipse cx="168" cy="176" rx="15" ry="8" fill="#EE8F7A" opacity=".55"/>
    <g class="${blink ? 'lid' : ''}"><circle cx="90" cy="138" r="7.5" fill="#1F2328"/><circle cx="150" cy="138" r="7.5" fill="#1F2328"/>
      <circle cx="92.5" cy="135" r="2.4" fill="#fff"/><circle cx="152.5" cy="135" r="2.4" fill="#fff"/></g>
    <g stroke="#1F2328" stroke-width="6" fill="rgba(255,255,255,.28)">
      <circle cx="90" cy="138" r="26"/><circle cx="150" cy="138" r="26"/>
    </g>
    <path d="M116 134 Q120 127 124 134" stroke="#1F2328" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M64 132 L38 124 M176 132 L202 124" stroke="#1F2328" stroke-width="6" stroke-linecap="round"/>
    <path d="M104 190 Q120 204 136 190" stroke="#1F2328" stroke-width="5.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
$('.brand').insertAdjacentHTML('afterbegin', potato('mini', false));

/* ---------- progress (saved in this browser) ---------- */
const KEY = 'potatoUISchool.v2';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } };
const save = (s) => localStorage.setItem(KEY, JSON.stringify(s));
const lp = (id) => load()['l' + id] || {};
function setLP(id, patch) { const s = load(); s['l' + id] = { ...(s['l' + id] || {}), ...patch }; save(s); }
const STEPS = [['look', 'Look'], ['learn', 'Learn'], ['practice', 'Practice'], ['use', 'Use it']];
const doneCount = (id) => STEPS.filter(([k]) => lp(id)[k]).length;
const lessonDone = (id) => doneCount(id) === STEPS.length;

/* ---------- router ---------- */
let stopCurrent = () => {};
function route() {
  stopCurrent(); stopCurrent = () => {};
  const h = location.hash.slice(1) || '/';
  const m = h.match(/^\/lesson\/(\d+)(?:\/(\w+))?/);
  if (m && LESSONS.find(l => l.id === +m[1])) renderLesson(+m[1], m[2]);
  else if (h === '/audit') renderAudit();
  else renderHome();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);

/* ---------- home ---------- */
function renderHome() {
  const started = LESSONS.some(l => doneCount(l.id) > 0);
  const next = LESSONS.find(l => !lessonDone(l.id));
  const ctaHref = next ? `#/lesson/${next.id}` : '#/audit';
  const ctaText = !started ? 'Start lesson 1' : next ? `Continue: ${next.title}` : 'Do your UI audit';
  view.innerHTML = `
  <section class="hero">
    <div>
      <h1>Hi Potato.</h1>
      <p class="lead">This is your own small UI school. Eight short lessons to make your screens at Mylo cleaner, calmer and stronger.</p>
      <div class="comment">
        <div class="who" aria-hidden="true">H</div>
        <div class="bubble"><b>H, for Esraa</b><span>I made this for you. Go slowly, have fun, and show them what you can do. I’m proud of you.</span></div>
      </div>
      <a class="btn-l" href="${ctaHref}">${ctaText}</a>
    </div>
    <div class="frame-sel" aria-hidden="false">
      <span class="fname">Potato</span>${potato()}
      <i></i><i></i><i></i><i></i><span class="size">Designer, 100% cute</span>
    </div>
  </section>

  <section class="section">
    <h2>How each lesson works</h2>
    <p>Every lesson has the same 4 steps. First you look and guess. Then you learn the idea. Then you practise it. Last, you use it on real Mylo screens.</p>
    <ol class="how">
      <li><span class="n">1</span><b>Look</b><span>See two screens. Pick the one that looks better. Just trust your eyes.</span></li>
      <li><span class="n">2</span><b>Learn</b><span>Read the idea in simple words. Then watch a short animated video.</span></li>
      <li><span class="n">3</span><b>Practice</b><span>Find the mistakes on a new screen. Then answer 2 quick questions.</span></li>
      <li><span class="n">4</span><b>Use it</b><span>Try the idea on a real Mylo screen, with a small checklist.</span></li>
    </ol>
    <p class="note-line">One lesson takes about 10 minutes. One lesson a day is perfect. Your progress and notes are saved in this browser.</p>
  </section>

  <section class="section">
    <h2>The lessons</h2>
    <p>They go from small details to the whole system, so do them in order. At the end, you use everything in one UI audit.</p>
    <div class="frames">
      ${LESSONS.map(l => `
        <a class="fr" href="#/lesson/${l.id}">
          <span class="fl">Lesson ${l.id}, ${l.minutes} min</span>
          <h3>${l.title}</h3>
          <p>${l.sub}</p>
          <div class="pips" aria-label="${doneCount(l.id)} of 4 steps done">${STEPS.map(([k]) => `<i class="${lp(l.id)[k] ? 'on' : ''}"></i>`).join('')}</div>
        </a>`).join('')}
      <a class="fr final" href="#/audit">
        <span class="fl">Final</span>
        <h3>Your UI audit</h3>
        <p>Check a real Mylo screen with everything you learned, and show your manager the before and after.</p>
      </a>
    </div>
  </section>`;
}

/* ---------- lesson ---------- */
function renderLesson(id, stepKey) {
  const L = LESSONS.find(l => l.id === id);
  const idx = Math.max(0, STEPS.findIndex(([k]) => k === stepKey));
  const [key] = STEPS[idx];
  view.innerHTML = `
  <div class="crumbs"><a href="#/">← All lessons</a><span>Lesson ${id} of ${LESSONS.length}</span></div>
  <div class="lhead"><h1>${L.title}</h1><p>${L.sub}</p></div>
  <div class="stepper" role="tablist">${STEPS.map(([k, label], i) => `
    <button role="tab" class="${i === idx ? 'on' : ''} ${lp(id)[k] ? 'done' : ''}" data-k="${k}" aria-selected="${i === idx}">
      <span class="n">${lp(id)[k] ? '✓' : i + 1}</span>${label}</button>`).join('')}</div>
  <div class="stage-panel" id="panel"></div>`;
  $$('.stepper button').forEach(b => b.onclick = () => { location.hash = `#/lesson/${id}/${b.dataset.k}`; });
  const panel = $('#panel');
  const nextBtn = (label, href) => `<div class="next-row"><a class="btn-l" href="${href}">${label}</a></div>`;
  const mark = (k) => { setLP(id, { [k]: true }); const b = $(`.stepper [data-k="${k}"]`); if (b) { b.classList.add('done'); $('.n', b).textContent = '✓'; } };

  if (key === 'look') {
    const goodFirst = L.look.goodIs === 'A';
    const sides = goodFirst ? [['A', L.video.after, true], ['B', L.video.before, false]] : [['A', L.video.before, false], ['B', L.video.after, true]];
    panel.innerHTML = `
      <h2>Step 1: Look</h2>
      <p class="intro">Look at these two screens. Which one looks better to you? Don’t think too much. Trust your eyes.</p>
      <div class="ab">${sides.map(([letter, html, good]) => `
        <div class="opt" data-good="${good}">
          <span class="letter">${letter}</span>
          <div class="mini"><div class="phone"><div class="screen">${html}</div></div></div>
          <button class="btn-l ghost pick">${letter} looks better</button>
        </div>`).join('')}</div>
      <div id="verdict"></div>`;
    const goodLetter = goodFirst ? 'A' : 'B';
    $$('.opt', panel).forEach(opt => $('.pick', opt).onclick = () => {
      const right = opt.dataset.good === 'true';
      $$('.opt', panel).forEach(o => { o.classList.add(o.dataset.good === 'true' ? 'good' : 'bad'); $('.pick', o).disabled = true; });
      $('#verdict').innerHTML = `
        <div class="verdict ${right ? '' : 'miss'}">
          <h3>${right ? `Yes! ${goodLetter} is better.` : `Good try. ${goodLetter} is better.`}</h3>
          <p style="margin:0">What changed:</p>
          <ul>${L.look.changes.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>${nextBtn('Next: learn why', `#/lesson/${id}/learn`)}`;
      mark('look');
    });
  }

  if (key === 'learn') {
    panel.innerHTML = `
      <h2>Step 2: Learn</h2>
      <p class="intro">Read the idea, then press play on the video. You can pause it and move back at any time.</p>
      <div class="learn">
        <div class="player" id="player"></div>
        <div>
          <h3>The idea</h3>
          <ul class="idea">${L.idea.map(t => `<li>${t}</li>`).join('')}</ul>
          <div class="rule">${potato('', false)}<div><b>Potato rule</b>${L.rule}</div></div>
          <div class="words"><h4>Words to know</h4><dl>${L.words.map(([w, d]) => `<dt>${w}</dt><dd>${d}</dd>`).join('')}</dl></div>
        </div>
      </div>${nextBtn('Next: practice', `#/lesson/${id}/practice`)}`;
    const player = Player($('#player'), L.video, () => mark('learn'));
    stopCurrent = player.stop;
  }

  if (key === 'practice') {
    panel.innerHTML = `
      <h2>Step 3: Practice</h2>
      <div id="hs"></div>
      <div class="subhead"><h3>Two quick questions</h3><div id="quiz"></div></div>
      ${nextBtn('Next: use it at Mylo', `#/lesson/${id}/use`)}`;
    const state = { hs: false, quiz: false };
    const check = () => { if (state.hs && state.quiz) mark('practice'); };
    Hotspot($('#hs'), L.practice, () => { state.hs = true; check(); });
    Quiz($('#quiz'), L.quiz, () => { state.quiz = true; check(); });
  }

  if (key === 'use') {
    const nextL = LESSONS.find(l => l.id === id + 1);
    panel.innerHTML = `
      <h2>Step 4: Use it at Mylo</h2>
      <p class="intro">Now try it on real screens. Tick each step when you finish it.</p>
      <div id="task"></div>
      <div class="subhead"><h3>Want to learn more?</h3><p style="color:var(--mute)">These are trusted sources, picked for this lesson. Start with the first one.</p>
        <div class="res">${L.resources.map(r => `<a href="${r.u}" target="_blank" rel="noopener"><em>${r.k}</em><b>${r.t} ↗</b><span>${r.why}</span></a>`).join('')}</div></div>
      <div id="done"></div>
      ${nextBtn(nextL ? `Next lesson: ${nextL.title}` : 'Go to your UI audit', nextL ? `#/lesson/${nextL.id}` : '#/audit')}`;
    const showDone = () => {
      $('#done').innerHTML = lessonDone(id) ? `<div class="done-box">${potato('', false)}<p><b>Lesson ${id} done!</b> Potato is proud of you.</p></div>` : '';
    };
    Task($('#task'), L, (all) => { if (all) mark('use'); else { setLP(id, { use: false }); const b = $('.stepper [data-k="use"]'); b.classList.remove('done'); $('.n', b).textContent = '4'; } showDone(); });
    showDone();
  }
}

/* ---------- animated lesson video ---------- */
function Player(root, video, onEnd) {
  let layer = 'before';
  const steps = video.steps.map(s => { layer = s.show || layer; return { ...s, show: layer }; });
  const starts = []; let acc = 0; steps.forEach(s => { starts.push(acc); acc += s.d; });
  const total = acc;
  root.innerHTML = `
    <div class="stage"><div class="phone">
      <div class="screen">
        <div class="layer" data-l="before">${video.before}</div>
        <div class="layer off" data-l="after">${video.after}</div>
      </div>
      <span class="tag before">Before</span>
      <div class="ov"><div class="hl"></div><div class="note"></div></div>
      <div class="card-title"><div><h4></h4><p></p></div></div>
    </div></div>
    <div class="caption" aria-live="polite"></div>
    <div class="controls">
      <button class="pp" aria-label="Play">▶</button>
      <button class="prev" aria-label="Previous step">⏮</button>
      <div class="track" role="slider" aria-label="Video position">${starts.slice(1).map(s => `<i class="mk" style="left:${s / total * 100}%"></i>`).join('')}<div class="fill"></div></div>
      <button class="nxt" aria-label="Next step">⏭</button>
      <button class="spd" aria-label="Speed">1×</button>
      <span class="time"></span>
    </div>`;
  const ov = $('.ov', root), hl = $('.hl', root), note = $('.note', root), cap = $('.caption', root);
  const ct = $('.card-title', root), tag = $('.tag', root), fill = $('.fill', root), time = $('.time', root), pp = $('.pp', root);
  let t = 0, playing = false, last = 0, raf = 0, speed = 1, cur = -1, ended = false;
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  const idxAt = (tt) => { let i = 0; while (i < starts.length - 1 && tt >= starts[i + 1]) i++; return i; };

  function apply(i) {
    const s = steps[i]; cur = i;
    $$('.layer', root).forEach(l => l.classList.toggle('off', l.dataset.l !== s.show));
    tag.className = 'tag ' + s.show; tag.textContent = s.show === 'before' ? 'Before' : 'After';
    ct.classList.toggle('on', !!s.card);
    if (s.card) { $('h4', ct).textContent = s.card.h; $('p', ct).textContent = s.card.p; }
    const txt = s.cap || (s.card ? s.card.p : '');
    cap.classList.add('fade'); setTimeout(() => { cap.textContent = txt; cap.classList.remove('fade'); }, 160);
    const target = s.hl && $(`.layer[data-l="${s.show}"] [data-k="${s.hl}"]`, root);
    const good = s.tone === 'good';
    hl.classList.toggle('good', good); note.classList.toggle('good', good);
    if (target) {
      requestAnimationFrame(() => {
        const r = target.getBoundingClientRect(), p = ov.getBoundingClientRect();
        const x = r.left - p.left - 5, y = r.top - p.top - 5, w = r.width + 10, h = r.height + 10;
        Object.assign(hl.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' });
        hl.classList.add('on');
        note.textContent = s.note || '';
        note.classList.toggle('on', !!s.note);
        const below = y + h + 70 < p.height;
        note.style.top = below ? (y + h + 8) + 'px' : 'auto';
        note.style.bottom = below ? 'auto' : (p.height - y + 8) + 'px';
      });
    } else { hl.classList.remove('on'); note.classList.remove('on'); }
  }
  function render() {
    fill.style.width = (t / total * 100) + '%';
    time.textContent = `${fmt(t)} / ${fmt(total)}`;
    const i = idxAt(t); if (i !== cur) apply(i);
  }
  function tick(now) {
    if (!playing) return;
    t += (now - last) / 1000 * speed; last = now;
    if (t >= total) { t = total; pause(); pp.textContent = '↻'; pp.setAttribute('aria-label', 'Replay'); if (!ended) { ended = true; onEnd && onEnd(); } }
    render();
    if (playing) raf = requestAnimationFrame(tick);
  }
  function play() { if (t >= total) { t = 0; cur = -1; } playing = true; last = performance.now(); pp.textContent = '❚❚'; pp.setAttribute('aria-label', 'Pause'); raf = requestAnimationFrame(tick); }
  function pause() { playing = false; cancelAnimationFrame(raf); pp.textContent = '▶'; pp.setAttribute('aria-label', 'Play'); }
  function seek(tt) { t = Math.max(0, Math.min(total - 0.01, tt)); cur = -1; render(); }
  pp.onclick = () => playing ? pause() : play();
  $('.prev', root).onclick = () => { const i = idxAt(t); seek(starts[t - starts[i] < 1 ? Math.max(0, i - 1) : i]); };
  $('.nxt', root).onclick = () => { const i = idxAt(t); if (i < steps.length - 1) seek(starts[i + 1]); };
  $('.spd', root).onclick = (e) => { speed = speed === 1 ? 0.75 : speed === 0.75 ? 1.5 : 1; e.target.textContent = speed + '×'; };
  $('.track', root).onclick = (e) => { const r = e.currentTarget.getBoundingClientRect(); seek((e.clientX - r.left) / r.width * total); };
  const onKey = (e) => { if (e.code === 'Space' && !/INPUT|TEXTAREA|BUTTON|A/.test(document.activeElement.tagName)) { e.preventDefault(); pp.click(); } };
  document.addEventListener('keydown', onKey);
  render();
  return { stop() { pause(); document.removeEventListener('keydown', onKey); } };
}

/* ---------- find the mistakes ---------- */
function Hotspot(root, pr, onDone) {
  root.innerHTML = `
    <div class="hs-wrap">
      <div class="phone hs"><div class="screen">${pr.screen}</div></div>
      <div>
        <p style="font-size:19px">${pr.intro}</p>
        <div class="score"><span class="c">0</span> of ${pr.issues.length} <small>found</small></div>
        <ul class="found"></ul>
        <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn-l ghost reveal">Show me the rest</button><button class="btn-l ghost reset">Try again</button></div>
      </div>
    </div>`;
  const phone = $('.phone', root), list = $('.found', root);
  const found = [], revealed = new Set();
  let finished = false;
  const draw = () => {
    $('.c', root).textContent = found.length;
    list.innerHTML = pr.issues.map(is => {
      const n = found.indexOf(is.id);
      if (n > -1 || revealed.has(is.id)) return `<li class="${n > -1 ? '' : 'revealed'}"><b><span class="n">${n > -1 ? n + 1 : '?'}</span>${is.title}</b>${is.why}</li>`;
      return `<li class="locked">A hidden mistake</li>`;
    }).join('');
  };
  const pin = (el, label) => {
    const r = el.getBoundingClientRect(), p = phone.getBoundingClientRect();
    const d = document.createElement('div'); d.className = 'pin'; d.textContent = label;
    d.style.left = Math.min(r.right - p.left, p.width - 16) + 'px'; d.style.top = Math.max(r.top - p.top, 16) + 'px';
    phone.appendChild(d);
  };
  const maybeDone = () => { if (!finished && found.length + revealed.size === pr.issues.length) { finished = true; onDone(); } };
  phone.addEventListener('click', e => {
    const el = e.target.closest('[data-issue]');
    const p = phone.getBoundingClientRect();
    if (!el) { const m = document.createElement('div'); m.className = 'miss'; m.style.left = (e.clientX - p.left) + 'px'; m.style.top = (e.clientY - p.top) + 'px'; phone.appendChild(m); setTimeout(() => m.remove(), 650); return; }
    const id = el.dataset.issue;
    if (found.includes(id) || revealed.has(id)) return;
    found.push(id); el.classList.add('hit'); pin(el, found.length); draw(); maybeDone();
  });
  $('.reveal', root).onclick = () => {
    pr.issues.forEach(is => { if (!found.includes(is.id) && !revealed.has(is.id)) { revealed.add(is.id); const el = $(`[data-issue="${is.id}"]`, phone); if (el) { el.classList.add('hit'); pin(el, '?'); } } });
    draw(); maybeDone();
  };
  $('.reset', root).onclick = () => Hotspot(root, pr, onDone);
  draw();
}

/* ---------- quick questions ---------- */
function Quiz(root, qs, onDone) {
  root.innerHTML = qs.map((q, i) => `
    <div class="q" data-i="${i}"><h4>${i + 1}. ${q.q}</h4>
      <div class="opts">${q.options.map((o, j) => `<button data-j="${j}">${o}</button>`).join('')}</div>
      <div class="why"></div></div>`).join('');
  let answered = 0;
  $$('.q', root).forEach(box => box.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b || b.disabled) return;
    const q = qs[+box.dataset.i], j = +b.dataset.j;
    $$('button', box).forEach((x, k) => { x.disabled = true; if (k === q.answer) x.classList.add('right'); });
    if (j !== q.answer) b.classList.add('wrong');
    const w = $('.why', box); w.innerHTML = `<b>${j === q.answer ? 'Correct!' : 'Not quite.'}</b> ${q.why}`; w.classList.add('on');
    if (++answered === qs.length) onDone();
  }));
}

/* ---------- use it at Mylo ---------- */
function Task(root, L, onChange) {
  const st = lp(L.id);
  const checks = st.taskSteps || [];
  root.innerHTML = `
    <h3>${L.task.title}</h3>
    <ul class="steps">${L.task.steps.map((s, i) => `<li><label><input type="checkbox" data-i="${i}" ${checks[i] ? 'checked' : ''}><span>${s}</span></label></li>`).join('')}</ul>
    <h3 style="margin-top:28px">My notes</h3>
    <textarea aria-label="My notes" placeholder="Write what you found. For example: Home screen, 5 different gaps (6, 9, 13, 18, 22). Fix: use 8 and 16.">${(st.notes || '').replace(/</g, '&lt;')}</textarea>
    <div class="saved"></div>`;
  root.addEventListener('change', e => {
    if (!e.target.matches('input[type=checkbox]')) return;
    const arr = $$('input[type=checkbox]', root).map(c => c.checked);
    setLP(L.id, { taskSteps: arr }); onChange(arr.every(Boolean));
  });
  let to; const ta = $('textarea', root);
  ta.addEventListener('input', () => { clearTimeout(to); to = setTimeout(() => { setLP(L.id, { notes: ta.value }); $('.saved', root).textContent = 'Saved'; }, 400); });
}

/* ---------- final: UI audit ---------- */
function renderAudit() {
  const notes = LESSONS.map(l => ({ l, n: lp(l.id).notes })).filter(x => x.n && x.n.trim());
  view.innerHTML = `
  <div class="no-print">
  <div class="crumbs"><a href="#/">← All lessons</a><span>Final</span></div>
  <div class="lhead"><h1>Your UI audit</h1><p>Now you use all 8 lessons together, on one real Mylo screen. Follow these steps.</p></div>
  <ol class="audit-steps" style="margin-top:28px">
    <li><b>Pick 3 to 5 important screens</b>For example: home, plan details, checkout, payment, profile. Ask your manager which ones matter most.</li>
    <li><b>Take clean screenshots</b>Put them in a new Figma page called “UI audit”.</li>
    <li><b>Check one lesson at a time</b>Use the checklist below. First spacing on all screens, then typography, then colour… One topic at a time is faster and you miss less.</li>
    <li><b>Mark each problem in red</b>Like in the videos: a red box and a short note. For example: “Gap 13px, not on the scale”.</li>
    <li><b>Give each problem a level</b><span class="lvl h">High</span> people notice it or it breaks trust. <span class="lvl m">Medium</span> it looks messy. <span class="lvl l">Low</span> small polish.</li>
    <li><b>Make the fixed version</b>Design the “after” next to the “before”. Fix the system (tokens, components) when you can, not only the screen.</li>
    <li><b>Show your manager</b>Lead with 2 or 3 strong before and after pairs, then the full list. Keep it about the screens, never about people.</li>
  </ol>

  <h2 class="section" style="margin-top:64px">How to write each problem</h2>
  <p style="color:var(--mute)">Keep it short: what you see, why it matters, how to fix it.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Screen</th><th>Topic</th><th>What I see</th><th>Why it matters</th><th>Level</th><th>Fix</th></tr></thead>
    <tbody>
      <tr><td>Plan details</td><td>Spacing</td><td>Gaps between cards are 6, 9 and 14px</td><td>The screen looks messy and groups are unclear</td><td><span class="lvl m">Medium</span></td><td>Use 16px gaps (space-16)</td></tr>
      <tr><td>Home</td><td>Hierarchy</td><td>The limit is 16px. The banner is 22px and bold.</td><td>Users can’t find their money first</td><td><span class="lvl h">High</span></td><td>Make the limit 32px bold, and make the banner a quiet card</td></tr>
      <tr><td>Checkout</td><td>Consistency</td><td>3 different primary button styles</td><td>The app feels less trusted</td><td><span class="lvl h">High</span></td><td>One primary button component with tokens</td></tr>
    </tbody></table></div>
  <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
    <button class="btn-l" id="csv">Download the problem list (CSV)</button>
    <button class="btn-l ghost" id="print">Print the checklist</button>
  </div>

  ${notes.length ? `<h2 style="margin-top:64px">Your notes from the lessons</h2>${notes.map(x => `<h3 style="margin-top:18px">${x.l.title}</h3><p style="white-space:pre-wrap;background:var(--paper);padding:14px 18px;border-radius:10px;max-width:760px">${x.n.replace(/</g, '&lt;')}</p>`).join('')}` : ''}
  <h2 style="margin-top:64px">UI audit checklist</h2>
  <p style="color:var(--mute)">Use one copy for each screen. Tick what is good. Mark what is not good in red.</p>
  </div>
  <div class="checklist">
    ${LESSONS.map(l => `<section><h3>${l.id}. ${l.title}</h3>${l.checks.map(c => `<label><input type="checkbox"> ${c}</label>`).join('')}</section>`).join('')}
  </div>`;

  $('#print').onclick = () => window.print();
  $('#csv').onclick = () => {
    const rows = [
      ['Screen', 'Topic', 'What I see', 'Why it matters', 'Level (High/Medium/Low)', 'Fix', 'Status'],
      ['Plan details', 'Spacing', 'Gaps between cards are 6, 9 and 14px', 'Looks messy, groups unclear', 'Medium', 'Use 16px gaps (space-16)', 'Open']
    ];
    const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv' }));
    a.download = 'mylo-ui-audit.csv'; a.click();
  };
}

route();
