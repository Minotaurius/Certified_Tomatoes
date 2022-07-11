
var chosenMovie;
var chosenRating;
fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_fz44i7xl")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
            var array = data.items;
            var rand = array[Math.floor(Math.random() * data.items.length)];
            var chosenMovie = rand.id;
            console.log(chosenMovie);

            fetch(`https://imdb-api.com/en/API/Posters/k_fz44i7xl/${chosenMovie}`)
            .then(function (res) {
                return res.json();
              })
              .then(function (data) {
                var chosenPoster = data.posters[0]
                $('.movie-display').attr('src', chosenPoster.link);
                  console.log(chosenPoster);
                  
              fetch(`https://imdb-api.com/en/API/MetacriticReviews/k_fz44i7xl/${chosenMovie}`)
              .then(function (res) {
                  return res.json();
                })
                .then(function (data) {
                  var chosenReview = data.items[0].content
                  $('.review-container').text(chosenReview);
                    console.log(chosenReview);
                    


                    fetch(`https://imdb-api.com/en/API/Ratings/k_fz44i7xl/${chosenMovie}`)
              .then(function (res) {
                  return res.json();
                })
                .then(function (data) {
                  chosenRating = data.rottenTomatoes
                    console.log(chosenRating);
  
                })
  
                })

              })




        })
        .catch(function (err) {
          console.error(err);
        });
