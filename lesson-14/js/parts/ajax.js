"use strict";

function ajax() {
  var message = new Object();
  message.loading = "Згрузка....";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что то пошло не так....";
  var form = document.getElementsByClassName('main-form')[0],
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add('status');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.appendChild(statusMessage);
  });
  var request = new XMLHttpRequest();
  request.open("POST", "server.php");
  request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");
  var formData = new FormData(form);
  request.send(formData);

  request.onreadystatechange = function () {
    if (request.readyState < 4) {
      statusMessage.innerHTML = message.loading;
    } else if (request.readyState == 4) {
      if (request.status == 200 && request.status < 300) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    }
  };

  for (var i = 0; i < input.length; i++) {
    input[i].value = '';
  }

  var contForm = document.getElementById('form'),
      inputCont = contForm.getElementsByTagName('input');
  contForm.addEventListener('submit', function (event) {
    event.preventDefault();
    contForm.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");
    var formData = new FormData(contForm);
    request.send(formData);

    request.onreadystatechange = function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState == 4) {
        if (request.status == 200 && request.status < 300) {
          statusMessage.innerHTML = message.success;
        } else {
          statusMessage.innerHTML = message.failure;
        }
      }
    };

    for (var _i = 0; _i < inputCont.length; _i++) {
      inputCont[_i].value = '';
    }
  });
}

module.exports = ajax;