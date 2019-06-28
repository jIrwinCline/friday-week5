import { Person } from './../src/solar-calc.js';

describe('Person', function () {
  const user = new Person('Jake', 'male', 'February 26, 1995')

  it('should test whether input determines the correct age', function () {
    user.calcAge()
    expect(user.age).toEqual(24);
  });

  it('should test whether the mercury age calculator increases the input age to ~4.16%', function () {
    user.calcMercury();
    expect(user.newAge).toEqual(user.age / .24);
  });

  it('should test whether the venus age calculator increase the input age to 1.6%%', function () {
    user.calcVenus();
    expect(user.newAge).toEqual(user.age / .62);



    });
  it('should test whether the mars age calculator decrease the input age to 53.19%', function () {
    user.calcMars();
    expect(user.newAge).toEqual(user.age / 1.88);



    });
  it('should test whether the Jupiter age calculator decrease the input age to 8.4%', function () {
    user.calcJupiter();
    expect(user.newAge).toEqual(user.age / 11.86);



    });

  it('should test if the life expectancy is set correctly by the users gender', function () {
    user.calcLifeExpectancy();
    expect(user.lifeExpectancy).toEqual(72);


    });

  it('should test if the years till they hit life expectancy will display properly and change for each planets years', function () {
    // user.calcMercury()
    // expect(user.newLifeExpectancy).toEqual(user.lifeExpectancy / .24);
    // user.calcVenus()
    // expect(user.newLifeExpectancy).toEqual(user.lifeExpectancy / .62);
    // user.calcMars()
    // expect(user.newLifeExpectancy).toEqual(user.lifeExpectancy / 1.88);
    // user.calcJupiter()
    // expect(user.newLifeExpectancy).toEqual(user.lifeExpectancy / 11.86);



    });
  it('should test if the the output informs users how many years past the life expectancy they have lived', function () {
    // expect().toEqual();



    });


});
