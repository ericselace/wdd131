document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('show');
});


const lastModified = document.getElementById('last-modified');
const year = new Date().getFullYear();
const modifiedDate = document.lastModified;
lastModified.textContent = 'year . Last Modification:{modifiedDate}';
const temples = [{
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: '9600 ',
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla, Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December 9",
        area: "25,349 square feet",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/320x200/2-Barranquilla-Columblia-Temple-2135201.jpg"

    },
    {
        templeName: "frankfurt, Germany",
        location: "frankfurt, Germany",
        dedicated: "2019, October 20",
        area: "17362",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/320x200/frankfurt-temple-3-2278181.jpg"
    },
    {
        templeName: "Idaho Falls ,Idaho",
        location: " Idaho, united states",
        dedicated: "2022, March 19 ",
        area: "18000",
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/320x200/1-Idaho-Falls-Temple-2097425.jpg"
    }

];

const gallery = document.querySelector('.gallery');

temples.forEach((temple) => {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const title = document.createElement('h3');
    title.textContent = temple.name;

    const loc = document.createElement('p');
    loc.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const date = document.createElement('p');
    date.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;


    let area = document.createElement('p');
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;



    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.name;
    image.loading = 'lazy';

    card.appendChild(title);
    card.appendChild(loc);
    card.appendChild(date);
    card.appendChild(area);
    card.appendChild(image);

    gallery.appendChild(card);
});