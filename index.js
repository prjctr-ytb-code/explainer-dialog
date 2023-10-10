// elements
const openButtonEl = document.getElementById("open-button");
const closeButtonEl = document.getElementById("close-button");
const dialogEl = document.getElementById("dialog");
const dialogContentEl = document.getElementById("dialog-content");

// open the dialog
function handleOpenButtonClick(event) {
  event.stopPropagation();

  if (!dialogEl) {
    return;
  }

  dialogEl.showModal();
}

(function () {
  if (!openButtonEl) {
    return;
  }

  openButtonEl.addEventListener("click", handleOpenButtonClick);
})();

// close the dialog via button
function handleCloseButtonClick() {
  if (!dialogEl) {
    return;
  }

  dialogEl.close();
}

(function () {
  if (!closeButtonEl) {
    return;
  }

  closeButtonEl.addEventListener("click", handleCloseButtonClick);
})();

// close the dialog on the overlay click
function handleWindowClick(event) {
  if (!dialogEl || !dialogEl.open) {
    return;
  }

  const wasOverlayClicked =
    event.target !== dialogContentEl && !dialogContentEl.contains(event.target);

  if (!wasOverlayClicked) {
    return;
  }

  dialogEl.close();
}

window.addEventListener("click", handleWindowClick);
