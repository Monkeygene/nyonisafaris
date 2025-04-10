console.log('scripts.js loaded');

document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
      // Instead of adding 'hidden', reset the translate classes to hide the menu.
      menu.classList.remove("translate-x-0");
      menu.classList.add("translate-x-full");
      icon.setAttribute('aria-expanded', 'false');
  }
});


function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("hamburger-icon");
  const isHidden = menu.classList.contains("translate-x-full");
  
  // Toggle between off-screen (translate-x-full) and onscreen (translate-x-0)
  if (isHidden) {
    menu.classList.remove("translate-x-full");
    menu.classList.add("translate-x-0");
    icon.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    icon.setAttribute('aria-expanded', 'false');
  }
}

// resize nav

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('translate-x-full');
}

// JavaScript to filter blog cards based on the selected pill
const pills = document.querySelectorAll('.pill');
const blogCards = document.querySelectorAll('.blog-card');

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    // Remove active styling from all pills
    pills.forEach(p => {
      p.classList.remove('bg-red-700', 'text-white');
      p.classList.add('bg-gray-200', 'text-gray-800');
    });
    // Apply active styling to the clicked pill
    pill.classList.remove('bg-gray-200', 'text-gray-800');
    pill.classList.add('bg-red-700', 'text-white');

    // Get the filter category from the clicked pill
    const filter = pill.getAttribute('data-filter');

    // Show/hide blog cards based on the filter
    blogCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
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




