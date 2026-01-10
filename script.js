// Toggle mobile menu
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Sanity connection
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'YOUR_PROJECT_ID', // Replace with your Sanity Project ID
  dataset: 'production',
  useCdn: true
});

// Fetch products for home page categories
const categories = ['necklaces', 'bangles', 'earrings', 'statement'];
categories.forEach(cat => {
    client.fetch(`*[_type == "products" && category == "${cat}"]`).then(products => {
        const container = document.getElementById(`products-${cat}`);
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product-card';
            div.innerHTML = `
                <img src="${product.image.asset.url}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
            `;
            container.appendChild(div);
        });
    });
});

// Fetch all products for shop page
const allProductsContainer = document.getElementById('all-products');
if(allProductsContainer){
    client.fetch(`*[_type == "products"]`).then(products => {
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product-card';
            div.innerHTML = `
                <img src="${product.image.asset.url}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.price}</p>
                <p>${product.description}</p>
            `;
            allProductsContainer.appendChild(div);
        });
    });
}

// Fetch events
const eventsContainer = document.getElementById('events-list');
if(eventsContainer){
    client.fetch(`*[_type == "events"]`).then(events => {
        events.forEach(event => {
            const div = document.createElement('div');
            div.className = 'event-card';
            div.innerHTML = `
                <h4>${event.title}</h4>
                <p>${event.date}</p>
                <p>${event.description}</p>
            `;
            eventsContainer.appendChild(div);
        });
    });
}
