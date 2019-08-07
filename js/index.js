const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelector('nav');
console.log(nav);

let navItem = document.querySelectorAll('a');
console.log(navItem);


navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

const navItemArr = Array.from(navItem);
console.log(navItemArr);

navItemArr.forEach(item => {
  item.style.color = 'green';
});

let awesome = document.querySelector('.cta-text h1');
console.log(awesome);
awesome.textContent = siteContent["cta"]["h1"];

let button = document.querySelector('button');
console.log(button);
button.textContent = siteContent["cta"]["button"];

let image = document.getElementById('cta-img');
console.log(image);
image.setAttribute('src', siteContent["cta"]["img-src"]);

let headers = document.querySelectorAll('h4');
console.log(headers);

headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
headers[5].textContent = siteContent["contact"]["contact-h4"];

let middlePhoto = document.getElementById('middle-img');
console.log(middlePhoto);
middlePhoto.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let pTags = document.querySelectorAll('p');
console.log(pTags);

pTags[0].textContent = siteContent["main-content"]["features-content"]
pTags[1].textContent = siteContent["main-content"]["about-content"]
pTags[2].textContent = siteContent["main-content"]["services-content"]
pTags[3].textContent = siteContent["main-content"]["product-content"]
pTags[4].textContent = siteContent["main-content"]["vision-content"]
pTags[5].textContent = siteContent["contact"]["address"]
pTags[6].textContent = siteContent["contact"]["phone"]
pTags[7].textContent = siteContent["contact"]["email"]
pTags[8].textContent = siteContent["footer"]["copyright"]