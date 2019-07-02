

// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  //console.log('line 7');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    //console.log('line 10')
    //console.log(data);
    if (!error) {
      //console.log('line 13')
      callback(data);
      //console.log('line 15')
    } else {
      callback(undefined);
    }
    //console.log('line 19');
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
  //console.log('line 23');
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', (bombay) => {
  console.log('Return Value: ', bombay) 
});
//console.log('line 30')

module.exports = breedDetailsFromFile;