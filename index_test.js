//import assert
const assert = require('assert');

//import rooster module
const Rooster = require('../index');

  describe('Rooster',() =>{
    // describe for announceDawn
  describe('.announceDawn', () =>{
    it('returns a rooster call', () =>{
        //setup
const expected = 'cock-a-doodle-doo!';
        //exercise
const actResult = Rooster.announceDawn();  
        //verify
  assert.equal(actResult, expected);
    });
// describe for .timeAtDawn
    describe('.timeAtDawn', ()=>{
      it('returns its argument as a string', ()=>{
          //setup
      const number = 11;
      const expected = '11';
          //exercise
      const actual = Rooster.timeAtDawn(number);
          //verify
    assert.strictEqual(expected, actual);
      });
  //throws error when hour less than 0.
      it('throws an error if passed a number less than 0', () =>{
        //setup
    const hour = -1;

       //verify
assert.throws(() => {Rooster.timeAtDawn(hour);
  },
  RangeError
);
      });
      //throws error when hour more than 23.
      it('throws an error if passed a number greater than 23', () =>{
        //setup
    const hour = 24;

       //exercise
        //verify
assert.throws(() => {Rooster.timeAtDawn(hour);
  },
  RangeError
);
      });
    });
  });
});