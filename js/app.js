const omdbData = () => {
    fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_lfgodn81")
    .then((data) => data.json())
    .then((data) => console.log(data));



};

omdbData();