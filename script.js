const projects = [
  {
    title: "Keychains (E-Commerce)",
    description:
      "An e-commerce website that integrates PayPal for secure transactions, using React + Vite.",
    link: "https://github.com/tm-LBenson/keychains-by-bogy",
  },
  {
    title: "Tune Port",
    description:
      "A web app tailored for Spotify Premium users, officially approved by Spotify for unlimited production.",
    link: "https://github.com/Wrapped-Portal/wrapped-portal-client",
  },
  {
    title: "YelpCamp",
    description:
      "A full-stack platform for campground enthusiasts to review and share locations globally.",
    link: "https://github.com/tm-LBenson/yelpCamp",
  },
];

let projectsVisible = false;

const projectsContainer = document.getElementById("projectsContainer");
const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
const aboutBtn = document.getElementById("aboutBtn");

if (toggleProjectsBtn) {
  toggleProjectsBtn.addEventListener("click", function () {
    projectsVisible = !projectsVisible;
    if (projectsVisible) {
      toggleProjectsBtn.textContent = "Hide Projects";
      renderProjects();
    } else {
      toggleProjectsBtn.textContent = "Show Projects";
      projectsContainer.innerHTML = "";
    }
  });
}

if (aboutBtn) {
  aboutBtn.addEventListener("click", function () {
    alert("Thanks for checking out my About Me section!");
  });
}

const contactForm = document.getElementById("contactForm");
const resetBtn = document.getElementById("resetBtn");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted! I'll get back to you soon.");
    contactForm.reset();
  });
}

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    contactForm.reset();
  });
}

function renderProjects() {
  projectsContainer.innerHTML = "";
  projects.forEach((project) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-md-4", "mb-3");

    colDiv.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <a href="${project.link}" class="btn btn-outline-primary" target="_blank">
            View Project
          </a>
        </div>
      </div>
    `;

    projectsContainer.appendChild(colDiv);
  });
}
