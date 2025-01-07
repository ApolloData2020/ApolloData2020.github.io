// Example: Set current year in the footer
document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
  
  // Add any interactive JavaScript or animations here!