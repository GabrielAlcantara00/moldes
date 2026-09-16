:root {
  --navy: #12304a;
  --navy-2: #0a2135;
  --blue: #18b8c9;
  --blue-light: #dff8fa;
  --orange: #ff6b35;
  --yellow: #ffd23f;
  --cream: #fff8e8;
  --paper: #ffffff;
  --ink: #10283c;
  --muted: #5f7180;
  --green: #24b47e;
  --border: rgba(16, 40, 60, .12);
  --shadow: 0 24px 70px rgba(9, 36, 55, .16);
  --radius: 24px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  overflow-x: hidden;
  text-align: center;
}
img { display: block; max-width: 100%; }
a { color: inherit; }
.container { width: min(1160px, calc(100% - 40px)); margin-inline: auto; }
.narrow { width: min(800px, calc(100% - 40px)); }
.center { text-align: center; }
.section { padding: 96px 0; }

.topbar {
  min-height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 16px;
  color: #fff;
  background: var(--navy-2);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .04em;
  text-transform: uppercase;
}

.hero {
  position: relative;
  overflow: hidden;
  color: #fff;
  background:
    radial-gradient(circle at 80% 20%, rgba(24,184,201,.28), transparent 35%),
    radial-gradient(circle at 15% 85%, rgba(255,107,53,.16), transparent 26%),
    linear-gradient(135deg, #153d5c 0%, var(--navy-2) 65%, #081a29 100%);
}
.hero::before, .hero::after {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px dashed rgba(255,255,255,.16);
  transform: rotate(18deg);
}
.hero::before { left: -80px; top: 190px; }
.hero::after { right: -80px; bottom: 40px; }
.nav { min-height: 90px; display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 4; }
.brand { display: flex; align-items: center; gap: 8px; text-decoration: none; }
.brand img { width: 72px; height: 72px; object-fit: contain; }
.brand-kids { padding: 3px 8px; border-radius: 8px; color: var(--navy); background: var(--yellow); font-size: 12px; font-weight: 1000; letter-spacing: .12em; transform: rotate(-4deg); }
.mini-cta { padding: 11px 18px; border: 1px solid rgba(255,255,255,.35); border-radius: 999px; text-decoration: none; font-size: 13px; font-weight: 900; transition: .2s ease; }
.mini-cta:hover { background: #fff; color: var(--navy); }

.hero-grid { display: grid; grid-template-columns: .94fr 1.06fr; grid-template-rows: auto auto; align-items: center; column-gap: 54px; row-gap: 0; padding: 60px 0 78px; position: relative; z-index: 2; }
.hero-copy-main { grid-column: 1; grid-row: 1; align-self: end; }
.hero-actions { grid-column: 1; grid-row: 2; align-self: start; }
.eyebrow, .section-label { display: inline-flex; align-items: center; gap: 9px; color: var(--yellow); font-size: 13px; font-weight: 950; letter-spacing: .12em; text-transform: uppercase; }
.eyebrow span { width: 30px; height: 3px; background: var(--yellow); border-radius: 8px; }
h1, h2, h3, p { margin-top: 0; }
h1, h2, h3 { line-height: 1.08; letter-spacing: -.035em; }
h1 { margin: 17px 0 22px; font-size: clamp(48px, 5.6vw, 78px); max-width: 720px; }
h1 em { color: var(--orange); font-style: normal; text-decoration: underline; text-decoration-color: var(--yellow); text-decoration-thickness: 8px; text-underline-offset: 7px; }
h2 { margin: 15px 0 22px; font-size: clamp(35px, 4vw, 54px); }
h3 { font-size: 23px; }
.hero-lead { max-width: 620px; margin-inline: auto; color: #dce9f1; font-size: clamp(19px, 2.1vw, 24px); line-height: 1.45; }
.hero-lead strong { color: #fff; }
.quick-benefits { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 30px 0; }
.quick-benefits > div { padding: 13px 12px; border: 1px solid rgba(255,255,255,.13); border-radius: 15px; background: rgba(255,255,255,.06); backdrop-filter: blur(10px); }
.quick-benefits b { display: block; color: var(--yellow); font-size: 23px; line-height: 1; }
.quick-benefits span { color: #c7d7e2; font-size: 12px; font-weight: 700; }

.button { min-height: 58px; display: inline-flex; align-items: center; justify-content: center; gap: 16px; padding: 16px 24px; border: 0; border-radius: 14px; box-shadow: 0 13px 30px rgba(0,0,0,.16); text-decoration: none; text-align: center; font-size: 15px; font-weight: 950; letter-spacing: .02em; transition: transform .2s ease, box-shadow .2s ease, filter .2s ease; }
.button:hover { transform: translateY(-2px); filter: brightness(1.04); box-shadow: 0 18px 38px rgba(0,0,0,.20); }
.button-primary { color: #10283c; background: linear-gradient(135deg, #ffe36a, var(--yellow)); }
.button-dark { color: #fff; background: var(--navy); }
.button-yellow { color: var(--navy-2); background: var(--yellow); }
.button span { font-size: 20px; line-height: 1; }
.microcopy { margin: 11px 0 0; color: #adc2cf; font-size: 13px; font-weight: 650; }

.hero-visual { grid-column: 2; grid-row: 1 / span 2; position: relative; min-height: 560px; display: grid; place-items: center; }
.hero-mockup { position: relative; z-index: 2; width: 112%; max-width: none; filter: drop-shadow(0 30px 45px rgba(0,0,0,.33)); animation: float 5.5s ease-in-out infinite; }
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.paper-note { position: absolute; z-index: 1; padding: 9px 20px; color: var(--navy); background: #fff; box-shadow: var(--shadow); font-size: 13px; font-weight: 1000; letter-spacing: .12em; }
.note-one { left: 1%; top: 14%; transform: rotate(-10deg); }
.note-two { right: 3%; top: 19%; transform: rotate(9deg); }
.price-sticker, .access-sticker { position: absolute; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 18px 35px rgba(0,0,0,.25); transform: rotate(-7deg); }
.price-sticker { right: -4%; bottom: 8%; width: 150px; height: 150px; border: 7px solid #fff; border-radius: 50%; color: var(--navy); background: var(--yellow); }
.price-sticker small { font-size: 11px; font-weight: 900; }
.price-sticker strong { font-size: 38px; line-height: 1; }
.price-sticker span { font-size: 11px; font-weight: 700; }
.access-sticker { left: 3%; bottom: 9%; padding: 13px 18px; color: #fff; background: var(--orange); border-radius: 9px; font-size: 13px; line-height: 1.2; font-weight: 950; transform: rotate(6deg); }
.trust-row { position: relative; z-index: 3; display: flex; justify-content: center; gap: 48px; padding: 19px 0 24px; border-top: 1px solid rgba(255,255,255,.1); color: #d9e7ef; font-size: 14px; font-weight: 750; }

.section-label { color: var(--blue); }
.section-label.orange { color: var(--orange); }
.section-label.light { color: var(--yellow); }
.section-intro { max-width: 760px; margin: 0 auto 42px; color: var(--muted); font-size: 19px; }

.pain-section { background: var(--cream); }
.pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 48px; }
.pain-card { position: relative; padding: 32px 28px; border: 1px solid #eddcba; border-radius: var(--radius); background: #fff; box-shadow: 0 15px 40px rgba(94,69,29,.07); text-align: center; }
.pain-card.active { color: #fff; background: var(--navy); border-color: var(--navy); transform: translateY(-12px); }
.pain-number { position: absolute; right: 22px; top: 17px; color: rgba(16,40,60,.13); font-size: 40px; font-weight: 1000; }
.pain-card.active .pain-number { color: rgba(255,255,255,.16); }
.pain-card h3 { margin: 30px 0 13px; }
.pain-card p { margin: 0; color: var(--muted); }
.pain-card.active p { color: #d5e2e9; }

.solution-grid, .inside-grid, .value-grid { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 76px; }
.solution-collage { position: relative; min-height: 570px; }
.photo { position: absolute; margin: 0; overflow: hidden; border: 9px solid #fff; box-shadow: var(--shadow); background: #fff; }
.photo img { width: 100%; height: 100%; object-fit: cover; }
.photo-a { left: 0; top: 4%; width: 55%; height: 64%; transform: rotate(-5deg); }
.photo-b { right: 0; top: 0; width: 51%; height: 48%; transform: rotate(5deg); }
.photo-c { right: 4%; bottom: 0; width: 55%; height: 49%; transform: rotate(-2deg); }
.collage-badge { position: absolute; z-index: 3; left: 31%; top: 43%; display: grid; place-items: center; width: 125px; height: 125px; border: 6px solid #fff; border-radius: 50%; color: var(--navy); background: var(--yellow); box-shadow: var(--shadow); text-align: center; font-size: 12px; line-height: 1.05; transform: rotate(-8deg); }
.collage-badge strong { font-size: 23px; }
.solution-copy > p, .inside-copy > p, .value-copy > p { color: var(--muted); font-size: 19px; }
.check-list, .offer-list { list-style: none; margin: 28px 0 34px; padding: 0; }
.check-list li, .offer-list li { display: flex; justify-content: center; align-items: center; gap: 12px; margin: 13px 0; font-weight: 720; text-align: center; }
.check-list span, .offer-list span { flex: 0 0 25px; width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: var(--green); font-size: 13px; }

.steps { background: #f3fbfc; }
.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 45px; }
.step-card { position: relative; padding: 31px 22px 26px; border: 1px solid var(--border); border-radius: 20px; background: #fff; text-align: center; box-shadow: 0 12px 35px rgba(14,62,79,.07); }
.step-card > span { position: absolute; right: 18px; top: 10px; color: #d7e9ec; font-size: 46px; font-weight: 1000; }
.step-icon { font-size: 38px; }
.step-card h3 { margin: 19px 0 9px; }
.step-card p { margin: 0; color: var(--muted); font-size: 15px; }
.before-after { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 25px; margin-top: 60px; }
.before-after figure { margin: 0; overflow: hidden; border-radius: 22px; background: #fff; box-shadow: var(--shadow); }
.before-after img { width: 100%; height: 330px; object-fit: cover; }
.before-after figcaption { padding: 14px; font-size: 15px; }
.transform-arrow { width: 62px; height: 62px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: var(--orange); font-size: 31px; font-weight: 900; }

.gallery { color: #fff; background: var(--navy-2); }
.gallery-heading { display: grid; grid-template-columns: 1.2fr .8fr; align-items: end; gap: 60px; margin-bottom: 40px; text-align: center; }
.gallery-heading h2 { margin-bottom: 0; }
.gallery-heading p { margin-bottom: 7px; color: #b9ccd8; }
.gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 245px; gap: 14px; }
.gallery-item { position: relative; margin: 0; overflow: hidden; border-radius: 18px; background: #234a66; }
.gallery-item.tall { grid-row: span 2; }
.gallery-item.wide { grid-column: span 2; }
.gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
.gallery-item:hover img { transform: scale(1.05); }
.gallery-item::after { content: ""; position: absolute; inset: 55% 0 0; background: linear-gradient(transparent, rgba(0,0,0,.75)); }
.gallery-item figcaption { position: absolute; z-index: 2; left: 12px; right: 12px; bottom: 13px; text-align: center; font-size: 12px; font-weight: 950; letter-spacing: .1em; }
.gallery-cta { margin-top: 40px; }

.inside { background: var(--cream); }
.inside-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 30px; }
.inside-list > div { display: flex; align-items: center; justify-content: center; gap: 13px; padding: 16px; border-radius: 16px; background: #fff; border: 1px solid #efe0c4; text-align: center; }
.inside-list span { min-width: 57px; color: var(--orange); font-size: 23px; font-weight: 1000; }
.inside-list p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.35; }
.inside-list b { color: var(--ink); font-size: 15px; }
.library-card { position: relative; padding: 25px; border: 1px solid #e9d6af; border-radius: 30px; background: #fff; box-shadow: var(--shadow); transform: rotate(1.5deg); }
.library-card img { width: 100%; }
.library-ribbon { position: absolute; left: 50%; bottom: 22px; width: max-content; max-width: calc(100% - 40px); padding: 11px 20px; border-radius: 9px; color: #fff; background: var(--orange); box-shadow: 0 9px 20px rgba(115,45,21,.24); font-size: 12px; font-weight: 950; letter-spacing: .07em; transform: translateX(-50%) rotate(-2deg); }

.proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 40px; }
.proof-grid img { width: 100%; border-radius: 17px; box-shadow: 0 15px 35px rgba(16,40,60,.15); }
.proof-note { margin: 22px 0 0; color: var(--muted); font-size: 13px; }

.value-section { padding-top: 40px; }
.value-visual { position: relative; }
.value-visual img { width: 80%; margin: auto; border-radius: 30px; box-shadow: var(--shadow); transform: rotate(-3deg); }
.value-tag { position: absolute; right: 1%; bottom: 4%; padding: 15px 19px; border: 5px solid #fff; border-radius: 12px; color: #fff; background: var(--orange); box-shadow: var(--shadow); text-align: center; font-size: 12px; line-height: 1.15; transform: rotate(4deg); }
.value-tag strong { font-size: 18px; }
.benefit-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 9px; margin: 26px 0 34px; }
.benefit-chips span { padding: 9px 13px; border-radius: 999px; color: var(--navy); background: var(--blue-light); font-size: 14px; font-weight: 800; }

.offer-section { position: relative; overflow: hidden; color: #fff; background: linear-gradient(145deg, #12304a, #071a29); }
.offer-section::before { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,.08) 1px, transparent 1px); background-size: 21px 21px; opacity: .5; }
.offer-wrap { position: relative; z-index: 2; }
.offer-heading p { color: #c4d4dd; }
.offer-card { width: min(650px, 100%); margin: 43px auto 34px; overflow: hidden; border: 2px solid var(--yellow); border-radius: 28px; color: var(--ink); background: #fff; box-shadow: 0 35px 90px rgba(0,0,0,.38); }
.offer-card-top { display: flex; justify-content: space-between; align-items: center; padding: 13px 22px; color: var(--navy); background: var(--yellow); font-size: 12px; font-weight: 950; letter-spacing: .08em; }
.offer-card-top b { padding: 4px 8px; border-radius: 6px; color: #fff; background: var(--orange); font-size: 10px; }
.offer-content { padding: 27px 42px 38px; }
.offer-product { display: flex; align-items: center; justify-content: center; gap: 18px; padding-bottom: 22px; border-bottom: 1px solid var(--border); text-align: center; }
.offer-product img { width: 180px; }
.product-name { margin: 0; font-size: 23px; font-weight: 1000; line-height: 1.05; }
.product-sub { margin: 8px 0 0; color: var(--muted); font-size: 14px; line-height: 1.35; }
.offer-list { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 24px; margin: 24px 0; }
.offer-list li { margin: 6px 0; font-size: 14px; line-height: 1.35; }
.offer-list span { flex-basis: 21px; width: 21px; height: 21px; }
.price-block { text-align: center; }
.price-block > span { display: block; color: var(--muted); font-size: 14px; }
.price { display: flex; justify-content: center; align-items: flex-start; margin: 3px 0; color: var(--navy); line-height: .9; }
.price small { align-self: center; margin-right: 6px; font-size: 25px; font-weight: 900; }
.price strong { font-size: 86px; letter-spacing: -.08em; }
.price sup { margin-top: 9px; font-size: 28px; font-weight: 1000; }
.price-block > b { color: var(--green); font-size: 12px; letter-spacing: .09em; }
.button-checkout { width: 100%; margin-top: 23px; color: #fff; background: linear-gradient(135deg, #23b97f, #139b68); box-shadow: 0 15px 35px rgba(24,166,112,.28); }
.payment-note { margin-top: 12px; color: var(--muted); text-align: center; font-size: 12px; }
.guarantee { width: min(710px, 100%); display: flex; align-items: center; justify-content: center; gap: 25px; margin: 35px auto 0; text-align: center; }
.guarantee-seal { flex: 0 0 100px; width: 100px; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 3px solid var(--yellow); border-radius: 50%; color: var(--yellow); line-height: .9; transform: rotate(-6deg); }
.guarantee-seal strong { font-size: 39px; }
.guarantee-seal span { font-size: 13px; font-weight: 900; }
.guarantee h3 { margin: 0 0 8px; }
.guarantee p { margin: 0; color: #c2d2dc; font-size: 15px; }

.faq-list { margin-top: 40px; border-top: 1px solid var(--border); }
.faq-list details { border-bottom: 1px solid var(--border); }
.faq-list summary { position: relative; padding: 21px 48px; cursor: pointer; list-style: none; font-weight: 850; text-align: center; }
.faq-list summary::-webkit-details-marker { display: none; }
.faq-list summary::after { content: "+"; position: absolute; right: 6px; top: 15px; width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; color: var(--navy); background: var(--blue-light); font-size: 24px; }
.faq-list details[open] summary::after { content: "−"; }
.faq-list details p { padding: 0 42px 22px; color: var(--muted); text-align: center; }
.final-cta { margin-top: 40px; }

footer { padding: 40px 0 100px; color: #b6c8d3; background: #061724; font-size: 13px; }
.footer-grid { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 35px; }
.footer-brand img { width: 54px; height: 54px; }
.footer-grid p { margin: 0; }

.mobile-bar { display: none; }
.reveal { opacity: 0; transform: translateY(24px); transition: opacity .65s ease, transform .65s ease; }
.reveal.visible { opacity: 1; transform: none; }

@media (max-width: 940px) {
  .section { padding: 76px 0; }
  .hero-grid, .solution-grid, .inside-grid, .value-grid { grid-template-columns: 1fr; gap: 48px; }
  .hero-grid { grid-template-rows: auto auto auto; padding-top: 35px; }
  .hero-copy-main { grid-column: 1; grid-row: 1; }
  .hero-visual { grid-column: 1; grid-row: 2; }
  .hero-actions { grid-column: 1; grid-row: 3; }
  .hero-copy { text-align: center; }
  .hero-lead, .microcopy { margin-inline: auto; }
  .hero-visual { min-height: 500px; }
  .hero-mockup { width: 96%; }
  .price-sticker { right: 1%; }
  .pain-grid, .steps-grid { grid-template-columns: 1fr 1fr; }
  .pain-card.active { transform: none; }
  .solution-collage { width: min(620px, 100%); margin: auto; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .proof-grid { grid-template-columns: 1fr 1fr; }
  .value-visual { order: 2; }
  .footer-grid { grid-template-columns: 1fr; text-align: center; justify-items: center; }
}

@media (max-width: 620px) {
  body { font-size: 16px; padding-bottom: 71px; }
  .container, .narrow { width: min(100% - 28px, 1160px); }
  .section { padding: 65px 0; }
  .topbar { gap: 6px; font-size: 10px; }
  .nav { display: none; }
  .brand img { width: 54px; height: 54px; }
  .mini-cta { display: none; }
  .hero-grid { gap: 0; padding: 22px 0 25px; }
  h1 { font-size: 44px; }
  h1 em { text-decoration-thickness: 5px; }
  h2 { font-size: 34px; }
  .hero-lead { font-size: 18px; }
  .quick-benefits { gap: 6px; margin-top: 10px; }
  .quick-benefits > div { padding: 11px 5px; }
  .quick-benefits b { font-size: 19px; }
  .quick-benefits span { font-size: 10px; }
  .button { width: 100%; min-height: 56px; padding-inline: 16px; font-size: 13px; }
  .hero-visual { min-height: 350px; margin-top: -18px; margin-bottom: -8px; }
  .hero-mockup { width: 116%; }
  .paper-note { display: none; }
  .price-sticker { right: -1%; bottom: 2%; width: 112px; height: 112px; border-width: 5px; }
  .price-sticker strong { font-size: 30px; }
  .access-sticker { left: 0; bottom: 3%; padding: 10px 12px; font-size: 10px; }
  .trust-row { flex-wrap: wrap; gap: 8px 18px; padding: 16px 0 20px; font-size: 11px; }
  .pain-grid, .steps-grid, .inside-list { grid-template-columns: 1fr; }
  .pain-grid { margin-top: 34px; }
  .pain-card { padding: 25px 22px; }
  .solution-collage { min-height: 430px; }
  .collage-badge { width: 95px; height: 95px; left: 29%; font-size: 9px; }
  .collage-badge strong { font-size: 18px; }
  .before-after { grid-template-columns: 1fr; }
  .before-after img { height: 250px; }
  .transform-arrow { margin: -10px auto; transform: rotate(90deg); }
  .gallery-heading { grid-template-columns: 1fr; gap: 4px; }
  .gallery-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 185px; gap: 8px; }
  .gallery-item.wide { grid-column: span 2; }
  .gallery-item.tall { grid-row: span 2; }
  .library-card { padding: 12px; }
  .library-ribbon { bottom: 10px; font-size: 9px; }
  .proof-grid { gap: 8px; }
  .value-visual img { width: 90%; }
  .offer-content { padding: 22px 18px 28px; }
  .offer-card-top { padding-inline: 14px; }
  .offer-product { align-items: flex-start; }
  .offer-product img { width: 125px; }
  .offer-list { grid-template-columns: 1fr; }
  .price strong { font-size: 76px; }
  .guarantee { align-items: flex-start; gap: 15px; }
  .guarantee-seal { flex-basis: 82px; width: 82px; height: 82px; }
  .guarantee-seal strong { font-size: 31px; }
  .guarantee h3 { font-size: 20px; }
  .mobile-bar { position: fixed; z-index: 100; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 10px 14px; color: #fff; background: rgba(7,26,41,.96); border-top: 1px solid rgba(255,255,255,.16); backdrop-filter: blur(12px); }
  .mobile-bar div { display: flex; flex-direction: column; }
  .mobile-bar small { color: #b9ccd8; font-size: 9px; font-weight: 800; }
  .mobile-bar strong { color: var(--yellow); font-size: 20px; line-height: 1; }
  .mobile-bar a { padding: 11px 16px; border-radius: 9px; color: var(--navy); background: var(--yellow); text-decoration: none; font-size: 12px; font-weight: 950; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { scroll-behavior: auto !important; animation: none !important; transition: none !important; }
}
