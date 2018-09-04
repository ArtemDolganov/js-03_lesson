(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

let tab = require('../parts/tab.js');
let modal = require('../parts/modal.js');
let ajax = require('../parts/ajax.js');
let slider = require('../parts/slider.js');
let calc = require('../parts/calc.js');
let timer = require('../parts/timer.js');

tab();
modal();
ajax();
slider();
calc();
timer();

});


	

   

			


},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function  ajax () {

		let message = new Object();
		
		message.loading = "Згрузка....";
		message.success = "Спасибо! Скоро мы с вами свяжемся";
		message.failure = "Что то пошло не так....";

		
		let form = document.getElementsByClassName('main-form')[0],
		    input = form.getElementsByTagName('input'),
		
		
		statusMessage = document.createElement('div');
		
		statusMessage.classList.add('status');

		
		form.addEventListener('submit', function(event) {
			
			event.preventDefault();
			
			form.appendChild(statusMessage);
	});

	let request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");

			let formData = new FormData(form);
			
			request.send(formData);
			
			request.onreadystatechange = function(){
				
				if(request.readyState < 4){
					
					statusMessage.innerHTML = message.loading;
					
				}else if (request.readyState == 4){
					
					if (request.status == 200 && request.status < 300){
						
						statusMessage.innerHTML = message.success;
						
					}
					
					else{
						statusMessage.innerHTML = message.failure;		
					}
				}
			}
			for (let i = 0; i < input.length; i++){
				input[i].value = '';
			}
		
		let contForm = document.getElementById('form'),
		    inputCont = contForm.getElementsByTagName('input');
		
		contForm.addEventListener('submit', (event) => {
			
			event.preventDefault();
			
			contForm.appendChild(statusMessage);

			let request = new XMLHttpRequest();
			
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");

			let formData = new FormData(contForm);

			request.send(formData);
			
			request.onreadystatechange = function(){
				
				if(request.readyState < 4){
					
					statusMessage.innerHTML = message.loading;
					
				}else if (request.readyState == 4){
					
					if (request.status == 200 && request.status < 300){
						
						statusMessage.innerHTML = message.success;
						
					}
					
					else{
						statusMessage.innerHTML = message.failure;		
					}
				}
			}
			for (let i = 0; i < inputCont.length; i++){
				inputCont[i].value = '';
			}
		});
	}
	module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc () {

	let persons = document.getElementsByClassName('counter-block-input')[0],
			    restDays = document.getElementsByClassName('counter-block-input')[1],
			    place = document.getElementById('select'),
			    totalValue = document.getElementById('total');
			  
			    personsSum = 0,
			    daysSum = 0,
			    total = 0;
			    
			    totalValue.innerHTML = 0;
			   
			    let rep = /\d/ig;
			   persons.addEventListener('input', (e) =>{
                  let target = e.target.value;
                    if (target.match(rep) && target != '') {
                    	console.log(target);
                    } else{
                    	persons.value = '';
                    }
					personsSum = +this.value;
			    	
			    	if (restDays.value == ''){
			    		totalValue.innerHTML = 0;
			    	} else {
			    		totalValue.innerHTML = total;
			    	}
			    	if (persons.value == '' ||  restDays.value == '') {
			            totalValue.innerHTML = 0;
			            total = 0;
					} else if (restDays.value == 0 || persons.value == 0) {
			            totalValue.innerHTML = 0;
			            total = 0;
			        }
			        if (personsSum > 0 && personsSum != 0){
			        	total = (daysSum + personsSum)*4000;
			        }else{
			        	total = 0;
			        }
 			    });
			    
			    restDays.addEventListener('input', (e) => {
					let target = e.target.value;
                    if (target.match(rep) && target != '') {
                    	console.log(target);
                    } else{
                    	restDays.value = '';
                    }
					daysSum = +this.value;
			    	
			    	if (persons.value == ''){	
			    		totalValue.innerHTML = 0;
			    	} else {
						totalValue.innerHTML = total;
			    	}
			    	if (persons.value == '' ||  restDays.value == '') {
			            totalValue.innerHTML = 0;
			            total = 0;
					} else if (restDays.value == 0 || persons.value == 0) {
			            totalValue.innerHTML = 0;
			            total = 0;
			        }
			        if (daysSum > 0 && daysSum != 0){
			        	total = (daysSum + personsSum)*4000;
			        }else{
			        	total = 0;
			        }
				});
				
			   place.addEventListener('input', () =>{
			  if (persons.value == '' ||  restDays.value == '') {
			            totalValue.innerHTML = 0;
			            total = 0;
			    }else {
				    let result = total; 
	                totalValue.innerHTML = result * this.options[this.selectedIndex].value;
			  }  
			});
	}
	
 module.exports = calc;
},{}],4:[function(require,module,exports){
function modal (){

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	    infoTab = document.querySelector('.info'); 

	    infoTab.addEventListener('click', (event) => {   
    	let target = event.target;

    	if(target.className == 'description-btn') {   
    		this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
			}
    	
 	});

		more.addEventListener('click', () => {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', () => {
			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider () {

	let slideIndex = 1,
		
			slides = document.getElementsByClassName('slider-item'),
			
			prev = document.querySelector('.prev'),
			
			next = document.querySelector('.next'),
			
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');
		
			showSlides(slideIndex);

			
			function showSlides(n) {
				
				if (n > slides.length) {
					slideIndex = 1;
				}
				
				if (n < 1) {
					slideIndex = slides.length;
				}
				
				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}
				
				for (let i = 0; i < dots.length; i++) {
					
					dots[i].classList.remove('dot-active');
				}
				
				slides[slideIndex -1].style.display = 'block';
				dots[slideIndex -1].classList.add('dot-active');
			}

		
			function plusSlides(n) {
				
				showSlides(slideIndex += n)
			}
			
			function currentSlide(n) {
				
				showSlides(slideIndex = n);
			}
			
			prev.addEventListener('click', () => {
				plusSlides(-1);
			});

			next.addEventListener('click', () => {
				plusSlides(1);
			});
			
			dotsWrap.addEventListener('click', (event) => {
				
				for (let i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
						currentSlide(i);
					}
				}
			});
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab (){

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];
	   
		function hideTabContent(a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}	
	}

	hideTabContent(1)

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
    info.addEventListener('click', (event) => {
    	let target = event.target;
    	if(target.className == 'info-header-tab') {
    		for (let i = 0; i < tab.length; i++) {
    			if(target == tab[i]) {
    				showTabContent(i);
    				break;
    			}
			}
    	};
	});
}

 module.exports = tab;
},{}],7:[function(require,module,exports){
function timer (){

	let deadline = '2018-08-31';

    	function getTimeRemaining(endtime) {
		 let t = Date.parse(endtime) - Date.parse(new Date()),
		    hours = Math.floor( (t / (1000 * 60 * 60)) ),
		    minutes = Math.floor( (t / 1000 / 60) % 60),
		    seconds = Math.floor( (t / 1000) % 60);

			if (hours <10) hours = '0'+ hours;
			if (minutes < 10) minutes  = "0" + minutes;
	    	if (seconds < 10) seconds  = "0" + seconds;
    	    	
			if (t <= 0){
			return {
		    'total' 	: 0,
		    'hours'     :'00',
		    'minutes' : '00',
		    'seconds' : '00',
			};	
	        
			}
			return {
		    'total' 	: t,
		    'hours'     : hours,
		    'minutes' : minutes,
		    'seconds' : seconds
			};

 	 }
	
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds');

		let timeInterval = setInterval(updateClock, 1000);


		function updateClock() {
			let t =  getTimeRemaining(endtime);
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

			if (t.total <= 0){
				clearInterval(timeInterval);

			}
		} 
			
		updateClock();
	}

	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
