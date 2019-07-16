// PROBLEM: Implement methods to track the max, min, mean, and mode
// Optimize for space and time. Favor speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode() over speeding up the insert() method.
// get_mean() should return a float, but the rest of the getter methods can return integers. Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.
// If there is more than one mode, return any of the modes.

// APPROACH: use an ahead of time approach, keep track of everything in the constructor and use the insert method to do all the calculations. each of the other methods can simply get the values now without doing any calculations
// TIME: O(1) time for each method
// SPACE: O(1) if we had make the allTemperatureRecordings into an array with a bounded size (this array's size is bounded by our range of possible temps, in this case 0-110))

 // if we should prefer a just-in-time approach or an ahead-of-time approach is a nuanced question. Ultimately it comes down to your usage patterns. Do you expect to get more inserts than gets? Do slow inserts have a stronger negative effect on users than slow gets?

class TempTracker {
  constructor() {
    this.allTemperatureRecordings = {}; // alternative is making an array with a bounded size such as that of the below
    // this.occurrences = new Array(111).fill(0); // Array of 0s at indices 0..110
    this.numTemperatureRecordings = 0;
    this.min = Infinity;
    this.max = -Infinity;
    this.temperatureSum = 0;
    this.mode = {temperature: null, numTimes: 0}
  }

  insert(temperature) {
    this.numTemperatureRecordings++;
    this.temperatureSum += temperature;

    if (this.allTemperatureRecordings.hasOwnProperty(temperature)) {
      this.allTemperatureRecordings[temperature] ++;
      if (this.allTemperatureRecordings[temperature] > this.mode.numTimes) {
        this.mode.temperature = temperature;
        this.mode.numTimes = this.allTemperatureRecordings[temperature];
      } 
    } else {
      this.allTemperatureRecordings[temperature] = 1;
      if (this.allTemperatureRecordings[temperature] > this.mode.numTimes) {
        this.mode.temperature = temperature;
        this.mode.numTimes = 1;
      } 
    }

    if (temperature < this.min) {
      this.min = temperature;
    }
    if (temperature > this.max) {
      this.max = temperature;
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.temperatureSum / this.numTemperatureRecordings;
  }

  getMode() {
    return this.mode.temperature;
  }
}



// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
