/* =========================================================
   MOVIES
========================================================= */

const movies = [

    {
        day: 1,
        title: "Scream",
        image: "Images/scream.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ9E377ZDvzm1vRk3F4VS63MGTQcrFNYwWRk",
        year: 1996,
        duration: "1h 51m",
        genre: "Slasher",
        description: "A masked killer begins terrorizing a group of teenagers while playing a deadly game of horror movie rules."
    },

    {
        day: 2,
        title: "Saw",
        image: "Images/Saw.jpg",
        link: "http://e.pc.cd/qL6y6alK",
        year: 2004,
        duration: "1h 43m",
        genre: "Gore / Mystery",
        description: "Two strangers wake up trapped in a mysterious room and discover that they are part of a disturbing game."
    },

    {
        day: 3,
        title: "Let sleeping corpses lie",
        image: "Images/Let-sleeping-corpses-lie.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZW7G77ZiEbg118pAUyUxNRQGHvd0LNVzBnV",
        year: 1974,
        duration: "1h 35m",
        genre: "Slasher / Zombie",
        description: "After a chance meeting while traveling the countryside, a man and a woman become suspected of murder."
    },

    {
        day: 4,
        title: "Final Destination",
        image: "Images/final-destination.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZoO377Zef9YMOuCJ1Y78Ycs6S5wRpsPynQV",
        year: 2000,
        duration: "1h 38m",
        genre: "Supernatural",
        description: "After escaping a deadly accident, a group of teenagers discovers that death may still be coming for them."
    },

    {
        day: 5,
        title: "The Cabin in the Woods",
        image: "Images/the-cabin-in-the-woods.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ8U377Z4G6X7st0wU5wRBgGx8lPHfQtIYQy",
        year: 2011,
        duration: "1h 35m",
        genre: "Horror / Mystery",
        description: "A group of friends travels to an isolated cabin and discovers that something much stranger is happening around them."
    },

    {
        day: 6,
        title: "Sinister",
        image: "Images/sinister.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZeU377ZiGT2CmHVNF7aj1pgfeDrEHBA7Euk",
        year: 2012,
        duration: "1h 50m",
        genre: "Supernatural",
        description: "A true-crime writer discovers a collection of disturbing home movies that may be connected to a supernatural entity."
    },

    {
        day: 7,
        title: "The Ring",
        image: "Images/the-ring.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZzI377Zd1rgt8bs65uDb6PItxt82pMwodxX",
        year: 2002,
        duration: "1h 55m",
        genre: "Supernatural Horror",
        description: "A mysterious videotape appears to be connected to a terrifying curse that kills anyone who watches it."
    },

    {
        day: 8,
        title: "Hell House LLC",
        image: "Images/hell-house-llc.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ8I377ZXC5hu3V4nYHldkxzDnAWPYa9beUV",
        year: 2015,
        duration: "1h 33m",
        genre: "Found Footage",
        description: "A documentary crew investigates the unexplained events surrounding a haunted Halloween attraction."
    },

    {
        day: 9,
        title: "Hereditary",
        image: "Images/Hereditary.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZya377ZPRoqa2GQEUSyoIBD4bhqt5pQpYSk",
        year: 2018,
        duration: "2h 8m",
        genre: "psychological Horror",
        description: "A grieving family is haunted by tragic and disturbing occurrences."
    },

    {
        day: 10,
        title: "Fear Street",
        image: "Images/fear-street.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZeI377ZuYNIUvhLPJBlq7GtR0DBvpfVtHgV",
        year: 2021,
        duration: "1h 47m",
        genre: "Slasher",
        description: "A group of teenagers discovers a centuries-old curse that connects a series of brutal murders."
    },

    {
        day: 11,
        title: "The Collector",
        image: "Images/the-collector.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZnA377ZfTg5pF0HgEB2z2J46ONvWuFD8uXV",
        year: 2009,
        duration: "1h 28m",
        genre: "Traps / Survival",
        description: "A burglar breaks into a house only to discover that a masked killer has turned it into a deadly trap."
    },

    {
        day: 12,
        title: "The Strangers",
        image: "Images/the-strangers.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZdA377ZbdOqxg1r7HQe0iYnJtc8CYUG7XkV",
        year: 2008,
        duration: "1h 26m",
        genre: "Home Invasion",
        description: "A couple staying at an isolated house is terrorized by three mysterious masked strangers."
    },

    {
        day: 13,
        title: "Oculus",
        image: "Images/oculus.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZoa377Z78qXYjQiss4ux8dlpIRfChERBX3X",
        year: 2013,
        duration: "1h 44m",
        genre: "Psychological Horror",
        description: "A young woman tries to prove that a mysterious antique mirror is responsible for a series of terrifying events."
    },

    {
        day: 14,
        title: "The Purge",
        image: "Images/the-purge.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZh3377ZfGeXFTbh0nSsCQikyA5cHb7mFC0k",
        year: 2013,
        duration: "1h 25m",
        genre: "Survival",
        description: "For one night every year, all crime becomes legal, forcing a family to fight for survival inside their own home."
    },

    {
        day: 15,
        title: "It",
        image: "Images/it.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZh7G77ZHBDeTlwxEpYbGcts7oNv7Bc2QUqk",
        year: 2017,
        duration: "2h 15m",
        genre: "Horror / Creature",
        description: "A group of children confronts a terrifying entity that takes the form of a sinister clown."
    },

    {
        day: 16,
        title: "Ouija: Origin of Evil",
        image: "Images/ouija-origin-of-evil.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZpyG77ZUK45mgYD3mHqabLFVIkR4f86Qrjy",
        year: 2016,
        duration: "1h 39m",
        genre: "Supernatural",
        description: "A family discovers that their new Ouija board has awakened something dangerous inside their home."
    },

    {
        day: 17,
        title: "M3GAN",
        image: "Images/m3gan.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZQyG77ZqQVkMkljHfjUWPHHImJ3ORMgGFOX",
        year: 2022,
        duration: "1h 42m",
        genre: "Horror / Sci-Fi",
        description: "An advanced robotic doll designed to protect a child begins developing increasingly disturbing behavior."
    },

    {
        day: 18,
        title: "Clown in a Cornfield",
        image: "Images/clown-in-a-cornfield.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ1v377ZyRGIlVdIJqBdTcQ1cxrKh5DEvxl7",
        year: 2025,
        duration: "1h 35m",
        genre: "Slasher",
        description: "A teenager moves to a small town where a terrifying clown begins hunting the local residents."
    },

    {
        day: 19,
        title: "Insidious",
        image: "Images/Insidious.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZp2G77ZSTMmFzbOB4f5znv7QatzVjSfu9ty",
        year: 2011,
        duration: "1h 42m",
        genre: "Supernatural horror",
        description: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further."
    },

    {
        day: 20,
        title: "Backrooms",
        image: "Images/Backrooms.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZtVG77ZsJbQpmIgO0HhKboYc5H54YpDyY5X",
        year: 2026,
        duration: "1h 51m",
        genre: "Psychological Horror",
        description: "After a therapist's patient disappears into a dimension beyond reality, she must venture into the unknown to save him."
    },

    {
        day: 21,
        title: "Cobweb",
        image: "Images/cobweb.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZy7G77ZFJLO0U7tlqhLss7Jnp2fyuAd9qtk",
        year: 2023,
        duration: "1h 28m",
        genre: "Horror / Mystery",
        description: "A young boy begins hearing strange noises coming from inside the walls of his bedroom."
    },

    {
        day: 22,
        title: "Rec",
        image: "Images/Rec.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ8FG77ZIJDaNw3A9tQh3iPG9Votez7NMqiX",
        year: 2007,
        duration: "1h 15m",
        genre: "Found footage",
        description: "A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying."
    },

    {
        day: 23,
        title: "Antlers",
        image: "Images/antlers.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ34G77ZAgv3z3I0G5HWOxkrrRuBTVTXhClk",
        year: 2021,
        duration: "1h 39m",
        genre: "Creature Horror",
        description: "A teacher becomes concerned about a mysterious child whose family appears to be hiding something terrifying."
    },

    {
        day: 24,
        title: "Immaculate",
        image: "Images/Immaculate.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZERG77ZXHegf4avJ9hV6d9JDjP2uV5FqxCV",
        year: 2024,
        duration: "1h 29m",
        genre: "Religious Horror/Thriller",
        description: "Cecilia, a woman of devout faith, is warmly welcomed to the picture-perfect Italian countryside where she is offered a new role at an illustrious convent."
    },

    {
        day: 25,
        title: "Paranormal activity",
        image: "Images/Paranormal-activity.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZcQG77ZUBXuxhR9MekB11nPIE4jhfDtHFhk",
        year: 2007,
        duration: "1h 26m",
        genre: "Found footage horror",
        description: "After moving into a suburban home, a couple becomes increasingly disturbed by a nightly demonic presence."
    },

    {
        day: 26,
        title: "The Conjuring",
        image: "Images/The Conjuring.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZjYG77Zw0GwedRxGELl1wLynjBj0YNX19N7",
        year: 2013,
        duration: "1h 52m",
        genre: "Supernatural horror",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    },

    {
        day: 27,
        title: "Trick 'r Treat",
        image: "Images/trick-r-treat.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZhYG77Z94pENUw5CSbDTuh1rmYeMJ2nMGjk",
        year: 2007,
        duration: "1h 22m",
        genre: "Halloween Anthology",
        description: "Several interconnected stories unfold during one strange and dangerous Halloween night."
    },

    {
        day: 28,
        title: "Scary Stories to Tell in the Dark",
        image: "Images/scary-stories.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZeYG77ZTmiw1rbWrbp0P4UksjsOCVloyNsV",
        year: 2019,
        duration: "1h 51m",
        genre: "Horror / Adventure",
        description: "A group of teenagers discovers a mysterious book whose terrifying stories begin coming to life."
    },

    {
        day: 29,
        title: "In a Violent Nature",
        image: "Images/in-a-violent-nature.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZsyG77Zxj2FyWG1nMQsLqoMe0kvqBFgJYXX",
        year: 2024,
        duration: "1h 34m",
        genre: "Slasher",
        description: "A mysterious killer slowly stalks a group of young people through an isolated forest."
    },

    {
        day: 30,
        title: "Coraline",
        image: "Images/coraline.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZ2SG77Z9uQiDXyK25kBCGblaCeeVkwzOVNV",
        year: 2009,
        duration: "1h 40m",
        genre: "Dark Fantasy",
        description: "A young girl discovers a mysterious alternate world that seems perfect at first but hides a sinister secret."
    },

    {
        day: 31,
        title: "Heretic",
        image: "Images/Heretic.jpg",
        link: "https://e.pcloud.link/publink/show?code=XZmjG77ZWcMpt36S8NfY06uovF3Ql0gRhQVV",
        year: 2024,
        duration: "1h 51m",
        genre: "Psychological Horror",
        description: "Two young Mormon women are drawn into a game of cat-and-mouse in the house of a strange man."
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const calendar = document.querySelector(".calendar");

const movieModal = document.getElementById("movieModal");
const modalClose = document.getElementById("modalClose");

const modalPoster = document.getElementById("modalPoster");
const modalDay = document.getElementById("modalDay");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalDuration = document.getElementById("modalDuration");
const modalGenre = document.getElementById("modalGenre");
const modalDescription = document.getElementById("modalDescription");
const modalWatch = document.getElementById("modalWatch");


/* =========================================================
   CALENDAR SETTINGS
========================================================= */

const year = 2026;
const month = 9; // October (January = 0)


/* =========================================================
   TEST MODE
========================================================= */

// Put a number from 1 to 31 to simulate that day.
// Use null to use the real date.

const testDay = null;

const today = new Date();

let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let currentDay = today.getDate();

if (testDay !== null) {
    currentYear = 2026;
    currentMonth = 9;
    currentDay = testDay;
}


/* =========================================================
   CALENDAR POSITION
========================================================= */

// Find which day of the week October 1 falls on.

const firstDay = new Date(year, month, 1).getDay();

// Convert Sunday = 0 to Monday = 0.

const startingDay =
    firstDay === 0
        ? 6
        : firstDay - 1;


// Create empty cells before October 1.

for (let i = 0; i < startingDay; i++) {

    const emptyDay = document.createElement("div");

    emptyDay.classList.add("empty-day");

    calendar.appendChild(emptyDay);
}


/* =========================================================
   CREATE MOVIE CARDS
========================================================= */

movies.forEach(movie => {

    const dayElement = document.createElement("div");

    dayElement.classList.add("day");


    /* -----------------------------------------
       DATE STATUS
    ----------------------------------------- */

    const isFuture =
        currentYear < year ||
        (
            currentYear === year &&
            currentMonth < month
        ) ||
        (
            currentYear === year &&
            currentMonth === month &&
            movie.day > currentDay
        );


    const isToday =
        currentYear === year &&
        currentMonth === month &&
        currentDay === movie.day;


    /* -----------------------------------------
       CARD STATUS
    ----------------------------------------- */

    if (isToday) {
        dayElement.classList.add("today");
    }

    if (isFuture) {
        dayElement.classList.add("locked");
    }


    /* -----------------------------------------
       CARD ANIMATION
    ----------------------------------------- */

    dayElement.style.animationDelay =
        `${movie.day * 0.04}s`;


    /* -----------------------------------------
       DAY NUMBER
    ----------------------------------------- */

    const titleElement = document.createElement("h2");

    titleElement.textContent = movie.day;


    /* -----------------------------------------
       MOVIE LINK
    ----------------------------------------- */

    const linkElement = document.createElement("a");

    linkElement.href = "#";


    /* -----------------------------------------
       MOVIE POSTER
    ----------------------------------------- */

    const imageElement = document.createElement("img");

    imageElement.src = movie.image;
    imageElement.alt = `${movie.title} poster`;


    /* -----------------------------------------
       LOCKED MOVIE
    ----------------------------------------- */

    if (isFuture) {

        linkElement.classList.add("locked-link");

        linkElement.addEventListener("click", event => {

            event.preventDefault();

        });

    }


    /* -----------------------------------------
       AVAILABLE MOVIE
    ----------------------------------------- */

    else {

        linkElement.addEventListener("click", event => {

            event.preventDefault();


            // Poster

            modalPoster.src = movie.image;
            modalPoster.alt = `${movie.title} poster`;


            // Day

            const formattedDay =
                String(movie.day).padStart(2, "0");

            modalDay.textContent =
                `OCTOBER ${formattedDay} • NIGHT ${formattedDay}`;


            // Movie information

            modalTitle.textContent = movie.title;

            modalYear.textContent =
                `YEAR: ${movie.year}`;

            modalDuration.textContent =
                `DURATION: ${movie.duration}`;

            modalGenre.textContent =
                `GENRE: ${movie.genre}`;

            modalDescription.textContent =
                movie.description;


            // Watch link

            modalWatch.href = movie.link;


            // Open modal

            movieModal.classList.add("active");

        });

    }


    /* -----------------------------------------
       MOVIE TITLE
    ----------------------------------------- */

    const movieTitle = document.createElement("div");

    movieTitle.classList.add("movie-title");

    movieTitle.textContent = movie.title;


    /* -----------------------------------------
       LOCKED MESSAGE
    ----------------------------------------- */

    if (isFuture) {

        const lockedMessage =
            document.createElement("div");

        lockedMessage.classList.add("locked-message");

        lockedMessage.innerHTML = `
            <span class="lock-icon">
                <span class="lock-emoji">🔒</span>
            </span>

            <span>UNLOCKS OCT ${movie.day}</span>
        `;

        dayElement.appendChild(lockedMessage);
    }


    /* -----------------------------------------
       BUILD CARD
    ----------------------------------------- */

    linkElement.appendChild(imageElement);

    dayElement.appendChild(titleElement);

    dayElement.appendChild(linkElement);

    dayElement.appendChild(movieTitle);

    calendar.appendChild(dayElement);

});


/* =========================================================
   MODAL
========================================================= */


/* Close button */

modalClose.addEventListener("click", () => {

    movieModal.classList.remove("active");

});


/* Click outside modal */

movieModal.addEventListener("click", event => {

    if (event.target === movieModal) {

        movieModal.classList.remove("active");

    }

});


/* Escape key */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        movieModal.classList.remove("active");

    }

});


/* =========================================================
   HALLOWEEN COUNTDOWN
========================================================= */

const countdown =
    document.getElementById("countdown");

const countdownDays =
    document.getElementById("countdownDays");

const countdownHours =
    document.getElementById("countdownHours");

const countdownMinutes =
    document.getElementById("countdownMinutes");

const countdownSeconds =
    document.getElementById("countdownSeconds");


const halloweenStart =
    new Date("2026-10-01T00:00:00");


function updateCountdown() {

    const now = new Date();

    const difference =
        halloweenStart - now;


    /* October has arrived */

    if (difference <= 0) {

        countdown.innerHTML =
            "THE HORROR BEGINS TONIGHT";

        countdown.classList.add(
            "countdown-finished"
        );

        return;
    }


    /* Calculate remaining time */

    const days = Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference /
            (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference /
            (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    /* Display countdown */

    countdownDays.textContent =
        String(days).padStart(2, "0");

    countdownHours.textContent =
        String(hours).padStart(2, "0");

    countdownMinutes.textContent =
        String(minutes).padStart(2, "0");

    countdownSeconds.textContent =
        String(seconds).padStart(2, "0");
}


/* Start countdown */

updateCountdown();

setInterval(updateCountdown, 1000);
