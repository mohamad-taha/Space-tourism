const menuBtn = document.querySelector(".menuBtn");
const closeBtn = document.querySelector(".closeBtn");
const sideBar = document.querySelector(".sideBar");
const body = document.querySelector("body");
const navigationLinks = document.querySelectorAll(".link");
const navLinks = document.querySelectorAll(".link");
const sideBarLinks = document.querySelectorAll(".sideBar .link");

/* header */

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  sideBar.style.transform = "translateX(0)";
});

closeBtn.addEventListener("click", () => {
  sideBar.style.transform = "translateX(100%)";
});

window.onresize = () => {
  if (window.innerWidth > 630) {
    sideBar.style.transform = "translateX(100%)";
  }
};

body.addEventListener("click", (e) => {
  const isClickOut = !sideBar.contains(e.target) && e.target != menuBtn;
  if (isClickOut) {
    sideBar.style.transform = "translateX(100%)";
  }
});

const currentPage = window.location.pathname.split("/").pop();

navigationLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (currentPage === href) {
    link.style = "border-bottom:solid";
  }
});

sideBarLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (currentPage === href) {
    link.style = "border-right:solid";
  }
});

/* destination */
const destinations = {
  moon: {
    img: "./assets/imgs/destination/image-moon.png",
    title: "Moon",
    content: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384,400 km",
    time: "3 days",
  },
  europa: {
    img: "./assets/imgs/destination/image-europa.png",
    title: "Europa",
    content: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: "628 mil. km",
    time: "3 years",
  },
  titan: {
    img: "./assets/imgs/destination/image-titan.png",
    title: "Titan",
    content: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 bil. km",
    time: "7 years",
  },
  mars: {
    img: "./assets/imgs/destination/image-mars.png",
    title: "Mars",
    content: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: "225 mil. km",
    time: "9 months",
  },
};

const moonBtn = document.querySelector(".moonDestination");
const marsBtn = document.querySelector(".marsDestination");
const europaBtn = document.querySelector(".europaDestination");
const titanBtn = document.querySelector(".titanDestination");
const destinationContainer = document.querySelector(".destinationContent");
const destinationBtns = document.querySelectorAll(".destinationBtns");
const destinationImg = document.querySelector(".destinationImg");

const renderDestination = (destination) => {
  const dest = destinations[destination];
  if (destinationContainer) {
    destinationContainer.innerHTML = `
    <div class="destinationBody">
    <h2>${dest.title}</h2>
    <p>${dest.content}</p>
    </div>
    <div class="destinationFooter">
    <p><span>avg.distance</span>${dest.distance}</p>
    <p><span>est.travel time</span>${dest.time}</p>
    </div>
    `;
  }
};

if (moonBtn) {
  moonBtn.dataset.destination = "moon";
  marsBtn.dataset.destination = "mars";
  titanBtn.dataset.destination = "titan";
  europaBtn.dataset.destination = "europa";

  moonBtn.style.color = "white";
  moonBtn.style.borderBottomColor = "white";
}

renderDestination("moon");

destinationBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    destinationBtns.forEach((btn) => {
      btn.style.color = "#d0d6f9";
      btn.style.borderBottomColor = "transparent";
    });

    btn.style.color = "white";
    btn.style.borderBottomColor = "white";

    renderDestination(btn.dataset.destination);

    destinationImg.style.transform = "rotate(180deg)";
    setTimeout(() => {
      destinationImg.style.transform = "rotate(0)";
    }, 300);
    destinationImg.src = `./assets/imgs/destination/image-${btn.dataset.destination}.png`;
  });
});

/* crew */
const crew = {
  A: {
    name: "Douglas Hurley",
    img: "./assets/imgs/crew/image-douglas-hurley.png",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  B: {
    name: "Mark Shuttleworth",
    img: "./assets/imgs/crew/image-mark-shuttleworth.png",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  C: {
    name: "Victor Glover",
    img: "./assets/imgs/crew/image-victor-glover.png",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  D: {
    name: "Anousheh Ansari",
    img: "./assets/imgs/crew/image-anousheh-ansari.png",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
};

const crewContainer = document.querySelector(".crewContent > div");
const crewBtns = document.querySelectorAll(".crewFooter button");
const crewImg = document.querySelector(".crewBody > img");
const btnCircle = document.querySelectorAll(".crewFooter button circle");

const renderCrew = (members) => {
  const member = crew[members];
  if (crewContainer) {
    crewContainer.innerHTML = `
    <h2>${member.role}</h2>
    <h1>${member.name}</h1>
    <p>${member.bio}</p>
    `;
  }
};

renderCrew("A");
if (crewBtns[0]) {
  crewBtns[0].dataset.crew = "A";
  crewBtns[1].dataset.crew = "B";
  crewBtns[2].dataset.crew = "C";
  crewBtns[3].dataset.crew = "D";

  btnCircle[0].style.opacity = "1";
}

crewBtns.forEach((btn, id) => {
  btn.addEventListener("click", () => {
    btnCircle.forEach((cicle) => {
      cicle.style.opacity = "0.174363";
    });

    btnCircle[id].style.opacity = "1";

    renderCrew(btn.dataset.crew);

    const image = crew[btn.dataset.crew].img;

    crewImg.src = image;
  });
});

/* technology */
const technology = {
  A: {
    name: "Launch vehicle",
    images: {
      portrait: "./assets/imgs/technology/image-launch-vehicle-portrait.jpg",
      landscape: "./assets/imgs/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  B: {
    name: "Spaceport",
    images: {
      portrait: "./assets/imgs/technology/image-spaceport-portrait.jpg",
      landscape: "./assets/imgs/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  C: {
    name: "Space capsule",
    images: {
      portrait: "./assets/imgs/technology/image-space-capsule-portrait.jpg",
      landscape: "./assets/imgs/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

const technologyBtns = document.querySelectorAll(".technologyBtns button");
const technologyContent = document.querySelector(".technologyContent div");
const technologyImg = document.querySelector(".technologyBody img");

const renderTechnology = (tech) => {
  const data = technology[tech];
  if (technologyContent) {
    technologyContent.innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.description}</p>
    `;
  }
};

renderTechnology("A");
if (technologyBtns[0]) {
  technologyBtns[0].dataset.technology = "A";
  technologyBtns[1].dataset.technology = "B";
  technologyBtns[2].dataset.technology = "C";

  technologyBtns[0].style.borderColor = "white";
  technologyBtns[0].style.backgroundColor = "white";
  technologyBtns[0].style.color = "black";
}

technologyBtns.forEach((btn) => {
  const image = technology[btn.dataset.technology].images;

  if (window.innerWidth < 1024) {
    technologyImg.src =
      technology[technologyBtns[0].dataset.technology].images.landscape;
  } else {
    technologyImg.src =
      technology[technologyBtns[0].dataset.technology].images.portrait;
  }

  btn.addEventListener("click", () => {
    technologyBtns.forEach((btn) => {
      btn.style.borderColor = "";
      btn.style.backgroundColor = "";
      btn.style.color = "";
    });

    btn.style.borderColor = "white";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";

    renderTechnology(btn.dataset.technology);

    technologyImg.src = image.portrait;

    if (window.innerWidth < 1024) {
      technologyImg.src = image.landscape;
    }
  });
});
