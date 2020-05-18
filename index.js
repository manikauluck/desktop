$(document).ready(async () => {
    let worldStats = await fetchWorldWideData();
    setTimeout(async() => {
        let indianStats = await fetchIndianStatistics()
    }, 2000
    )

    if (!worldStats) {
        console.log("Looks like there is no data!");
    } else {
        console.log(worldStats)
        document.getElementById("total-cases").innerHTML = worldStats.world_total.total_cases;
        document.getElementById("total-deaths").innerHTML = worldStats.world_total.total_deaths;
        document.getElementById("total-recovered").innerHTML = worldStats.world_total.total_recovered;
        document.getElementById("new-cases").innerHTML = worldStats.world_total.new_cases;
    }
});


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
            .done((data) => {
                // console.log("DATA --",data)
                resolve(data);
            })
            .fail((err) => {
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
            .done((data) => {
                console.log(data);
            })
            .fail((err) => {
                console.log(err);
            })
    })
};
