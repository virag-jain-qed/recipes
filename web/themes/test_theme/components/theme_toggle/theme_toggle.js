// ;((Drupal) => {
//   Drupal.behaviors.themeToggle = {
//     attach: (context, settings) => {
//       console.log('themeToggle');
//       const toggleButton = context.querySelector(".theme-toggle-button")
//       if (!toggleButton) return

//       // Initialize theme from localStorage or system preference
//       const savedTheme = localStorage.getItem("theme")
//       const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

//       let currentTheme = "light"
//       if (savedTheme) {
//         currentTheme = savedTheme
//       } else if (systemPrefersDark) {
//         currentTheme = "dark"
//       }

//       // Apply initial theme
//       if (currentTheme === "dark") {
//         document.documentElement.classList.add("dark")
//         toggleButton.setAttribute("aria-checked", "true")
//       } else {
//         document.documentElement.classList.remove("dark")
//         toggleButton.setAttribute("aria-checked", "false")
//       }

//       // Update toggle appearance
//       updateToggleAppearance(toggleButton, currentTheme)

//       // Add event listener
//       toggleButton.addEventListener("click", () => {
//         currentTheme = currentTheme === "light" ? "dark" : "light"

//         if (currentTheme === "dark") {
//           document.documentElement.classList.add("dark")
//           toggleButton.setAttribute("aria-checked", "true")
//         } else {
//           document.documentElement.classList.remove("dark")
//           toggleButton.setAttribute("aria-checked", "false")
//         }

//         localStorage.setItem("theme", currentTheme)
//         updateToggleAppearance(toggleButton, currentTheme)
//       })
//     },
//   }

//   function updateToggleAppearance(button, theme) {
//     const toggleCircle = button.querySelector(".toggle-circle")
//     const sunIcon = button.querySelector(".sun-icon")
//     const moonIcon = button.querySelector(".moon-icon")

//     if (theme === "dark") {
//       toggleCircle.classList.add("translate-x-6")
//       toggleCircle.classList.remove("translate-x-0")
//       sunIcon.classList.add("hidden")
//       moonIcon.classList.remove("hidden")
//     } else {
//       toggleCircle.classList.remove("translate-x-6")
//       toggleCircle.classList.add("translate-x-0")
//       sunIcon.classList.remove("hidden")
//       moonIcon.classList.add("hidden")
//     }
//   }
// })(Drupal)

(function (Drupal) {
  Drupal.behaviors.themeToggle = {
    attach: (context, settings) => {
      console.log("Theme Toggle Script Loaded");

      // Select the toggle button
      const toggleButton = document.querySelector(".theme-toggle-button");
      if (!toggleButton) return;

      // Toggle dark mode
      toggleButton.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        console.log("Toggled dark mode");
      });
    }
  };
})(Drupal);


