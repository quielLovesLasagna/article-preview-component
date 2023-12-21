"use strict";

// Element/s
const shareIconContainer = document.querySelector(".share-icon-container");
const shareIcon = document.querySelector(".share-icon");
const shareSocialMedia = document.querySelector(".share-social-media");

// Event Listener/s
shareIconContainer.addEventListener("click", function () {
	shareIconContainer.classList.toggle("active");
	shareIcon.classList.toggle("active");
	shareSocialMedia.classList.toggle("hidden");
});
