export class Person {
  constructor (name,gender,birthday){
    this.name = name;
    this.gender = gender;
    this.birthday = birthday;
    this.age = 0;
    this.lifeExpectancy = 72;
    this.newAge;
    this.newlifeExpectancy;
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

  }

}
