const db = require('mongoose')

db.connect('mongodb://localhost:27017/lectures/')
.then(() => {
  console.log('db is connected!');  

})
.catch((err) => {
  console.error('db connection error:', err);
});
const newMovie = new Movie({
  title: "Traffic in Souls",
  year: 1913,
  director: "George Loane Tucker",
  actors: ["Jane Doe", "John Smith"],
  rating: 6,
  genres: ["Drama", "Crime"],
  reviews: [
    {
      user: "Reviewer1",
      comment: "Old but gold!",
      rating: 7
    }
  ]
});
