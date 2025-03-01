const courseModal = document.getElementById("courseModal");

courseModal.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const courseKey = button.getAttribute("data-course");
  const courseData = courseContent[courseKey];
  const modalTitle = courseModal.querySelector(".modal-title");
  const modalDescription = courseModal.querySelector("#courseDescription");
  const modalEligibility = courseModal.querySelector("#courseEligibility");
  modalTitle.textContent = courseData.title;
  modalDescription.textContent = courseData.description;
  modalEligibility.textContent = courseData.eligibility;
});


document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    accordionItem.classList.toggle("active");
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });
  });
});


// Define configuration for scrollable containers
const scrollableContainers = [
  {
    container: "degree-cards",
    leftButton: "back-btn",
    rightButton: "next-btn",
    scrollDistance: 300,
    enableDrag: false,
  },
  {
    container: "features-container",
    enableDrag: false,
  },
  {
    container: "top-recruit-logo-container",
    enableDrag: false,
  },
];

// Initialize scroll functionality for all containers
function initializeScrolling() {
  scrollableContainers.forEach((config) => {
    const container = document.getElementsByClassName(config.container)[0];

    // Initialize button controls if specified
    if (config.leftButton && config.rightButton) {
      initializeButtonControls(
        container,
        document.getElementsByClassName(config.leftButton)[0],
        document.getElementsByClassName(config.rightButton)[0],
        config.scrollDistance
      );
    }

    // Initialize drag scrolling if enabled
    if (config.enableDrag) {
      initializeDragScroll(container);
    }
  });
}

// Button controls initialization
function initializeButtonControls(
  container,
  leftBtn,
  rightBtn,
  scrollDistance
) {
  const scrollOptions = {
    behavior: "smooth",
  };

  leftBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollDistance,
      ...scrollOptions,
    });
  });

  rightBtn.addEventListener("click", () => {
    container.scrollBy({
      left: scrollDistance,
      ...scrollOptions,
    });
  });
}


document.addEventListener("DOMContentLoaded", function() {
  var card1 = document.getElementById("cards-1");
  var cardIds = ["cards-2", "cards-3", "cards-4"];
  function removeActive() {
      card1.classList.remove("active");
  }
  function addActive() {
      card1.classList.add("active");
  }
  cardIds.forEach(function(cardId) {
      var card = document.getElementById(cardId);
      card.addEventListener("mouseenter", removeActive);
      card.addEventListener("mouseleave", addActive);
  });
});

initializeScrolling()