document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const menu = toggle.nextElementSibling;
      const isOpen = menu.style.display === "block";
      closeAllDropdowns();
      if (!isOpen) {
        menu.style.display = "block";
      }
    });
  });

  function closeAllDropdowns() {
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");
    dropdownMenus.forEach((menu) => {
      menu.style.display = "none";
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      closeAllDropdowns();
    }
  });

  const addArticleButton = document.querySelector(".add-article-button");
  const newArticleForm = document.querySelector(".new-article-form");
  addArticleButton.addEventListener("click", () => {
    newArticleForm.style.display =
      newArticleForm.style.display === "block" ? "none" : "block";
  });

  const saveArticleButton = document.querySelector(".save-article-button");
  saveArticleButton.addEventListener("click", () => {
    const title = document.querySelector(".article-title").value;
    const date = document.querySelector(".article-date").value;
    const status = document.querySelector(".article-status").value;
    const link = document.querySelector(".article-link").value;

    if (title && date && status && link) {
      const tableBody = document.querySelector("#articles-table-body");
      const newRow = document.createElement("tr");

      const titleCell = document.createElement("td");
      const titleLink = document.createElement("a");
      titleLink.href = link;
      titleLink.textContent = title;
      titleCell.appendChild(titleLink);

      const dateCell = document.createElement("td");
      dateCell.textContent = date;

      const statusCell = document.createElement("td");
      const statusSpan = document.createElement("span");
      statusSpan.classList.add(`status-${status.toLowerCase()}`);
      statusSpan.textContent = status.toUpperCase();
      statusCell.appendChild(statusSpan);

      newRow.appendChild(titleCell);
      newRow.appendChild(dateCell);
      newRow.appendChild(statusCell);

      tableBody.appendChild(newRow);

      // Clear the form
      document.querySelector(".article-title").value = "";
      document.querySelector(".article-date").value = "";
      document.querySelector(".article-status").value = "open";
      document.querySelector(".article-link").value = "";
      newArticleForm.style.display = "none";
    }
  });
});
