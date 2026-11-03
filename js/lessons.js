/* UI School for Potato. Course content.
   Each lesson has 4 steps:
   1. look     – compare two screens (video.before = weak, video.after = strong). look.goodIs says if the strong one is shown as 'A' or 'B'.
   2. learn    – the idea in simple words + words to know + animated video
   3. practice – find the mistakes on a new screen + 2 quick questions
   4. use      – try it on a real Mylo screen + further reading
   video.steps: { d: seconds, cap, show: 'before'|'after' (carries forward), hl: data-k, note, tone: 'bad'|'good', card: {h,p} }
*/
const SB = '<div class="sb"><span>9:41</span><span>▂▄▆ ◔ ▮</span></div>';
const TAB = (on) => `<div class="tabbar">${[['⌂','Home'],['⇄','Pay'],['▤','Plans'],['◎','Profile']].map(([i,l])=>`<div class="${l===on?'on':''}"><b>${i}</b>${l}</div>`).join('')}</div>`;
const scr = (html) => `<div class="app">${SB}${html}</div>`;

const LESSONS = [
/* ───────────────────────── 1. Spacing ───────────────────────── */
{
  id: 1, minutes: 10,
  title: "Spacing",
  sub: "Use a spacing scale and let space show what belongs together.",
  look: { goodIs: 'B', changes: ["All spaces come from one scale (4, 8, 16, 24).", "Things that belong together sit close.", "The button has space from the screen edge."] },
  idea: [
    "Use a <b>spacing scale</b>: 4, 8, 12, 16, 24, 32, 48. Don’t use random numbers like 5, 13 or 19.",
    "<b>Small space</b> means “these belong together”. <b>Big space</b> means “this is a new group”.",
    "Keep the <b>side margins</b> the same on every screen (for example 16 or 20).",
    "The space inside a box (padding) should be the same or smaller than the space outside it."
  ],
  rule: "Choose every space from the scale. Never “a little bit more”.",
  words: [["Padding", "space inside a box"], ["Margin", "space outside a box"], ["Spacing scale", "a short list of allowed space sizes"]],
  video: {
    before: scr(`<div class="top" style="padding-bottom:4px"><span class="back">‹</span>My plan</div>
      <div class="body" style="gap:3px;padding:0 9px">
        <div class="card" style="padding:4px 14px" data-k="pad"><div class="lbl">Samsung TV 55"</div><div class="big">EGP 1,250.50</div><div class="s">per month</div></div>
        <div class="card" style="margin-top:19px" data-k="group"><div class="lbl">Next payment</div><div style="height:14px"></div><div class="t">1 Mar 2026</div><div class="lbl" style="margin-top:3px">Paid so far</div><div style="height:14px"></div><div class="t">2 of 6</div></div>
        <div class="card" style="margin-top:7px" data-k="gaps"><div class="t">Pay early and save</div><div class="s">No extra fees</div></div>
      </div>
      <div class="foot" style="padding:6px 4px 22px" data-k="edge"><div class="btn">Pay now</div></div>`),
    after: scr(`<div class="top"><span class="back">‹</span>My plan</div>
      <div class="body" style="gap:16px">
        <div class="card" style="padding:16px" data-k="pad"><div class="lbl">Samsung TV 55"</div><div class="big" style="margin-top:4px">EGP 1,250.50</div><div class="s">per month</div></div>
        <div class="card" style="padding:16px;display:grid;gap:16px" data-k="group"><div><div class="lbl">Next payment</div><div class="t" style="margin-top:4px">1 Mar 2026</div></div><div><div class="lbl">Paid so far</div><div class="t" style="margin-top:4px">2 of 6</div></div></div>
        <div class="card" style="padding:16px" data-k="gaps"><div class="t">Pay early and save</div><div class="s" style="margin-top:4px">No extra fees</div></div>
      </div>
      <div class="foot" style="padding:16px 16px 24px" data-k="edge"><div class="btn">Pay now</div></div>`),
    steps: [
      { d: 5, show: 'before', card: { h: "Spacing", p: "Space is not empty. It tells the eye what belongs together." } },
      { d: 7, hl: 'pad', note: "Padding: 4px top, 14px sides. Not the same.", cap: "Look at the space inside this card. The top is very small and the sides are big. The text looks squeezed." },
      { d: 8, hl: 'group', note: "Label → value: 14px. Value → next label: 3px.", cap: "“Paid so far” is closer to “1 Mar 2026” than to its own value. So the eye reads them as one group. That is wrong." },
      { d: 7, hl: 'gaps', note: "Gaps between cards: 3, 19, 7. No system.", cap: "Every gap is different. Random numbers make a screen feel messy, even if people can’t say why." },
      { d: 6, hl: 'edge', note: "Button is 4px from the screen edge", cap: "The button almost touches the edge of the phone. It looks broken and is easy to miss-tap." },
      { d: 5, show: 'after', card: { h: "Fixed with a scale", p: "Only 4, 16 and 24 are used." } },
      { d: 7, hl: 'pad', tone: 'good', note: "Padding 16 on all sides", cap: "Now the padding is 16 on all sides. The card feels calm." },
      { d: 8, hl: 'group', tone: 'good', note: "4px inside a pair, 16px between pairs", cap: "Each label is 4px from its value, and the pairs are 16px apart. Now you can see the two groups at once." },
      { d: 6, hl: 'edge', tone: 'good', note: "16px side margin, the same as the cards", cap: "The button uses the same 16px margin as the cards. Everything lines up." }
    ]
  },
  practice: {
    intro: "This profile screen has <b>5 spacing mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top">Profile</div>
      <div class="body" style="gap:12px">
        <div class="card" style="display:flex;gap:12px;align-items:center;padding:3px 14px" data-issue="pad"><div class="av">EA</div><div><div class="t">Esraa Ahmed</div><div class="s">esraa@mail.com</div></div></div>
        <div class="grp" style="margin-top:2px" data-issue="header">Account</div>
        <div class="card" style="padding:0 14px"><div class="row" style="padding:14px 0">Personal details</div><div class="row" style="padding:5px 0" data-issue="rows">Bank cards</div><div class="row" style="padding:14px 0">Limits</div></div>
        <div class="card" style="padding:0 14px;margin-top:-6px" data-issue="gap"><div class="row" style="padding:14px 0">Help centre</div></div>
      </div>
      <div class="foot" style="padding:8px 2px 22px"><div class="btn sec" data-issue="edge">Log out</div></div>`),
    issues: [
      { id: 'pad', title: "Uneven padding", why: "The top and bottom padding is 3px but the sides are 14px. Use 16 on all sides." },
      { id: 'header', title: "Section title in the wrong group", why: "“Account” is closer to the card above it than to its own list. It should be close to the list it names." },
      { id: 'rows', title: "Rows of different heights", why: "One row is much shorter than the others. Rows in the same list should all be the same height." },
      { id: 'gap', title: "Cards almost touching", why: "This card is only 6px from the card above. The gap between cards should match the other gaps (12 or 16)." },
      { id: 'edge', title: "Button touches the screen edge", why: "The button is only 2px from the side. Use the same side margin as everything else (16)." }
    ]
  },
  quiz: [
    { q: "Which list is a good spacing scale?", options: ["6, 9, 14, 20", "4, 8, 16, 24, 32", "10, 15, 25, 35", "5, 11, 13, 19"], answer: 1, why: "Numbers that grow in steps of 4 or 8 are easy to remember and work well on all screen sizes." },
    { q: "A label is 16px from its value but only 4px from the next item. What happens?", options: ["Nothing, it looks fine", "The label looks like it belongs to the next item", "The text gets bigger", "The screen scrolls"], answer: 1, why: "People group things that are close together. Put a label close to the thing it describes." }
  ],
  task: {
    title: "Measure spaces on Mylo",
    steps: [
      "Open 3 Mylo screens in Figma.",
      "Hold Alt (Option on Mac) and hover to see the spaces. Write down every number you find.",
      "Circle the numbers that are not on the scale (4, 8, 12, 16, 24, 32).",
      "Check that labels are close to their values and far from other groups.",
      "Fix one screen and put the before and after side by side."
    ]
  },
  checks: ["All spaces come from the scale", "Same side margins everywhere", "Padding is even inside boxes", "Close = same group, far = new group"],
  resources: [
    { t: "The 8-Point Grid", u: "https://spec.fm/specifics/8-pt-grid", k: "Article", why: "A clear explanation of the 8pt system, with examples." },
    { t: "Gestalt principle: Proximity", u: "https://www.nngroup.com/articles/gestalt-proximity/", k: "NN/g", why: "Why things that are close look like a group." },
    { t: "Material 3: Spacing", u: "https://m3.material.io/foundations/layout/understanding-layout/spacing", k: "Google", why: "How Google sets spacing in Android apps." },
    { t: "Refactoring UI", u: "https://www.refactoringui.com/", k: "Book", why: "The best practical book on UI details. Read the chapter on layout and spacing." }
  ]
},
/* ───────────────────────── 2. Typography ───────────────────────── */
{
  id: 2, minutes: 10,
  title: "Typography",
  sub: "Use a small type scale, clear weights and good line height.",
  look: { goodIs: 'A', changes: ["Only 4 text styles instead of 8.", "The amount is clearly the biggest thing.", "Money numbers line up in a straight column."] },
  idea: [
    "Use a <b>type scale</b>: a few sizes only. For a phone, 4 to 6 sizes is enough (for example 12, 14, 16, 20, 24, 32).",
    "Make differences <b>clear</b>. 15px next to 16px looks like a mistake, not a choice.",
    "Use <b>weight</b> (regular, semibold, bold) and <b>colour</b> (dark, grey) for differences, not only size.",
    "Body text needs a <b>line height</b> of about 1.4–1.5. Big titles can be tighter.",
    "For money, use <b>tabular numbers</b>. Every digit has the same width, so columns line up."
  ],
  rule: "If two text styles look almost the same, make them the same, or make them very different.",
  words: [["Type scale", "a fixed list of text sizes"], ["Weight", "how thick the letters are"], ["Line height", "the space between lines of text"], ["Tabular numbers", "digits that all have the same width"]],
  video: {
    before: scr(`<div class="top"><span class="back">‹</span><span style="font-size:15px;font-weight:700">Payment details</span></div>
      <div class="body" style="gap:10px">
        <div class="card" data-k="title"><div style="font-size:15px;font-weight:700">B.Store</div><div style="font-size:16px;font-weight:700">EGP 1,250.50</div><div style="font-size:13px;font-weight:700;color:#5f6672">INSTALLMENT 2 OF 6</div></div>
        <div class="card" data-k="para"><div style="font-size:11px;line-height:1.05;text-align:center">This payment is part of your 6 month plan for a Samsung TV. You can pay early at any time with no extra fees. Late payments may add a fee.</div></div>
        <div class="card" data-k="nums" style="font-size:14px">
          <div class="split"><span>Item</span><span style="font-variant-numeric:proportional-nums;font-weight:400">7,000.00</span></div>
          <div class="split"><span style="font-weight:600">Fee</span><span style="font-variant-numeric:proportional-nums;font-size:15px">111.10</span></div>
          <div class="split"><span>Total</span><span style="font-variant-numeric:proportional-nums;font-weight:800;font-size:13px">7,111.10</span></div>
        </div>
      </div>`),
    after: scr(`<div class="top"><span class="back">‹</span>Payment details</div>
      <div class="body" style="gap:12px">
        <div class="card" data-k="title"><div class="lbl">B.Store, installment 2 of 6</div><div style="font-size:28px;font-weight:700;letter-spacing:-.4px;font-variant-numeric:tabular-nums">EGP 1,250.50</div></div>
        <div class="card" data-k="para"><div style="font-size:14px;line-height:1.5">This payment is part of your 6 month plan for a Samsung TV. You can pay early at any time with no extra fees.</div><div class="s" style="margin-top:8px;line-height:1.5">Late payments may add a fee.</div></div>
        <div class="card" data-k="nums" style="font-size:14px">
          <div class="split"><span class="lbl">Item</span><span class="num" style="font-weight:500">7,000.00</span></div>
          <div class="split"><span class="lbl">Fee</span><span class="num" style="font-weight:500">111.10</span></div>
          <div class="sep"></div>
          <div class="split"><span class="t">Total</span><span class="num">7,111.10</span></div>
        </div>
      </div>`),
    steps: [
      { d: 5, show: 'before', card: { h: "Typography", p: "Text is most of your UI. Small changes make a big difference." } },
      { d: 8, hl: 'title', note: "15px, 16px and 13px, all bold, and the label in capitals", cap: "Three text styles, all bold, and almost the same size. Nothing is clearly the most important. The eye doesn’t know where to start." },
      { d: 8, hl: 'para', note: "11px, centred, line height 1.05", cap: "This paragraph is tiny, centred and tight. Long centred text is hard to read, because every line starts at a different place." },
      { d: 8, hl: 'nums', note: "Proportional digits and 3 sizes: the numbers don’t line up", cap: "These numbers have different sizes and weights, and the digits have different widths. You can’t compare them quickly." },
      { d: 5, show: 'after', card: { h: "Fixed with a type scale", p: "4 styles: caption, body, label, title." } },
      { d: 8, hl: 'title', tone: 'good', note: "Grey label 12 + big number 28 bold", cap: "Now there is one clear hero: the amount. The label is small and grey. It supports the number and doesn’t fight with it." },
      { d: 7, hl: 'para', tone: 'good', note: "14px body, left aligned, line height 1.5", cap: "The body text is left aligned, with comfortable line height. The less important sentence is grey and separate." },
      { d: 7, hl: 'nums', tone: 'good', note: "Tabular numbers, right aligned, one size", cap: "With tabular numbers, the digits line up in a straight column. The total uses weight to stand out, not a different size." }
    ]
  },
  practice: {
    intro: "This offer screen has <b>5 typography mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top"><span class="back">‹</span>Offer</div>
      <div class="body" style="gap:10px">
        <div class="card"><div style="font-size:14px;font-weight:600" data-issue="order">0% interest</div><div style="font-size:19px;font-weight:600">On all phones this month</div></div>
        <div class="card" data-issue="caps"><div style="font-size:12px;font-weight:700;letter-spacing:.04em">BUY ANY PHONE ABOVE EGP 8,000 AND SPLIT IT INTO 12 MONTHS WITH NO INTEREST AND NO ADMIN FEES.</div></div>
        <div class="card" data-issue="lh"><div style="font-size:13px;line-height:1">Offer valid until 31 March. Only for customers with an active limit. Some stores may not take part.</div></div>
        <div class="card" style="font-size:14px" data-issue="digits"><div class="split"><span>Monthly</span><span style="font-variant-numeric:proportional-nums">EGP 711.11</span></div><div class="split"><span>Total</span><span style="font-variant-numeric:proportional-nums">EGP 8,533.32</span></div></div>
        <div class="s" style="font-size:9px" data-issue="tiny">Terms apply</div>
      </div>
      <div class="foot"><div class="btn">See phones</div></div>`),
    issues: [
      { id: 'order', title: "The title is smaller than the subtitle", why: "“0% interest” is the main message, but it is 14px and the line under it is 19px. Make the main message the biggest." },
      { id: 'caps', title: "A long sentence in capitals", why: "Capital letters are harder to read in long text, especially for people reading in a second language. Use sentence case." },
      { id: 'lh', title: "Line height is too tight", why: "Line height 1.0 makes the lines touch. Use about 1.4–1.5 for body text." },
      { id: 'digits', title: "Numbers don’t line up", why: "These are proportional digits. Use tabular numbers so the money values line up." },
      { id: 'tiny', title: "Text is too small", why: "9px is too small to read on a phone. 12px is the smallest size to use, for captions only." }
    ]
  },
  quiz: [
    { q: "How many text sizes should one phone screen usually use?", options: ["1", "3 to 5", "8 to 10", "As many as needed"], answer: 1, why: "A few clear sizes make a clear order. Too many sizes look messy." },
    { q: "What line height is good for body text?", options: ["1.0", "1.4 to 1.5", "2.5", "It doesn’t matter"], answer: 1, why: "About 1.4–1.5 is comfortable for reading. Big titles can use less (1.1–1.25)." }
  ],
  task: {
    title: "Count text styles on Mylo",
    steps: [
      "Pick one busy Mylo screen.",
      "List every text style on it: size, weight and colour (for example 14, semibold, grey).",
      "Find styles that are almost the same (15 and 16, or semibold and bold). Mark them.",
      "Check that all money in lists uses tabular numbers.",
      "Suggest a scale of 5 or 6 styles that covers the whole screen."
    ]
  },
  checks: ["Text uses only the type scale", "Clear difference between styles", "Body line height about 1.4–1.5", "Tabular numbers for money", "No long text in capitals"],
  resources: [
    { t: "Practical Typography", u: "https://practicaltypography.com/", k: "Free book", why: "Short, clear rules about type from Matthew Butterick." },
    { t: "Tabular and proportional numbers", u: "https://practicaltypography.com/alternate-figures.html", k: "Article", why: "When to use each kind of number." },
    { t: "Material 3: Type scale", u: "https://m3.material.io/styles/typography/type-scale-tokens", k: "Google", why: "A real type scale used in Android." },
    { t: "Apple HIG: Typography", u: "https://developer.apple.com/design/human-interface-guidelines/typography", k: "Apple", why: "iOS text styles and Dynamic Type." }
  ]
},
/* ───────────────────────── 3. Colour ───────────────────────── */
{
  id: 3, minutes: 10,
  title: "Colour",
  sub: "Mostly neutral, one main colour, and status colours only for meaning.",
  look: { goodIs: 'B', changes: ["Most of the screen is white and grey.", "Blue is used for actions only.", "Status colours come with words."] },
  idea: [
    "Most of the screen should be <b>neutral</b>: white and greys.",
    "Use <b>one main colour</b> (the brand colour) for actions people can tap.",
    "Use <b>status colours</b> only for meaning: green = success, red = error or danger, yellow = warning.",
    "Text must have enough <b>contrast</b>: at least 4.5 to 1 for normal text.",
    "Never use colour as the only signal. Add a word or an icon too."
  ],
  rule: "Every colour must have a job. If you can’t name the job, remove the colour.",
  words: [["Neutral", "white, grey, black"], ["Brand colour", "the main colour of the company"], ["Contrast", "how different the text is from its background"]],
  video: {
    before: scr(`<div class="top">My plans</div>
      <div class="body" style="gap:10px">
        <div class="card" style="background:#fff1e6" data-k="bg"><div class="t" style="color:#7b1fa2">Samsung TV</div><div class="s" style="color:#ff9e80" data-k="contrast">3 of 6 paid</div><div style="margin-top:6px"><span class="chip" style="background:#e53935;color:#fff" data-k="status">Active</span></div></div>
        <div class="card" style="background:#e8f5e9"><div class="t" style="color:#00897b">iPhone 15</div><div class="s" style="color:#a5d6a7">Paid</div><div style="margin-top:6px"><span class="chip" style="background:#43a047;color:#fff">Done</span></div></div>
        <div class="card" style="background:#e3f2fd"><div class="t" style="color:#3949ab">Laptop</div><div class="s" style="color:#90caf9">1 of 12 paid</div><div style="margin-top:6px"><span class="chip" style="background:#e53935;color:#fff">Active</span></div></div>
      </div>
      <div class="foot" data-k="cta"><div class="btn" style="background:#e53935">Pay now</div></div>`),
    after: scr(`<div class="top">My plans</div>
      <div class="body" style="gap:10px">
        <div class="card" data-k="bg"><div class="t">Samsung TV</div><div class="s" data-k="contrast">3 of 6 paid</div><div style="margin-top:6px"><span class="chip warn" data-k="status">● Payment due 1 Mar</span></div></div>
        <div class="card"><div class="t">iPhone 15</div><div class="s">6 of 6 paid</div><div style="margin-top:6px"><span class="chip ok">✓ Paid off</span></div></div>
        <div class="card"><div class="t">Laptop</div><div class="s">1 of 12 paid</div><div style="margin-top:6px"><span class="chip">On track</span></div></div>
      </div>
      <div class="foot" data-k="cta"><div class="btn">Pay now</div></div>`),
    steps: [
      { d: 5, show: 'before', card: { h: "Colour", p: "Colour is loud. Use it where it means something." } },
      { d: 7, cap: "Count the colours on this screen: purple, teal, indigo, orange, red, green, plus three backgrounds. That’s more than 10 colours, and none of them has a clear job." },
      { d: 7, hl: 'bg', note: "Each card has its own colour, but the colours mean nothing", cap: "Colourful card backgrounds make every card shout. When everything is colourful, nothing stands out." },
      { d: 7, hl: 'contrast', note: "Light orange on cream: about 2 to 1. It needs 4.5 to 1.", cap: "This light text is too weak. People can’t read it on a phone outside in the sun." },
      { d: 7, hl: 'status', note: "Red means “error”, but this plan is fine", cap: "Red is a danger colour. Using it for “Active” makes users think something is wrong." },
      { d: 6, hl: 'cta', note: "A red main button looks like “delete” or “danger”", cap: "The main action should use the brand colour, not a warning colour." },
      { d: 5, show: 'after', card: { h: "Fixed", p: "Neutral base, blue for actions, status colours for meaning." } },
      { d: 7, hl: 'status', tone: 'good', note: "Yellow = needs attention, plus words and an icon", cap: "Now the colour matches the meaning, and the text says it too. It works for colour-blind users as well." },
      { d: 6, hl: 'cta', tone: 'good', note: "Brand blue for the main action only", cap: "Blue now means “you can tap this”. It is easy to learn, because it is the same everywhere." }
    ]
  },
  practice: {
    intro: "This card screen has <b>5 colour mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top">Cards</div>
      <div class="body" style="gap:10px">
        <div class="card" style="background:#1e4fd8;color:#fff"><div class="s" style="color:#4f7be6" data-issue="contrast">Mylo card</div><div class="t">•••• 8812</div></div>
        <div class="card"><div class="split"><span class="t">Card status</span><span style="width:12px;height:12px;border-radius:50%;background:#2e7d32;display:inline-block" data-issue="only"></span></div></div>
        <div class="card"><div class="split"><span class="t">Online payments</span><span class="chip" style="background:#2563eb;color:#fff" data-issue="blues">On</span></div><div class="split"><span class="t">ATM</span><span class="chip" style="background:#1e4fd8;color:#fff">On</span></div></div>
        <div class="card" style="background:#ffeb3b" data-issue="yellow"><div class="t">Tip: freeze your card if you lose it</div></div>
      </div>
      <div class="foot"><div class="btn" style="background:#c5221f" data-issue="red">Freeze card</div></div>`),
    issues: [
      { id: 'contrast', title: "Low contrast on blue", why: "Light blue text on a blue card is very hard to read. Use white, or white with a little transparency." },
      { id: 'only', title: "Status shown by colour only", why: "A green dot with no word. Colour-blind users can’t read it. Add the word “Active”." },
      { id: 'blues', title: "Two different blues", why: "Two blues that are almost the same look like a mistake. Use one brand blue token." },
      { id: 'yellow', title: "Bright yellow for a tip", why: "Yellow means warning. A simple tip doesn’t need a loud colour. Use a neutral or a light brand tint." },
      { id: 'red', title: "Red for a safe action", why: "Freezing a card is safe, because you can undo it. Save red for things that can’t be undone, like deleting." }
    ]
  },
  quiz: [
    { q: "What is the minimum contrast for normal text (WCAG AA)?", options: ["2 to 1", "3 to 1", "4.5 to 1", "10 to 1"], answer: 2, why: "4.5 to 1 for normal text. Big text (24px and up, or 19px and up in bold) needs 3 to 1." },
    { q: "A plan is active and fine. Which status colour fits?", options: ["Red", "Neutral or green, with a word", "Bright purple", "Yellow"], answer: 1, why: "Red means danger and yellow means warning. A normal state should look calm." }
  ],
  task: {
    title: "Colour check on Mylo",
    steps: [
      "Take 3 Mylo screens and list every colour you see (Figma: select all and look at “Selection colors”).",
      "For each colour, write its job (action, success, error, text, background…).",
      "Mark colours with no job, and colours that are almost the same.",
      "Check the contrast of grey text with a contrast checker.",
      "Find places where colour is the only signal, and add a word or an icon."
    ]
  },
  checks: ["Mostly neutral base", "One brand colour for actions", "Status colours only for meaning", "Text contrast at least 4.5 to 1", "Colour is never the only signal"],
  resources: [
    { t: "Colour in UI design: a practical framework", u: "https://www.learnui.design/blog/color-in-ui-design-a-practical-framework.html", k: "Article", why: "Erik Kennedy’s clear, step-by-step method for UI colour." },
    { t: "Material 3: Colour roles", u: "https://m3.material.io/styles/color/roles", k: "Google", why: "How to give every colour a job (primary, surface, error…)." },
    { t: "WebAIM Contrast Checker", u: "https://webaim.org/resources/contrastchecker/", k: "Tool", why: "Paste two colours and see if they pass." },
    { t: "Understanding contrast (WCAG)", u: "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html", k: "W3C", why: "The official contrast rule, explained." }
  ]
},
/* ───────────────────────── 4. Hierarchy ───────────────────────── */
{
  id: 4, minutes: 10,
  title: "Visual hierarchy",
  sub: "Decide what people see first, second and third.",
  look: { goodIs: 'A', changes: ["The money amount is the biggest thing.", "Only 4 actions, all in one style.", "One small offer instead of three loud banners."] },
  idea: [
    "<b>Hierarchy</b> is the order the eye reads a screen: first, second, third.",
    "Your tools are <b>size, weight, colour, space and position</b>.",
    "Every screen needs <b>one</b> most important thing. In a money app, it is often the amount.",
    "Try the <b>squint test</b>: half close your eyes, or blur the screen. What do you see first?"
  ],
  rule: "If everything is important, nothing is important.",
  words: [["Hierarchy", "the order of importance"], ["Squint test", "look with half-closed eyes to see what stands out"], ["Primary", "the most important thing or action"]],
  video: {
    before: scr(`<div class="top" style="font-size:15px">Hi Sara 👋</div>
      <div class="body" style="gap:6px">
        <div class="banner" style="background:#7b1fa2" data-k="promo">🔥 0% INTEREST ON EVERYTHING!!</div>
        <div class="card" data-k="balance" style="padding:8px 14px"><div class="lbl">Available limit</div><div class="t" style="font-size:16px">EGP 24,500.00</div></div>
        <div class="banner" style="background:#ef6c00;font-size:13px">Invite friends, get EGP 100</div>
        <div class="grid3" data-k="actions">${['Pay','Shop','Plans','Cards','Offers','Help'].map((l,i)=>`<div><div class="ico" style="background:${['#e53935','#43a047','#1e88e5','#fdd835','#8e24aa','#00acc1'][i]};color:#fff">●</div>${l}</div>`).join('')}</div>
        <div class="banner" style="background:#00897b;font-size:13px">NEW: Cashback week</div>
      </div>${TAB('Home')}`),
    after: scr(`<div class="top" style="font-size:15px">Hi Sara</div>
      <div class="body" style="gap:16px">
        <div data-k="balance" style="padding:4px 2px"><div class="lbl">Available to spend</div><div class="big">EGP 24,500<small>.00</small></div><div class="s">of EGP 30,000 limit</div></div>
        <div class="grid4" data-k="actions">${['Pay','Shop','Plans','More'].map(l=>`<div><div class="ico">●</div>${l}</div>`).join('')}</div>
        <div class="card" data-k="promo" style="display:flex;gap:12px;align-items:center"><div class="ico" style="margin:0;background:#fff3d6;color:#7a5200">%</div><div><div class="t">0% interest this month</div><div class="s">On phones over EGP 5,000</div></div></div>
        <div class="card"><div class="grp">Recent</div><div class="row"><div class="av">B</div><div class="grow"><div class="t">B.Store</div><div class="s">Installment 2 of 6</div></div><div class="num">EGP 1,250.50</div></div></div>
      </div>${TAB('Home')}`),
    steps: [
      { d: 5, show: 'before', card: { h: "Visual hierarchy", p: "Half close your eyes. What do you see first?" } },
      { d: 7, cap: "With the squint test, you see three loud banners and six coloured circles. The thing people open the app for, their money, is hard to find." },
      { d: 7, hl: 'balance', note: "The most important number is small (16px)", cap: "The limit is the main information, but it is the same size as normal text. It loses to the banners." },
      { d: 7, hl: 'actions', note: "6 actions, 6 colours, all the same weight", cap: "Six bright icons compete with each other. The eye jumps around and can’t rest." },
      { d: 6, hl: 'promo', note: "Marketing is louder than the product", cap: "The banners use the strongest colours and capitals. They take attention away from the real content." },
      { d: 5, show: 'after', card: { h: "Fixed", p: "One hero, then actions, then everything else." } },
      { d: 8, hl: 'balance', tone: 'good', note: "Size + weight + space = clearly first", cap: "The amount is now big and bold, with space around it. It wins the squint test. The decimals are smaller, so the number is quicker to read." },
      { d: 6, hl: 'actions', tone: 'good', note: "4 actions in one quiet colour", cap: "Four actions in one colour, and “More” holds the rest. The row is second in the order, not first." },
      { d: 6, hl: 'promo', tone: 'good', note: "Still there, but quieter", cap: "The offer is still visible, but now it is a calm card. It comes third, which matches how important it is." }
    ]
  },
  practice: {
    intro: "This limit screen has <b>5 hierarchy mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top"><span class="back">‹</span>Your limit</div>
      <div class="body" style="gap:10px">
        <div class="card" data-issue="flat"><div class="t" style="font-size:16px">Credit limit</div><div class="t" style="font-size:16px">EGP 30,000</div><div class="t" style="font-size:16px">Used: EGP 5,500</div></div>
        <div class="banner" style="background:#e53935;font-size:15px" data-issue="loud">UPLOAD YOUR SALARY CERTIFICATE NOW!</div>
        <div class="grid4" data-issue="icons"><div><div class="ico">⬆</div></div><div><div class="ico">⇵</div></div><div><div class="ico">⌁</div></div><div><div class="ico">⋯</div></div></div>
        <div class="s" style="color:#c9cdd3" data-issue="weak">Your limit is reviewed every 3 months. Pay on time to grow it.</div>
      </div>
      <div class="foot" style="flex-direction:row" data-issue="ctas"><div class="btn" style="flex:1">Increase</div><div class="btn" style="flex:1">Shop now</div></div>`),
    issues: [
      { id: 'flat', title: "Everything is the same size", why: "The label, the limit and the used amount all look the same. Make the available amount the big hero." },
      { id: 'loud', title: "The banner shouts the loudest", why: "Red, capitals and bold make a side message the most important thing on the screen." },
      { id: 'icons', title: "Icons with no labels", why: "People can’t guess what these icons do. Add short labels under them." },
      { id: 'weak', title: "Useful text is too weak", why: "This tip is helpful, but it is almost invisible. Use normal grey text with good contrast." },
      { id: 'ctas', title: "Two main buttons", why: "Two filled buttons have the same weight, so people must stop and think. Make one primary and one secondary." }
    ]
  },
  quiz: [
    { q: "What does the squint test show you?", options: ["If the colours are on brand", "Which things are seen first", "If the text is spelled correctly", "The screen size"], answer: 1, why: "Blurring hides the details. You see only size, weight and contrast, and that is the hierarchy." },
    { q: "A screen has two filled buttons side by side. What is the best fix?", options: ["Make them both red", "Make one primary and the other secondary or a text button", "Make them smaller", "Add a third button"], answer: 1, why: "One primary action per screen. The other action becomes quieter." }
  ],
  task: {
    title: "Squint test on Mylo",
    steps: [
      "Take screenshots of 5 Mylo screens.",
      "In Figma, add a layer blur (about 8) on each screenshot.",
      "Write down what you see first, second and third.",
      "Next to it, write what the screen is FOR. Does the first thing match?",
      "Redesign the hierarchy of the worst screen, using only size, weight and space."
    ]
  },
  checks: ["One clear hero per screen", "Squint test passes", "One primary button", "Side messages are quieter than main content"],
  resources: [
    { t: "Visual hierarchy in UX", u: "https://www.nngroup.com/articles/visual-hierarchy-ux-definition/", k: "NN/g", why: "A simple definition with good examples." },
    { t: "5 principles of visual design", u: "https://www.nngroup.com/articles/principles-visual-design/", k: "NN/g", why: "Scale, hierarchy, balance, contrast and Gestalt." },
    { t: "Refactoring UI", u: "https://www.refactoringui.com/", k: "Book", why: "The chapter on hierarchy is excellent: “Not all elements are equal”." },
    { t: "Mobbin", u: "https://mobbin.com/", k: "Library", why: "Look at the home screens of Revolut, Klarna and Tabby. What comes first?" }
  ]
},
/* ───────────────────────── 5. Alignment ───────────────────────── */
{
  id: 5, minutes: 9,
  title: "Alignment and grids",
  sub: "Line things up so the screen feels calm and organised.",
  look: { goodIs: 'B', changes: ["Icons, text and amounts sit in clean columns.", "One left edge for all the text.", "Money is right aligned, so it is easy to compare."] },
  idea: [
    "Every element should <b>line up</b> with something else.",
    "Fewer edges = a calmer screen. Try to have one strong <b>left edge</b>.",
    "<b>Left align</b> text in lists. <b>Right align</b> money, so the numbers can be compared.",
    "Use a <b>grid</b>: on a phone, 4 columns with 16px side margins is common.",
    "Centre only short things, like a title or one button. Not lists."
  ],
  rule: "If you can draw a line through it, it is aligned. If you can’t, fix it.",
  words: [["Align", "put things on the same line"], ["Grid", "invisible columns that guide the layout"], ["Edge", "the line where elements start or end"]],
  video: {
    before: scr(`<div class="top"><span class="back">‹</span>Activity</div>
      <div class="body">
        <div class="card" style="padding:6px 10px">
          <div class="row" data-k="r1"><div class="av" style="width:30px;height:30px">B</div><div class="grow"><div class="t">B.Store</div><div class="s">24 Feb</div></div><div class="num" style="text-align:left;width:70px">−1,250.50</div></div>
          <div class="row" style="padding-left:10px"><div class="av" style="width:40px;height:40px">C</div><div class="grow" style="text-align:center"><div class="t">Carrefour</div><div class="s">20 Feb</div></div><div class="num" style="text-align:left;width:70px" data-k="money">−640.00</div></div>
          <div class="row" style="padding-left:4px" data-k="center"><div class="av" style="width:34px;height:34px">U</div><div class="grow" style="text-align:center"><div class="t">Uber</div><div class="s">18 Feb</div></div><div class="num" style="text-align:left;width:70px">−85.25</div></div>
        </div>
        <div style="padding-left:24px" data-k="edge"><div class="t">Need help?</div><div class="s">Contact support</div></div>
      </div>`),
    after: scr(`<div class="top"><span class="back">‹</span>Activity</div>
      <div class="body">
        <div class="card">
          <div class="row" data-k="r1"><div class="av">B</div><div class="grow"><div class="t">B.Store</div><div class="s">24 Feb</div></div><div class="num">−EGP 1,250.50</div></div>
          <div class="row"><div class="av">C</div><div class="grow"><div class="t">Carrefour</div><div class="s">20 Feb</div></div><div class="num" data-k="money">−EGP 640.00</div></div>
          <div class="row" data-k="center"><div class="av">U</div><div class="grow"><div class="t">Uber</div><div class="s">18 Feb</div></div><div class="num">−EGP 85.25</div></div>
        </div>
        <div style="padding:0 14px" data-k="edge"><div class="t">Need help?</div><div class="s">Contact support</div></div>
      </div>`),
    steps: [
      { d: 5, show: 'before', card: { h: "Alignment", p: "Our eyes love straight lines." } },
      { d: 7, hl: 'r1', note: "Icons of 3 sizes at 3 different starting points", cap: "Each row starts at a different place, and the icons are 30, 40 and 34px. The left side looks shaky." },
      { d: 7, hl: 'center', note: "List text centred: no clear starting line", cap: "Centred text in a list makes the eye jump to find the start of each line. Lists should be left aligned." },
      { d: 7, hl: 'money', note: "Money left aligned: the decimals don’t line up", cap: "When money is left aligned, you can’t compare amounts. 1,250.50 and 85.25 start in the same place but end in different places." },
      { d: 6, hl: 'edge', note: "A new left edge at 24px", cap: "This help text starts at a new place. Now the screen has even more edges." },
      { d: 5, show: 'after', card: { h: "Fixed", p: "Three clear columns: icon, text, amount." } },
      { d: 7, hl: 'r1', tone: 'good', note: "Same icon size, same start point", cap: "All icons are the same size and start at the same place. The text column starts at one line too." },
      { d: 7, hl: 'money', tone: 'good', note: "Right aligned with tabular numbers", cap: "Amounts are right aligned, so the decimals line up. Comparing is now easy." },
      { d: 6, hl: 'edge', tone: 'good', note: "Lines up with the text inside the card", cap: "The help text uses the same edge as the content in the card. Fewer edges = a calmer screen." }
    ]
  },
  practice: {
    intro: "This checkout screen has <b>5 alignment mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top"><span class="back">‹</span>Checkout</div>
      <div class="body" style="gap:10px">
        <div class="card center" data-issue="center"><div class="t">Samsung TV 55"</div><div class="s">B.Store, Nasr City</div></div>
        <div class="card" style="margin-left:8px" data-issue="margin"><div class="split"><span class="lbl">6 months</span><span class="num">EGP 1,250.50</span></div></div>
        <div class="card"><div class="split"><span class="lbl">Price</span><span class="num" style="margin-right:20px" data-issue="money">EGP 7,000.00</span></div><div class="split"><span class="lbl">Fee</span><span class="num">EGP 503.00</span></div></div>
        <div class="card" style="display:flex;gap:10px;align-items:flex-start" data-issue="icon"><span style="font-size:22px;margin-top:-6px">🔒</span><span class="s" style="margin-top:8px">Your payment is safe</span></div>
      </div>
      <div class="foot" style="padding:10px 4px 22px"><div class="btn" data-issue="btn">Confirm plan</div></div>`),
    issues: [
      { id: 'center', title: "Centred content in a card", why: "The other cards are left aligned. This one is centred, so the screen has two kinds of alignment." },
      { id: 'margin', title: "Card pushed in by 8px", why: "This card doesn’t line up with the cards above and below. Use the same side margins." },
      { id: 'money', title: "Amount not on the right edge", why: "One amount is pushed left, so the column breaks. All amounts should end on the same right edge." },
      { id: 'icon', title: "Icon not centred with the text", why: "The lock sits higher than the text. Centre icons vertically with the line next to them." },
      { id: 'btn', title: "Button wider than the content", why: "The button goes outside the 16px margin. Line it up with the cards." }
    ]
  },
  quiz: [
    { q: "How should money be aligned in a list?", options: ["Left", "Centre", "Right, with tabular numbers", "It doesn’t matter"], answer: 2, why: "Right alignment puts the decimals in one column, so people can compare amounts." },
    { q: "When is centred text OK?", options: ["In long lists", "In paragraphs", "For short things like a title or an empty state", "Never"], answer: 2, why: "Short, single things can be centred. Lists and paragraphs need a clear left edge." }
  ],
  task: {
    title: "Draw the lines on Mylo",
    steps: [
      "Put a screenshot of a Mylo screen in Figma.",
      "Draw thin red vertical lines on every left edge where elements start.",
      "Count the lines. Can you remove some by aligning elements to the same edge?",
      "Check that all money is right aligned.",
      "Add a 4-column layout grid with 16px margins and check that the screen follows it."
    ]
  },
  checks: ["Few, strong edges", "Lists left aligned", "Money right aligned", "Same side margins", "Icons centred with text"],
  resources: [
    { t: "Using grids in interface designs", u: "https://www.nngroup.com/articles/using-grids-in-interface-designs/", k: "NN/g", why: "Columns, gutters and margins, explained simply." },
    { t: "Apple HIG: Layout", u: "https://developer.apple.com/design/human-interface-guidelines/layout", k: "Apple", why: "Margins, safe areas and alignment on iOS." },
    { t: "Refactoring UI", u: "https://www.refactoringui.com/", k: "Book", why: "Read the part on alignment, and on why not everything needs to be centred." }
  ]
},
/* ───────────────────────── 6. Buttons & inputs ───────────────────────── */
{
  id: 6, minutes: 10,
  title: "Buttons and inputs",
  sub: "Clear button levels, all the states, and inputs that are easy to fill.",
  look: { goodIs: 'A', changes: ["One main button. The other action is a quiet text button.", "The label stays above the field.", "The error has words and an icon, not only a red line."] },
  idea: [
    "Buttons have <b>levels</b>: primary (one per screen), secondary, and text button.",
    "Every component has <b>states</b>: default, pressed, focused, disabled, loading, error. Design all of them.",
    "Touch size: at least <b>44pt</b> (iOS) or <b>48dp</b> (Android).",
    "Inputs: the <b>label</b> stays visible. A placeholder is not a label.",
    "Errors: show a <b>message</b> next to the field, with an icon, not only a red border."
  ],
  rule: "Design all the states, not only the pretty one.",
  words: [["Primary button", "the main action, filled with colour"], ["State", "how a component looks in a situation (pressed, error…)"], ["Placeholder", "grey text inside an empty field"]],
  video: {
    before: scr(`<div class="top"><span class="back">‹</span>Send money</div>
      <div class="body" style="gap:12px">
        <div class="field" data-k="label"><span class="ph">Phone number</span></div>
        <div class="field err" data-k="error"><span>EGP 50000</span></div>
        <div style="display:flex;gap:8px" data-k="small"><span style="font-size:10px;padding:2px 6px;border:1px solid #ccc;border-radius:4px">Max</span><span style="font-size:10px;padding:2px 6px;border:1px solid #ccc;border-radius:4px">Half</span></div>
      </div>
      <div class="foot" style="flex-direction:row" data-k="levels"><div class="btn" style="flex:1">Cancel</div><div class="btn" style="flex:1">Send</div></div>`),
    after: scr(`<div class="top"><span class="back">‹</span>Send money</div>
      <div class="body" style="gap:12px">
        <div data-k="label"><div class="flabel">Phone number</div><div class="field">+20 100 123 4567</div></div>
        <div data-k="error"><div class="flabel">Amount</div><div class="field err">EGP 50,000</div><div class="errt">⚠ You can send up to EGP 24,500</div></div>
        <div style="display:flex;gap:8px" data-k="small"><span class="btn sec" style="padding:12px 16px;font-size:13px">Max</span><span class="btn sec" style="padding:12px 16px;font-size:13px">Half</span></div>
      </div>
      <div class="foot" data-k="levels"><div class="btn">Send EGP 24,500</div><div class="btn ghost">Cancel</div></div>`),
    steps: [
      { d: 5, show: 'before', card: { h: "Buttons and inputs", p: "The parts people touch need the most care." } },
      { d: 7, hl: 'label', note: "Placeholder as label: it disappears when you type", cap: "When she starts typing, the words “Phone number” disappear. Now she can’t check what the field was for." },
      { d: 7, hl: 'error', note: "Red border only: what is wrong?", cap: "The red line says “error” but not why. Colour-blind users may not see it at all." },
      { d: 6, hl: 'small', note: "About 20px tall: too small to tap", cap: "These chips are tiny. A fingertip needs about 44–48 points." },
      { d: 7, hl: 'levels', note: "Two filled buttons: which one is the main one?", cap: "Cancel and Send look exactly the same. One is safe, the other moves money. They should not look equal." },
      { d: 5, show: 'after', card: { h: "Fixed", p: "Clear labels, clear errors, clear levels." } },
      { d: 6, hl: 'label', tone: 'good', note: "Label above, always visible", cap: "The label sits above the field and never disappears." },
      { d: 7, hl: 'error', tone: 'good', note: "Icon + a message that says how to fix it", cap: "The error says what is wrong and what to do. Red is still used, but it isn’t the only signal." },
      { d: 7, hl: 'levels', tone: 'good', note: "Primary = filled. Cancel = text button.", cap: "Now the main action is clear. The button also says exactly what will happen: “Send EGP 24,500”." }
    ]
  },
  practice: {
    intro: "This form has <b>5 component mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top"><span class="back">‹</span>Personal details</div>
      <div class="body" style="gap:10px">
        <div class="field" data-issue="placeholder"><span class="ph">Full name (as on your ID)</span></div>
        <div><div class="flabel">National ID</div><div class="field" style="border-color:#c5221f" data-issue="error">2980412</div></div>
        <div><div class="flabel">Mobile</div><div class="field" style="border:none;border-bottom:1.5px solid #d9dde3;border-radius:0" data-issue="styles">010 1234 5678</div></div>
        <div style="display:flex;align-items:center;gap:6px" data-issue="check"><span class="tick" style="width:12px;height:12px"></span><span class="s">I agree to the terms</span></div>
      </div>
      <div class="foot"><div class="btn" style="background:#1e4fd8;opacity:.9" data-issue="disabled">Continue</div></div>`),
    issues: [
      { id: 'placeholder', title: "Placeholder used as label", why: "When she types, the hint “as on your ID” disappears. Put a label above the field and the hint under it." },
      { id: 'error', title: "Error with no message", why: "The border is red but there is no text. Say “National ID has 14 digits. You entered 7.”" },
      { id: 'styles', title: "Two input styles on one form", why: "This field is a line, the others are boxes. Use one input style everywhere." },
      { id: 'check', title: "Checkbox too small", why: "A 12px box is too small to tap. Make the whole row tappable, at least 44pt tall." },
      { id: 'disabled', title: "Disabled button looks enabled", why: "The form isn’t complete, but the button looks normal. Show the disabled state clearly, or keep it enabled and show errors on tap." }
    ]
  },
  quiz: [
    { q: "How many primary (filled) buttons should one screen usually have?", options: ["One", "Two", "One for each action", "None"], answer: 0, why: "One primary action. The others are secondary or text buttons." },
    { q: "Which is the best error for a national ID that is too short?", options: ["Red border only", "“Invalid input”", "“National ID has 14 digits. You entered 7.”", "A popup saying “Error”"], answer: 2, why: "Say what is wrong and how to fix it, next to the field." }
  ],
  task: {
    title: "State sheet for Mylo",
    steps: [
      "Collect every button style used in Mylo onto one Figma page.",
      "Sort them into primary, secondary and text buttons. Mark the extra versions.",
      "For the main button, check that it has all its states: default, pressed, disabled, loading.",
      "Check that all inputs have visible labels and clear error states.",
      "Measure tap sizes. Mark anything under 44pt."
    ]
  },
  checks: ["One primary button per screen", "All states designed", "Tap targets at least 44pt / 48dp", "Labels always visible", "Errors have words + icon"],
  resources: [
    { t: "Button states communicate interaction", u: "https://www.nngroup.com/articles/button-states-communicate-interaction/", k: "NN/g", why: "Why every state matters, with examples." },
    { t: "Material 3: Buttons", u: "https://m3.material.io/components/buttons/overview", k: "Google", why: "Button levels and states on Android." },
    { t: "Apple HIG: Buttons", u: "https://developer.apple.com/design/human-interface-guidelines/buttons", k: "Apple", why: "Button styles and sizes on iOS." },
    { t: "GOV.UK Design System", u: "https://design-system.service.gov.uk/components/", k: "Design system", why: "Very clear, well-tested input and error components." }
  ]
},
/* ───────────────────────── 7. Details ───────────────────────── */
{
  id: 7, minutes: 9,
  title: "Icons, corners and shadows",
  sub: "Small details, repeated well, make the app feel finished and safe.",
  look: { goodIs: 'B', changes: ["All icons share one style and size.", "Corners use one system.", "Shadows are soft and the same everywhere."] },
  idea: [
    "Use <b>one icon set</b>: same size, same line width, same style (outline or filled).",
    "Pick <b>2 or 3 corner radius</b> values only (for example 8 for small things, 16 for cards).",
    "For a box inside a box: <b>inner radius = outer radius − padding</b>.",
    "Use <b>few shadow levels</b>, soft and light. Don’t mix borders and heavy shadows.",
    "In money apps, polish = <b>trust</b>. Something that looks “a little off” feels unsafe."
  ],
  rule: "Small details, repeated the same way, make an app feel trusted.",
  words: [["Corner radius", "how round the corners are"], ["Stroke", "the line width of an icon"], ["Elevation", "how high something looks, made with shadow"]],
  video: {
    before: scr(`<div class="top">More</div>
      <div class="body" style="gap:10px">
        <div class="card" style="padding:0 14px;border-radius:6px" data-k="icons">
          <div class="row"><span style="font-size:20px">💳</span><div class="grow">Cards</div></div>
          <div class="row"><span style="font-size:15px;border:1.5px solid #333;border-radius:4px;width:20px;height:20px;display:grid;place-items:center">?</span><div class="grow">Help</div></div>
          <div class="row"><span style="width:22px;height:22px;border-radius:50%;background:#1e4fd8;color:#fff;display:grid;place-items:center;font-size:12px">★</span><div class="grow">Rewards</div></div>
        </div>
        <div class="card" style="border-radius:24px;padding:8px" data-k="radius"><div style="background:#e7ecfb;border-radius:24px;padding:12px"><div class="t">Invite a friend</div><div class="s">You both get EGP 100</div></div></div>
        <div class="card" style="box-shadow:0 8px 16px rgba(0,0,0,.45);border:1.5px solid #9aa1ab" data-k="shadow"><div class="t">Security</div><div class="s">Face ID is on</div></div>
      </div>${TAB('Profile')}`),
    after: scr(`<div class="top">More</div>
      <div class="body" style="gap:10px">
        <div class="card" style="padding:0 14px" data-k="icons">
          <div class="row"><span class="ico" style="width:32px;height:32px;margin:0;font-size:15px;border-radius:10px">▭</span><div class="grow">Cards</div></div>
          <div class="row"><span class="ico" style="width:32px;height:32px;margin:0;font-size:15px;border-radius:10px">?</span><div class="grow">Help</div></div>
          <div class="row"><span class="ico" style="width:32px;height:32px;margin:0;font-size:15px;border-radius:10px">☆</span><div class="grow">Rewards</div></div>
        </div>
        <div class="card" style="border-radius:16px;padding:8px" data-k="radius"><div style="background:#e7ecfb;border-radius:8px;padding:12px"><div class="t">Invite a friend</div><div class="s">You both get EGP 100</div></div></div>
        <div class="card" data-k="shadow"><div class="t">Security</div><div class="s">Face ID is on</div></div>
      </div>${TAB('Profile')}`),
    steps: [
      { d: 5, show: 'before', card: { h: "Details", p: "People don’t see details. They feel them." } },
      { d: 7, hl: 'icons', note: "An emoji, an outline icon and a filled circle: 3 styles", cap: "Each icon comes from a different world: an emoji, a box outline and a filled circle. The list looks like it was put together from different apps." },
      { d: 8, hl: 'radius', note: "Outer 24, inner 24: the corners don’t fit", cap: "When the inner box has the same radius as the outer box, the gap at the corners looks wrong. The inner radius should be smaller." },
      { d: 7, hl: 'shadow', note: "Heavy dark shadow + a grey border", cap: "A dark, heavy shadow and a border together make this card look heavy and old. And no other card has this shadow." },
      { d: 5, show: 'after', card: { h: "Fixed", p: "One icon style, one radius system, one shadow." } },
      { d: 7, hl: 'icons', tone: 'good', note: "Same icon set, same container, same size", cap: "Now every icon has the same style and sits in the same soft square. The list reads as one thing." },
      { d: 8, hl: 'radius', tone: 'good', note: "Outer 16 − padding 8 = inner 8", cap: "Inner radius = outer radius minus padding. 16 − 8 = 8. The curves now run parallel, and it looks right." },
      { d: 6, hl: 'shadow', tone: 'good', note: "The same soft shadow as every card", cap: "This card now matches the others. Consistent details make the app feel built with care, and that builds trust." }
    ]
  },
  practice: {
    intro: "This rewards screen has <b>5 detail mistakes</b>. Tap where you see a problem.",
    screen: scr(`<div class="top">Rewards</div>
      <div class="body" style="gap:10px">
        <div class="card" style="border-radius:20px;padding:6px" data-issue="nested"><div style="background:#1e4fd8;color:#fff;border-radius:20px;padding:14px"><div class="s" style="color:#dfe7ff">Your points</div><div class="big">1,240</div></div></div>
        <div class="grid3" data-issue="icons"><div><div class="ico">☆</div>Offers</div><div><div class="ico" style="background:#1e4fd8;color:#fff">♥</div>Saved</div><div><div class="ico" style="font-size:24px;background:none">🎁</div>Gifts</div></div>
        <div class="card" style="border-radius:3px" data-issue="radius"><div class="t">Gold level</div><div class="s">260 points to go</div></div>
        <div class="card" style="box-shadow:0 10px 25px rgba(0,0,0,.4)" data-issue="shadow"><div class="t">Spin and win</div><div class="s">One free spin every week</div></div>
        <div class="card" style="display:flex;gap:10px;align-items:center"><div style="width:44px;height:28px;background:linear-gradient(135deg,#e53935,#fb8c00);border-radius:4px;transform:scaleX(1.5);transform-origin:left" data-issue="stretch"></div><div class="s" style="margin-left:22px">Partner: B.Store</div></div>
      </div>`),
    issues: [
      { id: 'nested', title: "Nested corners don’t fit", why: "Outer 20 and inner 20, with 6px padding. The inner radius should be 20 − 6 = 14." },
      { id: 'icons', title: "Three icon styles in one row", why: "Outline, filled and emoji in one row. Use one style and one size." },
      { id: 'radius', title: "A random corner radius", why: "This card uses 3px while the others use 16px. Stick to your radius scale." },
      { id: 'shadow', title: "A different, heavy shadow", why: "Only this card has a strong dark shadow. Use one soft shadow token for all cards." },
      { id: 'stretch', title: "Stretched logo", why: "The partner logo is stretched sideways. Never distort logos or images. Keep their real proportions." }
    ]
  },
  quiz: [
    { q: "The outer card radius is 20 and the padding is 8. What inner radius fits?", options: ["20", "28", "12", "4"], answer: 2, why: "Inner = outer − padding: 20 − 8 = 12." },
    { q: "What is the best way to use icons in one app?", options: ["Mix styles for fun", "One set, with the same size and line width", "Emoji only", "A different set on each screen"], answer: 1, why: "One set with the same size, stroke and style looks consistent and professional." }
  ],
  task: {
    title: "Detail hunt on Mylo",
    steps: [
      "Collect all the icons from 5 Mylo screens onto one Figma page. Sort them by style.",
      "Mark icons with a different style, size or line width.",
      "List every corner radius value you find. How many are there?",
      "Find boxes inside boxes and check the inner radius rule.",
      "List every shadow style. Suggest 2 or 3 shadow levels for the whole app."
    ]
  },
  checks: ["One icon set, size and stroke", "2–3 corner radius values", "Inner radius = outer − padding", "Few, soft shadow levels", "Logos and images not stretched"],
  resources: [
    { t: "Designing beautiful shadows", u: "https://www.joshwcomeau.com/css/designing-shadows/", k: "Article", why: "Josh Comeau shows how real light makes good shadows. It is interactive." },
    { t: "Icon usability", u: "https://www.nngroup.com/articles/icon-usability/", k: "NN/g", why: "When icons need labels, and how to keep them clear." },
    { t: "Material Symbols", u: "https://fonts.google.com/icons", k: "Icons", why: "A big, consistent icon set with fixed weights and sizes." },
    { t: "SF Symbols", u: "https://developer.apple.com/sf-symbols/", k: "Apple", why: "Apple’s icon system. See how icon weights match text weights." }
  ]
},
/* ───────────────────────── 8. Consistency ───────────────────────── */
{
  id: 8, minutes: 10,
  title: "Consistency and design tokens",
  sub: "The same thing should look the same everywhere. Tokens help you keep it that way.",
  look: { goodIs: 'A', changes: ["One button style per level instead of 4 versions.", "One toggle style.", "The values are written down as tokens."] },
  idea: [
    "<b>Consistency</b>: the same thing looks and works the same on every screen.",
    "<b>Design tokens</b> are names for your choices: <i>color-primary</i>, <i>space-16</i>, <i>radius-card</i>.",
    "To check consistency, make an <b>inventory</b>: put all the buttons (or inputs, cards…) on one page and count the versions.",
    "Fix the <b>system</b>, not only the screen. One token change can fix 50 screens."
  ],
  rule: "Count the versions. Two button styles for the same job is a bug.",
  words: [["Consistency", "the same look and behaviour everywhere"], ["Token", "a named value, like color-primary = #1E4FD8"], ["Inventory", "a page that collects all the versions of one thing"]],
  video: {
    before: scr(`<div class="top">Button inventory</div>
      <div class="body" style="gap:10px">
        <div class="s">Primary buttons found in the app:</div>
        <div data-k="buttons" style="display:grid;gap:8px">
          <div class="btn">Pay now</div>
          <div class="btn" style="background:#2563eb;border-radius:8px">Continue</div>
          <div class="btn" style="background:#1e4fd8;border-radius:999px;padding:10px">Confirm</div>
          <div class="btn" style="background:#3b5bdb;border-radius:4px;font-weight:500">Next</div>
        </div>
        <div class="s">Toggles found:</div>
        <div style="display:flex;gap:14px;align-items:center" data-k="toggles"><span style="width:40px;height:22px;border-radius:11px;background:#1e4fd8;display:inline-block"></span><span style="width:40px;height:16px;border-radius:3px;background:#43a047;display:inline-block"></span><span class="tick on">✓</span></div>
      </div>`),
    after: scr(`<div class="top">Button tokens</div>
      <div class="body" style="gap:10px">
        <div class="s">One style for each level:</div>
        <div data-k="buttons" style="display:grid;gap:8px">
          <div class="btn">Primary</div>
          <div class="btn sec">Secondary</div>
          <div class="btn ghost">Text button</div>
        </div>
        <div class="card" data-k="tokens" style="font-size:12px;line-height:1.7"><b>color-primary</b> #1E4FD8<br><b>radius-button</b> 14<br><b>space-button-y</b> 14<br><b>font-button</b> 15, semibold</div>
        <div style="display:flex;gap:14px;align-items:center" data-k="toggles"><span style="width:40px;height:22px;border-radius:11px;background:#1e4fd8;display:inline-block"></span><span class="s">One toggle style</span></div>
      </div>`),
    steps: [
      { d: 5, show: 'before', card: { h: "Consistency", p: "Collect first, then count." } },
      { d: 7, cap: "This is an inventory: one page with every primary button from the app. It is the fastest way to see a consistency problem." },
      { d: 8, hl: 'buttons', note: "4 primary buttons: 3 blues, 4 radius values, 2 weights", cap: "All four buttons do the same job, but they look different. Users can’t learn the pattern, and developers write the same code 4 times." },
      { d: 7, hl: 'toggles', note: "3 different on/off controls", cap: "A round toggle, a square bar and a checkbox all mean “on”. Pick one." },
      { d: 5, show: 'after', card: { h: "Fixed with tokens", p: "Name the choices once, use them everywhere." } },
      { d: 7, hl: 'buttons', tone: 'good', note: "Primary, secondary, text: one style each", cap: "Now there are exactly three button levels, and every screen uses them." },
      { d: 8, hl: 'tokens', tone: 'good', note: "Tokens = named values", cap: "Tokens store the decisions: colour, radius, spacing, font. Designers and developers use the same names, so the app stays consistent." },
      { d: 6, hl: 'toggles', tone: 'good', note: "One toggle for every on/off setting", cap: "For your audit, an inventory page like this is strong proof for your manager. It shows the problem in one picture." }
    ]
  },
  practice: {
    intro: "This settings screen mixes styles from different screens. Find <b>5 consistency mistakes</b>.",
    screen: scr(`<div class="top">Settings</div>
      <div class="body" style="gap:10px">
        <div class="card" style="padding:0 14px">
          <div class="row"><div class="grow">Notifications</div><span style="width:40px;height:22px;border-radius:11px;background:#1e4fd8;display:inline-block"></span></div>
          <div class="row" data-issue="toggle"><div class="grow">Face ID</div><span style="width:40px;height:16px;border-radius:3px;background:#43a047;display:inline-block"></span></div>
          <div class="row" style="padding:3px 0;font-size:12px" data-issue="row"><div class="grow">Language</div><span class="s">English</span></div>
        </div>
        <div style="font-size:18px;font-weight:800;text-transform:uppercase" data-issue="header">Security</div>
        <div class="card"><div class="t">Change PIN</div></div>
        <div class="btn" style="background:#2563eb;border-radius:6px" data-issue="button">Save</div>
        <div class="center" style="color:#7b1fa2;font-weight:600" data-issue="link">Contact us</div>
      </div>${TAB('Profile')}`),
    issues: [
      { id: 'toggle', title: "A second toggle style", why: "This toggle is green and square. The one above it is blue and round. Use one component." },
      { id: 'row', title: "A different row style", why: "This row is shorter and uses smaller text. Rows in one list should match." },
      { id: 'header', title: "A different section title style", why: "Big black capitals here, while other screens use small grey titles. Use one heading token." },
      { id: 'button', title: "A different primary button", why: "Another blue and another radius. Use the primary button component." },
      { id: 'link', title: "Purple link colour", why: "Links in the app are blue. Purple here looks like a different app. Use color-primary." }
    ]
  },
  quiz: [
    { q: "What is a design token?", options: ["A login code", "A named value for a design choice, like color-primary", "A Figma plugin", "A type of icon"], answer: 1, why: "Tokens are named decisions (colour, space, radius, type) that design and code both use." },
    { q: "What is the fastest way to show your manager a consistency problem?", options: ["Write a long email", "An inventory page with all the versions side by side", "Redesign the whole app", "Wait for user complaints"], answer: 1, why: "One picture with 4 different buttons is clear proof. Everyone understands it at once." }
  ],
  task: {
    title: "Inventory for Mylo",
    steps: [
      "Make one Figma page called “Inventory”.",
      "Screenshot and crop every button, input, card and list row from the main Mylo flows.",
      "Group the ones with the same job together, and count the versions of each.",
      "Pick the best version of each and write down its tokens (colour, radius, spacing, type).",
      "Show your manager the inventory page and the token proposal."
    ]
  },
  checks: ["Inventory made for buttons, inputs, cards and rows", "One style per job", "Values come from tokens", "Fixes proposed at system level"],
  resources: [
    { t: "Material 3: Design tokens", u: "https://m3.material.io/foundations/design-tokens/overview", k: "Google", why: "A clear intro to what tokens are and how they work." },
    { t: "Wise Design System", u: "https://wise.design/", k: "Design system", why: "A great public fintech design system to learn from." },
    { t: "Design Systems (book)", u: "https://www.smashingmagazine.com/design-systems-book/", k: "Book", why: "Alla Kholmatova on building and keeping a consistent system." },
    { t: "Atomic Design", u: "https://atomicdesign.bradfrost.com/", k: "Free book", why: "Brad Frost’s classic. The chapter on interface inventories is perfect for audits." }
  ]
}
];
