import { Person } from './../src/solar-calc.js';

describe('Person', function () {

  it('should test whether input determines the correct age', function () {
    const user = new Person('Jake', 'male', 'February 26, 1995')
    user.calcAge()
    expect(user.age).toEqual(21);
  });

  it('should test whether the mercury age calculator increases the input age to ~4.16%', function () {

  });

  it('should test whether the venus age calculator increase the input age to 1.6%%', function () {




    });
  it('should test whether the mars age calculator decrease the input age to 53.19%', function () {




    });
  it('should test whether the Jupiter age calculator decrease the input age to 8.4%', function () {




    });
  it('should test if the years till they hit life expectancy will display properly and change for each planets years', function () {




    });
  it('should test if the the output informs users how many years past the life expectancy they have lived', function () {




    });


});
