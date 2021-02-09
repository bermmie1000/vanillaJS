const form = document.querySelector("#greeting-form"),
    input = form.querySelector("input");

function init(event) {
    event.preventDefault();
    const name = input.value;
    form.addEventListener("submit", alert(`${name}`));
}

init();


