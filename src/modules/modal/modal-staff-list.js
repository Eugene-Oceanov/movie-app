const funcs = require("../funcs.js");
const API = require("../API.js");

function staffCardLayout(item) {
    const actorCard = document.createElement("DIV");
    actorCard.classList.add("modal-staff__item");
    actorCard.innerHTML = `<img src="${item.posterUrl} alt="${item.nameEn}">
                            <div class="modal-staff__item--text">
                                ${item.nameRu ? `<p>${item.nameRu}</p>` : `<p>${item.nameEn}</p>`}
                                ${item.description ? `<p>${item.description}</p>` : ""}
                            </div>`;
    return actorCard;
}

module.exports = {
    staffList: function (item) {
        const staffList = document.createElement("DIV");
        funcs.getData(API.actorsUrl(item.kinopoiskId), API.key)
            .then(data => {
                staffList.classList.add("modal-heading__staff");
                data.forEach(item => {
                    if (item.professionKey === "ACTOR") staffList.append(staffCardLayout(item));
                })
            })
        return staffList;
    }
}

/*
description:"J. Robert Oppenheimer"
nameEn:"Cillian Murphy"
nameRu:"Киллиан Мерфи"
posterUrl:"https://kinopoiskapiunofficial.tech/images/actor_posters/kp/5005.jpg"
professionKey:"ACTOR"
professionText:"Актеры"
staffId:5005
console
*/