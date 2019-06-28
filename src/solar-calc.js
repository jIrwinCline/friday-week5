export class person {
  constructor (name,gender){
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.age = 0;
    this.lifeExpectancy = 72;
  }
  calcAge(){
    const today = new Date();
    const birth = new Date(this.birthday);
    this.age = today - birth;
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

    return
  }

}
