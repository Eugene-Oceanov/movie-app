module.exports = {
    getData: async (url, apiKey) => {
        let json = await fetch(url, {
            method: "GET",
            headers: {
                'X-API-KEY': apiKey,
                'Content-Type': 'application/json'
            }
        })
        let data = await json.json();
        return data;
    },

    closeModal: (node, modal) => {
        modal.remove();
        node.classList.remove("modal-block--show");
    },

    ratingColor: (value) => {
        if (value >= 7 || parseInt(value) > 70) return "green";
        else if (value >= 4 || parseInt(value) > 40) return "orange";
        else return "red";
    },

    isNull: (value) => {
        if (value == null || value == "" || value == undefined) return "Отсутствует";
        else return value;
    },

    modalRating: (value) => {
        if (value >= 7) return "green";
        else if (value >= 4) return "orange";
        else return "red";
    },

    stopScroll: (node) => node.classList.add("stop-scroll"),

    renderActors: (data) => {
        let actorsHtml = "";
        data.forEach(item => {
            if (item.professionKey == "ACTOR" && item.nameRu) {
                actorsHtml += `<div class="actor-card">
                                    <img src="${item.posterUrl}" alt="poster">
                                    <div class="actor-description">
                                        <h3 class="actor-name">${item.nameRu}</h3>
                                        <p class="actor-role">${item.description}</p>
                                    </div>
                                </div>`;
            }
        })
        return actorsHtml;
    },

    moveSlider: (parentNode, childNodeArr, counter, leftBtn, rightBtn) => {
        leftBtn.onclick = () => {
            counter--
            if (counter < 0) counter = childNodeArr.length - 5;
            parentNode.style.transform = `translate(-${childNodeArr[0].offsetWidth * counter}px)`;
        }
        rightBtn.onclick = () => {
            counter++
            if (counter >= childNodeArr.length - 5) counter = 0;
            parentNode.style.transform = `translate(-${childNodeArr[0].offsetWidth * counter}px)`;
        }
    },
}