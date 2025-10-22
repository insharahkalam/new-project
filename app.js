const images = document.querySelectorAll(".images");

function getResponsiveWidth() {
  if (window.innerWidth <= 480) return "370px"; // mobile
  if (window.innerWidth <= 768) return "460px"; // tablet
  return "600px"; // desktop
}

function getResponsiveSmallWidth() {
  if (window.innerWidth <= 480) return "60px";
  if (window.innerWidth <= 768) return "70px";
  return "80px";
}

images.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.width = getResponsiveWidth();
  });

  img.addEventListener("mouseout", () => {
    img.style.width = getResponsiveSmallWidth();
  });
});

// optional: adjust instantly when resizing screen
window.addEventListener("resize", () => {
  images.forEach((img) => {
    img.style.width = getResponsiveSmallWidth();
  });
});
