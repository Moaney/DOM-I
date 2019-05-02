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

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])




const navitems = document.querySelectorAll('a');

console.log(navitems);

navitems[0].textContent = 'Services';

navitems[1].textContent = 'Product';

navitems[2].textContent = 'Vision';

navitems[3].textContent = 'Features';

navitems[4].textContent = 'About';

navitems[5].textContent = 'Contact';

const navArr = Array.from(navitems);
console.log(navArr);

navArr.forEach(item => {
  item.style.color = 'green';
});

const navbar = document.querySelector('a');

const moreNavItems = document.createElement('a');
moreNavItems.textContent = 'Story';
navbar.prepend(moreNavItems);

const newNavItem = document.createElement('a');
newNavItem.textContent = 'Info';
navbar.appendChild(newNavItem);


const ctah1 = document.querySelector('.cta-text h1');

console.log(ctah1);

ctah1.setAttribute('style', 'white-space: pre;');

ctah1.textContent = 'DOM \r\n';

ctah1.textContent += 'IS \r\n';

ctah1.textContent += 'AWESOME';


const button = document.querySelector('.cta-text button');

console.log(button);
    <button>​</button>​

button.textContent = 'Get Started';


const ctaImg = document.querySelector('#cta-img');

console.log(ctaImg);

ctaImg.src = ('img/header-img.png');

const h4Tags = document.querySelectorAll('.text-content h4');

console.log(h4Tags);

h4Tags[0].textContent = 'Features';

h4Tags[1].textContent = 'About';

h4Tags[2].textContent = 'Services';

h4Tags[3].textContent = 'Product';

h4Tags[4].textContent = 'Vision';

const pTags = document.querySelectorAll('.text-content p');

console.log(pTags);

pTags[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

pTags[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

pTags[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

pTags[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

pTags[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const middleImg = document.querySelector('#middle-img');

console.log(middleImg);

middleImg.src = 'img/mid-page-accent.jpg';


const lastH4 = document.querySelector('.contact h4');

console.log(lastH4);

lastH4.textContent = 'Contact';

const contactPTags = document.querySelectorAll('.contact p');

console.log(contactPTags);

contactPTags[0].textContent = '123 Way 456 Street \r\n';

contactPTags[0].textContent += 'Somewhere, USA \r\n';

contactPTags[0].setAttribute('style', 'white-space: pre;');

contactPTags[1].textContent = '1 (888) 888-8888';

contactPTags[2].textContent = 'sales@greatidea.io';

const footerPTag = document.querySelector('footer p');

console.log(footerPTag);

footerPTag.textContent = 'Copyright Great Idea! 2018';
