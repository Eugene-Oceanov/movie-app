const { getData } = require("../funcs.js");
const API = require("../API.js");
const modalLayout = require("./modal-layout.js")

function openModal(id) {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.add("modal-overlay__visible");

    modalOverlay.onclick = e => {
        if (e.target === modalOverlay) closeModal(e.target);
    }

    const url = API.byIDurl(id);
    getData(url, API.key)
        .then(data => modalOverlay.append(modal(data, id)))
        .catch(error => console.log(error))
}

function modal(item, id) {
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.append(modalLayout.modalHeading(item, id));
    return modal;
}

function closeModal(node) {
    node.classList.remove("modal-overlay__visible");
    node.innerHTML = "";
}

module.exports = { openModal }