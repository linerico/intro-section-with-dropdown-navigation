document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector(".dropdown-btn");
    const dropdownArrow = dropdown.querySelector(".dropdown-arrow");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    if (
      !dropdownMenu.contains(event.target) &&
      event.target !== dropdownButton
    ) {
      dropdownMenu.style.display = "none";
      if (dropdownArrow) {
        dropdownArrow.src = "../images/icon-arrow-down.svg";
      }
    } else {
      if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        if (dropdownArrow) {
          dropdownArrow.src = "../images/icon-arrow-down.svg";
        }
      } else {
        dropdownMenu.style.display = "block";
        if (dropdownArrow) {
          dropdownArrow.src = "../images/icon-arrow-up.svg";
        }
      }
    }
  });
});
