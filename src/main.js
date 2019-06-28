import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person } from './solar-calc.js';

$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    let expectancy = '';
    const user = new Person($('input#name').val(),$('input[name="gender"]:checked').val(),$('input#birthday').val());
    console.log(user);
    user.calcAge();
    user.calcLifeExpectancy();
    $("#mercury").click(function(){
      user.calcMercury();
      expectancy = user.yearsTillDead();
      $('.result-mercury').append('Your age in Mercury years is: ' + user.newAge);
      $('.result-mercury').append(expectancy);
      console.log('here')
    });
    $("#venus").click(function(){
      user.calcVenus();
      expectancy = user.newYearsTillDead

    });
    $("#earth").click(function(){
      user.calcVenus();
      expectancy = user.yearsTillDead

    });
    $("#mars").click(function(){
      user.calcVenus();
      expectancy = user.newYearsTillDead

    });
    $("#jupiter").click(function(){
      user.calcVenus();
      expectancy = user.newYearsTillDead

    });
  });
});
