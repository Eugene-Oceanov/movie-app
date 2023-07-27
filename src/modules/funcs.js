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

}