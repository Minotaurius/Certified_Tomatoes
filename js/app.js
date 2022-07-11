//     fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_lfgodn81")
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// };
// omdbData();

var chosenMovie;
fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_lfgodn81")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
            var array = data.items;
            var rand = array[Math.floor(Math.random() * data.items.length)];
            var chosenMovie = rand.id;
            console.log(chosenMovie);

            fetch(`https://imdb-api.com/en/API/Posters/k_lfgodn81/${chosenMovie}`)
            .then(function (res) {
                return res.json();
              })
              .then(function (data) {
                  console.log(data.posters[0]);

              })





        })
        .catch(function (err) {
          console.error(err);
        });