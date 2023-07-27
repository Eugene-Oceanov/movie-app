module.exports = {

    key: "0671348c-75fc-4bb2-b78f-d1547ea03eb9",

    byIDurl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}` },

    pop100url: "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",

    top250url: "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1",

    awaiFilmsUrl: "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1",

    searchFilmUrl: "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=1",

    actorsUrl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${id}` },

    similarFilmsUrl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars` },

    sequelsUrl: function (id) { return `https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}/sequels_and_prequels` },

    reviewsUrl: function (id, page) { return `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/reviews?page=${page}&order=DATE_DESC` },

}