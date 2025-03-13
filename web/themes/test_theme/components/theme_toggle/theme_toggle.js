/**
 * @file
 * Theme toggle functionality.
 */

// Import necessary modules.  This assumes Drupal is available globally, otherwise adjust as needed.
;((Drupal, once) => {
  Drupal.behaviors.themeToggle = {
    attach: (context, settings) => {
      const themeToggleBtn = once("theme-toggle", "#theme-toggle", context)

      if (themeToggleBtn.length) {
        const toggleBtn = themeToggleBtn[0]
        const htmlElement = document.documentElement
        const currentTheme = localStorage.getItem("theme")

        // Set initial theme based on:
        // 1. Previous user preference from localStorage
        // 2. System preference if no localStorage value
        // 3. Default to light if neither is available
        if (currentTheme) {
          htmlElement.classList.toggle("dark", currentTheme === "dark")
        } else {
          const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
          htmlElement.classList.toggle("dark", prefersDarkMode)
          localStorage.setItem("theme", prefersDarkMode ? "dark" : "light")
        }

        // Toggle theme when button is clicked
        toggleBtn.addEventListener("click", () => {
          // Add a subtle scale animation on click
          toggleBtn.classList.add("scale-95")
          setTimeout(() => {
            toggleBtn.classList.remove("scale-95")
          }, 100)

          // Toggle dark class
          htmlElement.classList.toggle("dark")

          // Store user preference
          const isDarkMode = htmlElement.classList.contains("dark")
          localStorage.setItem("theme", isDarkMode ? "dark" : "light")

          // Dispatch a custom event that other scripts can listen for
          const themeChangeEvent = new CustomEvent("themeChanged", {
            detail: { theme: isDarkMode ? "dark" : "light" },
          })
          document.dispatchEvent(themeChangeEvent)
        })

        // Listen for system preference changes
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
          if (localStorage.getItem("theme") === null) {
            htmlElement.classList.toggle("dark", e.matches)
          }
        })
      }
    },
  }
})(Drupal, once)

