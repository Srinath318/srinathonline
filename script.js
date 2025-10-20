let container = document.querySelector(".container");
let loader = document.querySelector(".loader");
const button = document.querySelector("button");
const input = document.querySelector("input");
const typewriter = document.getElementById("typewriter");
const text = "Srinath";
let index = 0;

window.onload = () => {
  // Show loader for 2 seconds
  setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "block";

    // Start typewriter after loader disappears
    type();
  }, 2000);

  // Button click
  button.addEventListener("click", () => {
    let value = input.value.trim().toLowerCase();
    if (value === "show portfolio") {
      input.value = "";
      window.location.href = "portfolio/portfolio.html";
    } else {
      alert(
        "Type 'show portfolio' in the search bar and click the Search button."
      );
    }
  });

  // Enter key triggers search
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      button.click();
    }
  });
};

// Typewriter function
function type() {
  if (index < text.length) {
    typewriter.innerHTML += text[index];
    index++;
    setTimeout(type, 200); // typing speed
  }
}
