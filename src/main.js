import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Person } from './solar-calc.js';

$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    const user = new Person($('input#name').val(),$('input[name="gender"]:checked').val(),$('input#birthday').val());
    user.calcAge();
    console.log(user);
    user.calcLifeExpectancy();
    $("#mercury").click(function(){
      user.calcMercury();
      $('.result-mercury').append('Your age in Mercury years is: ' + user.newAge + '<hr>');
      $('.result-mercury').append(user.yearsTillDead());
    });
    $("#venus").click(function(){
      user.calcVenus();
      console.log(user);
      $('.result-venus').append('Your age in Venus years is: ' + user.newAge + '<hr>');
      $('.result-venus').append(user.yearsTillDead());

    });
    $("#earth").click(function(){
      user.calcEarth();
      console.log(user);
      $('.result-earth').append('Your age in Earth years is: ' + user.age + '<hr>');
      $('.result-earth').append(user.yearsTillDead());

    });
    $("#mars").click(function(){
      user.calcMars();
      $('.result-mars').append('Your age in Mars years is: ' + user.newAge + '<hr>');
      $('.result-mars').append(user.yearsTillDead());

    });
    $("#jupiter").click(function(){
      user.calcJupiter();
      $('.result-jupiter').append('Your age in Jupiter years is: ' + user.newAge + '<hr>');
      $('.result-jupiter').append(user.yearsTillDead());

    });
  });
});
