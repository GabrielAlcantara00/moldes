/* CONFIGURAÇÃO RÁPIDA — troque somente os dois valores abaixo antes de anunciar. */
const LP_CONFIG = {
  checkoutUrl: "COLE_SEU_LINK_DO_CHECKOUT_AQUI",
  metaPixelId: "COLE_SEU_PIXEL_ID_AQUI"
};

const checkoutButton = document.getElementById("checkoutButton");
const offer = document.getElementById("oferta");

document.querySelectorAll(".js-offer").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    offer.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

checkoutButton.addEventListener("click", (event) => {
  const configured = /^https?:\/\//i.test(LP_CONFIG.checkoutUrl);
  if (!configured) {
    event.preventDefault();
    alert("Antes de publicar, coloque o seu link de checkout no arquivo script.js.");
    return;
  }

  checkoutButton.href = LP_CONFIG.checkoutUrl;
  if (typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout", { value: 10.00, currency: "BRL" });
  }
});

if (/^https?:\/\//i.test(LP_CONFIG.checkoutUrl)) {
  checkoutButton.href = LP_CONFIG.checkoutUrl;
  checkoutButton.target = "_blank";
}

document.getElementById("year").textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  ".pain-card, .step-card, .gallery-item, .inside-list > div, .proof-grid img, .offer-card"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

document.querySelectorAll(".faq-list details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll(".faq-list details").forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});

function initMetaPixel(pixelId) {
  if (!/^\d{5,}$/.test(pixelId)) return;
  (function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)})(
  window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

initMetaPixel(LP_CONFIG.metaPixelId);
