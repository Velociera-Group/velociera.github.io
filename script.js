function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function updateHumusYear() {
    const humusElement = document.getElementById("humus");
    if (humusElement) {
        humusElement.innerText = `© ${new Date().getFullYear()} Velociera Group.`;
    }
}
// Ensure the function runs every time the page loads
document.addEventListener("DOMContentLoaded", updateHumusYear);

function disableRightClick(event) {
    if (event.button == 2) {
      event.preventDefault(); // Prevent the default right-click behavior
      return false;
    }
  }
