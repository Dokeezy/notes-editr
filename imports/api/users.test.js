import expect from "expect";
import {Meteor} from "meteor/meteor";
import { validateNewUser } from './users';


if (Meteor.isServer) {
  describe('users', function () {
    it('should allow email', function () {
      const testUser = {
        emails: [
          {
            address: 'test@example.com'
          }
        ]
      };
      const res = validateNewUser(testUser);

      expect(res).toBe(true);
    });
  });
}


const add = (a, b) => a + b;

const square = (a) => a * a;

describe('add', function () {
  it('should add two number', function () {
    const res = add(11, 9);

    expect(res).toBe(20);
  });
});



it('should fail', function () {
  throw new Error('Just because I said so');
});

it('should square a number', function () {
  const res = square(11);

  if(res !== 121) {
    throw new Error("Did not square number !");
  }
})
