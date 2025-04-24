const toggleEl = (el, show) => {
  el.classList.toggle('hidden', !show);
  el.classList.toggle('translate-x-full', !show);
  el.classList.toggle('translate-x-0', show);
};

const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('nav-toggle');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const mobileClose = document.getElementById('mobile-close');
const toursBtn = document.getElementById('mobile-tours-btn');
const toursList = document.getElementById('mobile-tours');

const openMenu = () => {
  toggleEl(mobileMenu, true);
  iconOpen.classList.add('hidden'); iconClose.classList.remove('hidden');
  btn.setAttribute('aria-expanded', 'true');
};
const closeMenu = () => {
  toggleEl(mobileMenu, false);
  iconClose.classList.add('hidden'); iconOpen.classList.remove('hidden');
  btn.setAttribute('aria-expanded', 'false');
};
btn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('translate-x-0');
  isOpen ? closeMenu() : openMenu();
});
mobileClose.addEventListener('click', closeMenu);
toursBtn.addEventListener('click', () => {
  const visible = !toursList.classList.contains('hidden');
  toursList.classList.toggle('hidden', visible);
  toursBtn.setAttribute('aria-expanded', String(!visible));
});

// JavaScript to filter blog cards based on the selected pill
const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.blog-card');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    const filter = pill.dataset.filter;

    // toggle active pill styling
    pills.forEach(p => {
      p.classList.toggle('bg-red-700', p === pill);
      p.classList.toggle('text-white', p === pill);
      p.classList.toggle('bg-gray-200', p !== pill);
      p.classList.toggle('text-gray-800', p !== pill);
    });

    // show/hide cards
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Select modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

// Attach click event to each image link
document.querySelectorAll('.open-modal').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const imgSrc = this.getAttribute('href');
    modalImg.src = imgSrc; // Set the modal image source
    modal.classList.remove('hidden'); // Show modal
  });
});

// Close modal when clicking on the close button
modalClose.addEventListener('click', function() {
  modal.classList.add('hidden');
});

// Also close modal when clicking outside the image
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// FAQ Accordion 

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        const panel = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        // Close all other panels first
        document.querySelectorAll(".panel").forEach((item) => {
            if (item !== panel) {
                item.style.maxHeight = null;
                item.classList.remove("py-3");
                item.previousElementSibling.querySelector(".icon").innerText = "+";
            }
        });

        // Toggle current panel
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("py-3");
            icon.innerText = "+";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("py-3");
            icon.innerText = "-";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  // Array of image paths – add as many images as you like.
  const images = [
    "assets/images/header-images/red-chested-cuckoo-in-dense-woodland.jpg",
    "assets/images/header-images/red-chested-cuckoo-perched-on-broken-tree.jpg",
    "assets/images/header-images/red-chested-cuckoo-side-view.jpg",
    "assets/images/header-images/red-chested-cuckoo-perched-perfectly.jpg",
    // Add additional image paths here…
  ];

  // Get reference to the image element using its ID.
  const headerImage = document.getElementById("headerImage");

  // Function to update the image
  function updateImage() {
    // Select a random index from the images array
    const randomIndex = Math.floor(Math.random() * images.length);
    headerImage.src = images[randomIndex];
    console.log("Image updated to:", images[randomIndex]);
  }
  
  // Immediately update the image on page load (optional testing step)
  updateImage();

  // Set an interval to update the image every hour (3600000 milliseconds)
  setInterval(updateImage, 3600000);
});




