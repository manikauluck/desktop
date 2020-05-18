async function fetchWorldWideData() {
    return new Promise((resolve, reject) => {
        let options = {
            url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api",
            method: "GET",
            headers: {
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
                "x-rapidapi-key": "2ab09370e4msh40353385aba1d16p1fe890jsn1a9543773c62"
            }
        }
        $.ajax(options)
            .success((data) => {
                resolve(data);
            })
            .error((err) => {
                reject(err);
            })
    })
};

async function fetchIndianStatistics() {
    return new Promise((resolve, reject) => {
        let options = {
            url: "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india_timeline",
            method: "GET",
            headers: {
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
                "x-rapidapi-key": "2ab09370e4msh40353385aba1d16p1fe890jsn1a9543773c62"
            }
        }
        $.ajax(options)
            .success((data) => {
                console.log(data);
            })
            .error((err) => {
                console.log(err);
            })
    })
};

export {
    fetchWorldWideData,
    fetchIndianStatistics
}
