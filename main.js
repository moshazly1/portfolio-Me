// imge veuo
const clickableDiv = document.getElementsByClassName("profile");
const overlay = document.getElementsByClassName("overlay");
const imageContainer = document.getElementsByClassName("profile_img");
const image = document.getElementsByClassName("image");

for (let i = 0; i < clickableDiv.length; i++) {
  clickableDiv[i].addEventListener("click", function () {
    // Set corresponding image container and image style
    imageContainer[i].style.position = "fixed";
    imageContainer[i].style.top = "50%";
    imageContainer[i].style.left = "50%";
    imageContainer[i].style.transform = "translate(-50%, -50%)";
    overlay[i].style.display = "block";
    image[i].style.width = "500px";
    image[i].style.height = "500px";
    image[i].style.borderRadius = "0%";
  });
}
for (let j = 0; j < overlay.length; j++) {
  overlay[j].addEventListener("click", function () {
    imageContainer[j].style.display = "none";
    overlay[j].style.display = "none";
    window.location.reload();
  });
}
