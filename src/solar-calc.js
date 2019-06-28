export class Person {
  constructor (name,gender,birthday){
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.age = 0;
    this.lifeExpectancy = 72;
    this.newAge;
    this.newlifeExpectancy;
    this.yearsTillDead;
    this.newTillDead;
  }
  calcAge(){
    const today = new Date();
    const birth = new Date(this.birthday);
    this.age = today.getYear() - birth.getYear();
  }

  calcMercury(){
    this.newAge = this.age / .24;
    this.newLifeExpectancy = this.lifeExpectancy / .24;
  }

  calcVenus(){
    this.newAge = this.age / .62;
    this.newLifeExpectancy = this.lifeExpectancy / .62;
  }

  calcMars(){
    this.newAge = this.age / 1.88;
    this.newLifeExpectancy = this.lifeExpectancy / 1.88;
  }

  calcJupiter(){
    this.newAge = this.age / 11.86;
    this.newLifeExpectancy = this.lifeExpectancy / 11.86;
  }

  calcLifeExpectancy(){
    if(this.gender == 'male'){
      this.lifeExpectancy = 72;

    } else {
      this.lifeExpectancy = 76;
    }


  }
  yearsTillDead(){
    if(this.lifeExpectancy > this.age){
    this.yearsTillDead = this.lifeExpectancy - this.age;
    this.newTillDead = this.newLifeExpectancy - this.newAge;
    return 'you have ' + this.newTillDead + ' years until you reach life expectancy on this planet.'
    } else {
      let pastDead = this.age - this.lifeExpectancy;
      this.yearsTillDead = this.lifeExpectancy - this.age;
      this.newTillDead = this.newLifeExpectancy - this.newAge;
      return 'You have lived ' + pastDead + ' years past you life expectancy on this planet. Congratulations'
    }

  }
}
