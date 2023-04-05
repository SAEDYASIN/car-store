// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

navToggle.onclick = () => {
  navMenu.classList.add("show-menu");
};

navClose.onclick = () => {
  navMenu.classList.remove("show-menu");
};

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((l) => {
  l.onclick = () => {
    navMenu.classList.remove("show-menu");
  };
});

// Change Header Background
const scrollHeader = () => {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};

window.addEventListener("scroll", scrollHeader);

// Link Section Active
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// Show to top button
const toTop = () => {
  const scrollTop = document.getElementById("scroll-up");

  if (window.scrollY >= 350) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", toTop);

// Linked Active Feature
const linkFeatured = document.querySelectorAll(".featured__item");

function activeFeatured() {
  linkFeatured.forEach((l) => l.classList.remove("active-featured"));
  this.classList.add("active-featured");
}

linkFeatured.forEach((l) => l.addEventListener("click", activeFeatured));

// Popular Swiper
let swiperPopular = new Swiper(".popular__container", {
  loop: true,
  slidePreview: "auto",
  spaceBetween: 24,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
  },
});

// Mixitup Filter Featured
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
    target: ".featured__card",
  },
  animation: {
    duration: 300,
  },
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__title,.popular__container,.features__img,.featured__filters`);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 1000, origin: "bottom" });
sr.reveal(`.about__group, offer__data`, { origin: "left" });
sr.reveal(`.about__data, .offer__img`, { origin: "right" });
sr.reveal(`.features__map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, featured__item, logos__content, footer__content `, {
  interval: 100,
});

// Dark and Light Theme

// هدول العناصر الي يدي اغير بلونهم لما اخلي الموقع دارك او لايت
const icon = document.getElementById("icon");
const iconHolder = document.querySelector(".icon-holder");
const header = document.querySelector(".header");
const scrollTop = document.getElementById("scroll-up");
const offerContainer = document.querySelector(".offer__container");
const aboutCard = document.querySelector(".about__card");
const featuresCard = document.querySelectorAll(".features__card");
const logos = document.querySelectorAll(".logos__img");

//  هاد عبارة عن جملة اف بتشوف السيستم تاعك هل هو دارك او لا و على حسبو بعمل كود معين وهاد الكود انو اذا لايت يغير الون وهكذت
if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.className = "ri-moon-fill";
    scrollTop.style.backgroundColor = "rgba(0,0,0, 0.1)";
    offerContainer.children[0].remove();
    aboutCard.style.backgroundColor = "rgba(0,0,0,0.1)";
    featuresCard.forEach((card) => {
      card.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
    let count = 0;
    logos.forEach((logo) => {
      count++;
      logo.src = `./imgs/logo_L_${count}.svg`;
    });
  } else {
    icon.className = "ri-sun-line";
    scrollTop.style.backgroundColor = "rgba(255,255,255, 0.1)";
    let offerBg = document.createElement("img");
    offerBg.className = "offer__bg";
    offerBg.src = "./imgs/offer-bg.png";
    offerContainer.prepend(offerBg);
    aboutCard.style.backgroundColor = "rgba(255,255,255,0.1)";
    featuresCard.forEach((card) => {
      card.style.backgroundColor = "rgba(255,255,255,0.1)";
    });
    let count = 0;
    logos.forEach((logo) => {
      count++;
      logo.src = `./imgs/logo${count}.png`;
    });
  }
}

// هاد نفس الي فوق بالظبط بس الي بفرق انو لما عمل كليك على الايكون مش هيروح يفحص على السيستم تاعك

icon.onclick = () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.className = "ri-moon-fill";
    scrollTop.style.backgroundColor = "rgba(0,0,0, 0.1)";
    offerContainer.children[0].remove();
    aboutCard.style.backgroundColor = "rgba(0,0,0,0.1)";
    featuresCard.forEach((card) => {
      card.style.backgroundColor = "rgba(0,0,0,0.1)";
    });
    let count = 0;
    logos.forEach((logo) => {
      count++;
      logo.src = `./imgs/logo_L_${count}.svg`;
    });
  } else {
    icon.className = "ri-sun-line";
    scrollTop.style.backgroundColor = "rgba(255,255,255, 0.1)";
    let offerBg = document.createElement("img");
    offerBg.className = "offer__bg";
    offerBg.src = "./imgs/offer-bg.png";
    offerContainer.prepend(offerBg);
    aboutCard.style.backgroundColor = "rgba(255,255,255,0.1)";
    featuresCard.forEach((card) => {
      card.style.backgroundColor = "rgba(255,255,255,0.1)";
    });
    let count = 0;
    logos.forEach((logo) => {
      count++;
      logo.src = `./imgs/logo${count}.png`;
    });
  }
};
