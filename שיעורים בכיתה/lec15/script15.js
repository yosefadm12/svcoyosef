
const db = require('mongoose')

db.connect('mongodb+srv://yosefadmoni:passofVs@finalprojectserver.m1zmh.mongodb.net/')
  .then(() => {
    console.log('MongoDB connected');
    return Car.countDocuments();
  })
  .then(count => {
    if (count === 0) {
      return Car.insertMany([
        { carNumber: '1234567', model: 'Toyota Corolla', year: 2021, color: 'black' },
        { carNumber: '2345678', model: 'Mazda 3',      year: 2019, color: 'white' },
        { carNumber: '3456789', model: 'Hyundai i20',  year: 2022, color: 'black' }
      ]);
    }
  })
  .then(() => Car.find({ color: 'black' }))
  .then(blackCars => {
    console.log('רכבים בצבע שחור:', blackCars);
    return Car.find({ year: { $gte: 2020 } });
  })
  .then(newCars => {
    console.log('רכבים משנת 2020 ומעלה:', newCars);
    return Car.find({ color: 'black', year: { $gte: 2020 } });
  })
  .then(blackAndNew => {
    console.log('רכבים גם שחורים וגם חדשים:', blackAndNew);
  })
  .catch(err => {
    console.error('שגיאה:', err.message);
  })
  .finally(() => {
    mongoose.disconnect().then(() => {
      console.log('החיבור נסגר');
    });
  });

const carSchema = new mongoose.Schema({
  carNumber: { type: String, required: true, unique: true },
  model:     { type: String, required: true },
  year:      { type: Number, required: true },
  color:     { type: String, required: true }
}, { collection: 'Cars' });

const Car = mongoose.model('Car', carSchema);
