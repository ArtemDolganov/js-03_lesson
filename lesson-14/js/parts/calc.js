//"use strict";

//require("core-js/modules/es6.regexp.match");

function calc() {
  var persons = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total');
 
 var personsSum = 0, 
     daysSum = 0, 
     total = 0;
     totalValue.innerHTML = 0;
  var rep = /\d/ig;
  persons.addEventListener('input', function (e) {
    var target = e.target.value;

    if (target.match(rep) && target != '') {
      console.log(target);
    } else {
      persons.value = '';
    }

    personsSum = +this.value;

    if (restDays.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
      total = 0;
    } else if (restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
      total = 0;
    }

    if (personsSum > 0 && personsSum != 0) {
      total = (daysSum + personsSum) * 4000;
    } else {
      total = 0;
    }
  });
  restDays.addEventListener('input', function (e) {
    var target = e.target.value;

    if (target.match(rep) && target != '') {
      console.log(target);
    } else {
      restDays.value = '';
    }

    daysSum = +this.value;

    if (persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }

    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
      total = 0;
    } else if (restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
      total = 0;
    }

    if (daysSum > 0 && daysSum != 0) {
      total = (daysSum + personsSum) * 4000;
    } else {
      total = 0;
    }
  });
  place.addEventListener('input', function () {
    if (persons.value == '' || restDays.value == '') {
      totalValue.innerHTML = 0;
      total = 0;
    } else {
      var result = total;
      totalValue.innerHTML = result * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;