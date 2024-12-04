var modal = document.getElementById("modal");
var infoButton = document.getElementById("info-button");
var closeModal = document.getElementById("close-modal");

infoButton.onclick = function() {
  modal.style.display = "block";
};

closeModal.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
