const superhero = require('superheroes');

console.log(superhero.randomSuperhero());
const fs = require('fs');
fs.writeFile('file.txt', " hello  world " , (err) => {
    if (err) throw err;});
fs.readFile('file.txt', 'utf8', (err, data) => {      
    if (err) throw err;
    console.log(data);
});
fs.appendFile('file.txt', ' yosef admoni', (err) => {  
    if (err) throw err;
    console.log('The file has been updated!');
});
fs.unlink('file.txt', (err) => {  
    if (err) throw err;
    console.log('file deleted');
});
fs.rename('file.txt', 'newFile.txt', (err) => {
    if (err) throw err;
    console.log('file renamed');
} );


fs.writeFileSync('file.txt', " hello  world " );
fs.readFileSync('file.txt', 'utf8');
fs.appendFileSync('file.txt', ' hello world');

