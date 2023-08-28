// DOM elements
const form = document.querySelector(".subscription-form");
const emailInput = document.querySelector(".subscription__email-input");
const emailErrorLabel = document.querySelector(".email-error__label");
const subscriptionPage = document.querySelector(".subscription-page");
const successMessageContainer = document.querySelector(
  ".success-message__container"
);
const dismissMessageButton = document.querySelector(".dismiss-button");

const subscriptionEmailContainer = document.querySelector(
  ".subscription-email__container"
);
const overlaySpinnerContainer = document.querySelector(
  ".overlay-spinner-container"
);

// functions
function init() {
  emailInput.value = "";
  subscriptionPage.style.display = "grid";
  successMessageContainer.style.display = "none";
  overlaySpinnerContainer.style.display = "none";
  hideError();
}

function hideError() {
  emailErrorLabel.hidden = true;
  emailInput.classList.remove("subscription__email-input--error");
}

function showError() {
  emailErrorLabel.hidden = false;
  emailInput.classList.add("subscription__email-input--error");
}

function showSuccessMessage(validEmail) {
  subscriptionPage.style.display = "none";
  successMessageContainer.style.display = "flex";
  subscriptionEmailContainer.textContent = validEmail;
}

function getValidEmail() {
  let email = emailInput.value;
  let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(email)) {
    showError();
  } else {
    hideError();
    setTimeout(() => {
      showSuccessMessage(email);
    }, 1000);
    overlaySpinnerContainer.style.display = "grid";
  }
}

// eventListeners
form.addEventListener("submit", (event) => {
  event.preventDefault();
  getValidEmail();
});

dismissMessageButton.addEventListener("click", init);

// init
init();
