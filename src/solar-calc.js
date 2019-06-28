export class Person {
  constructor (name,gender,birthday){
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.age = 0;
    this.lifeExpectancy = 72;
  }
  calcAge(){
    const today = new Date();
    const birth = new Date(this.birthday);
    this.age = today.getYear() - birth.getYear();
  }

  calcMercury(){
    const mercuryAge = this.age / .24;
    return mercuryAge
  }

  calcVenus(){
    const venusAge = this.age / .62;
    return venusAge
  }

  calcMars(){
    const marsAge = this.age / 1.88;
    return marsAge
  }

  calcJupiter(){
    const jupiterAge = this.age / 11.86;
    return jupiterAge
  }

  calcLifeExpectancy(){
    if(this.gender == 'male'){
      const lifeExpectancy = 72;

    } else {
      const lifeExpectancy = 76;
    }

    return lifeExpectancy
  }

}
