function successSubmit(event) {
    document.getElementById("success").style.display = "flex";
    document.getElementById("forms").reset();
    event.preventDefault();
}

const form = document.getElementById("forms");
form.addEventListener("submit", successSubmit);

document.getElementById("success-close").addEventListener("click", close);

function close() {
  document.getElementById("success").style.display = "none";
}