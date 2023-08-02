module.exports = {

    helloWorld: function (hello) {
        console.log(hello);
    },

    getData: async function (url, key) {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "X-API-KEY": key,
                'Content-Type': 'application/json',
            }
        });
        let data = await response.json();
        return data;
    },

    ratingColor: function (value) {
        if (parseInt(value) >= 7 || parseInt(value) >= 70) return "rating--green";
        else if (parseInt(value) >= 4 || parseInt(value) >= 40) return "rating--orange";
        else return "rating--red";
    },

    reductionTitle: function (str) {
        return str.slice(0, 35) + "...";
    },

    reductionGenres: function (arr) {
        let genres = "";
        for (let i = 0; i < 3; i++) {
            genres += arr[i].genre;
            if (i != 2) genres += ", ";
        }
        return genres;
    }

}