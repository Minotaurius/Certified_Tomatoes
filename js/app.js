
// first api k_lfgodn81
// second api k_gg2341wi


var chosenMovie;
fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_gg2341wi")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          // this is getting a random movie from an array of the top 200
            var array = data.items;
            var rand = array[Math.floor(Math.random() * data.items.length)];
            // rand.id, id is the imdb number iniside the object.. inside the array
            var chosenMovie = rand.id;
            console.log(chosenMovie);
          // this is fetching the api. the chosenMovie variable is set the the random idmb ID which is required in the api link
            fetch(`https://imdb-api.com/en/API/Posters/k_gg2341wi/${chosenMovie}`)
            .then(function (res) {
                return res.json();
              })
              .then(function (data) {
                // this is console logging the first poster in the array of posters.... the first poster is the best poster 
                var chosenPoster = data.posters[0];
                  console.log(chosenPoster);
                  $('.movie-display').attr('src', chosenPoster.link);

                  fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_gg2341wi")
                  .then(function (res) {
                    return res.json();
                  })
                  .then(function (data) {

                    
              })





        })
        .catch(function (err) {
          console.error(err);
        });