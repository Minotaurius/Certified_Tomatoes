var chosenMovie;
var chosenRating;
var score = 0;


function newMovie(){
fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_gg2341wi")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
            var array = data.items;
            var rand = array[Math.floor(Math.random() * data.items.length)];
            var chosenMovie = rand.id;
            if(!chosenMovie){
              return newMovie() 
            }
            console.log(chosenMovie);
            fetch(`https://imdb-api.com/en/API/Posters/k_gg2341wi/${chosenMovie}`)
            .then(function (res) {
                return res.json();
              })
              .then(function (data) {
                var chosenPoster = data.posters[0]
                // check if undefined ... newmovie
                if(!chosenPoster){
                  return newMovie()
                }
                $('.movie-display').attr('src', chosenPoster.link);
                  console.log(chosenPoster);
              fetch(`https://imdb-api.com/en/API/MetacriticReviews/k_gg2341wi/${chosenMovie}`)
              .then(function (res) {
                  return res.json();
                })
                .then(function (data) {
                  var chosenReview = data.items[0].content
                  if(!chosenPoster){
                  return newMovie() 
                }
                  $('.review-container').text(chosenReview);
                    console.log(chosenReview);
                    fetch(`https://imdb-api.com/en/API/Ratings/k_gg2341wi/${chosenMovie}`)
              .then(function (res) {
                  return res.json();
                })
                .then(function (data) {
                  movieRating = data.rottenTomatoes
                    console.log(movieRating);
                })
                })
              })
        })
        .catch(function (err) {
          console.error(err);
        });
      }
newMovie()

$(".button").each(function(){
  $(this).click(function(event){
      if(movieRating >= event.target.dataset.min && movieRating <= event.target.dataset.max){
        // score++;
        // giphy stuff 2 
        // giphyfunction()
        

        newMovie()
      }
      // score local storage if (score > x save to highscore)
      // else 
      // game over giphy 
      // reset 
      console.log(this)
  })
})
