window.addEventListener('DOMContentLoaded', function() {

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
    info.addEventListener('click', function(event) {
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

   

    
    // Timer

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

 	 };
	
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
		}; 
			
		updateClock();
	}

	setClock('timer', deadline);

	//Modal

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');
	    infoTab = document.querySelector('.info');  // Вызываем родителя info

	    infoTab.addEventListener('click', function(event) {    // Вешаем событие клик
    	let target = event.target;

    	if(target.className == 'description-btn') {   
    		this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
			}
    	//  делегирование обработкчика кнопки 'description-btn' со всеми табами.
 	});

		more.addEventListener('click', function() {
			this.classList.add('more-splash');
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden';
		});

		close.addEventListener('click', function() {
			overlay.style.display = "none";
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});

		//Form 
		//Создаем новый объект? чтобы оповещать пользователя о каких то действиях ниже
		let message = new Object();
		//Оповещение
		message.loading = "Згрузка....";
		message.success = "Спасибо! Скоро мы с вами свяжемся";
		message.failure = "Что то пошло не так....";

		//Получаем форму модального окна
		let form = document.getElementsByClassName('main-form')[0],
		    input = form.getElementsByTagName('input'),
		
		//Создаем блок куда поместим наш message
		statusMessage = document.createElement('div');
		//Назначаем класс новосозданному statusMessage но его пока нет, если захотим создадим
		statusMessage.classList.add('status');

		//Добавляем обработчик событий
		form.addEventListener('submit', function(event) {
			//Останавливаем поведение браузера при нажатии на кнопку
			event.preventDefault();
			//Добавляем наш message в форму
			form.appendChild(statusMessage);

			//AJAX
			//Создаем объект в который с попомощью конструктора помещаем этот объект
			let request = new XMLHttpRequest();
			//Настройка отправки данных на сервер и путь к нему
			request.open("POST", "server.php")

			//Указываем кодировку заголовка для коректности
			request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");

			//Получаем данные из импутов которые ввел пользователь, fromData берет все данные нашей формы
			let formData = new FormData(form);
			//Отправляем все данные на сервер
			request.send(formData);
			//Создаем событие которое отслеживает статус отправки запроса в данный момент
			request.onreadystatechange = function(){
				//создаем условие 
				if(request.readyState < 4){
					//если запрос не готов выводим лоадинг(пользователь ждет)
					statusMessage.innerHTML = message.loading;
					//Проверяем на полное соответствие
				}else if (request.readyState == 4){
					//Проверяем, что ответил сервер
					if (request.status == 200 && request.status < 300){
						//Сообщаем пользователю, что все ок данные ушли
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страничку
					}
					//Если сервер не принял,добавляем сообщение о ошибки
					else{
						statusMessage.innerHTML = message.failure;		
					}
				}
			}
//Очищаем все поля ввода от импутов после успешной отправки при помощи цикла
			for (let i = 0; i < input.length; i++){
				input[i].value = '';
			}
		});

		//Contactform
		
		//Получаем форму контактного окна
		let contForm = document.getElementById('form'),
		    inputCont = contForm.getElementsByTagName('input');
		
	
		//Добавляем обработчик событий
		contForm.addEventListener('submit', function(event) {
			//Останавливаем поведение браузера при нажатии на кнопку
			event.preventDefault();
			//Добавляем наш message в форму
			contForm.appendChild(statusMessage);

			//AJAX
			//Создаем объект в который с попомощью конструктора помещаем этот объект
			let request = new XMLHttpRequest();
			//Настройка отправки данных на сервер и путь к нему
			request.open("POST", "server.php")

			//Указываем кодировку заголовка для коректности
			request.setRequestHeader("Content-Type", "application/x-www-from-urlencoded");

			//Получаем данные из импутов которые ввел пользователь, fromData берет все данные нашей формы
			let formData = new FormData(contForm);
			//Отправляем все данные на сервер
			request.send(formData);
			//Создаем событие которое отслеживает статус отправки запроса в данный момент
			request.onreadystatechange = function(){
				//создаем условие 
				if(request.readyState < 4){
					//если запрос не готов выводим лоадинг(пользователь ждет)
					statusMessage.innerHTML = message.loading;
					//Проверяем на полное соответствие
				}else if (request.readyState == 4){
					//Проверяем, что ответил сервер
					if (request.status == 200 && request.status < 300){
						//Сообщаем пользователю, что все ок данные ушли
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страничку
					}
					//Если сервер не принял,добавляем сообщение о ошибки
					else{
						statusMessage.innerHTML = message.failure;		
					}
				}
			}
//Очищаем все поля ввода от импутов после успешной отправки при помощи цикла
			for (let i = 0; i < inputCont.length; i++){
				inputCont[i].value = '';
			}
		});

		//Slider
		//Создаем переменную слайдер
		let slideIndex = 1,
		//Получаем наши слайды
			slides = document.getElementsByClassName('slider-item'),
			//Получаем стрелки слайдера
			prev = document.querySelector('.prev'),
			//Получаем next(вперед)
			next = document.querySelector('.next'),
			//Получаем точки слайдера (круглешки перемотки)
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');
			//Вызываем функцию
			showSlides(slideIndex);

			//Создаем нашу функцию первого слайда
			function showSlides(n) {
				//пишим условие прокрутки слайдов с первого по последний
				if (n > slides.length) {
					slideIndex = 1;
				};
				//условие прокрутки назад
				if (n < 1) {
					slideIndex = slides.length;
				};
				//скрываем наши слайды в один который необходим через цикл
				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				};
				//так же убираем все классы dot-active с наших точек, чтобы их потом в ручную воссиановить
				for (let i = 0; i < dots.length; i++) {
					//используем знакомый метод класс лист и удаление
					dots[i].classList.remove('dot-active');
				};
				//теперь нужно показать активный класс и добавить dot-active к каждому кружочку
				slides[slideIndex -1].style.display = 'block';
				dots[slideIndex -1].classList.add('dot-active');
			}

			//Создаем функцию которая будет добавлять или oтнимать количество слайдов
			function plusSlides(n) {
				//такая конструкция дает нам прибавлять или отнимать слайды
				showSlides(slideIndex += n)
			}
			//Создаем функцию для прокрутки наших точек
			function currentSlide(n) {
				//тут мы не меням как выше плюс минус 1, а получаем
				showSlides(slideIndex = n)
			}
			//Создаем событие клика на кнопки назад-вперд
			prev.addEventListener('click', function() {
				plusSlides(-1);
			});

			next.addEventListener('click', function() {
				plusSlides(1);
			});
			//чтобы не кликать на определенную точку мы используем делегирование берем dotsWarp
			dotsWrap.addEventListener('click', function(event){
				//чтобы получить ту точку на которую кликаем, используем цикл и проверку
				for (let i = 0; i < dots.length + 1; i++) {
					if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
						currentSlide(i);
					}
				}
			});

			//Calc
			//Получаем перменные импутов калькулятора
			let persons = document.getElementsByClassName('counter-block-input')[0],
			    restDays = document.getElementsByClassName('counter-block-input')[1],
			    place = document.getElementById('select'),
			    totalValue = document.getElementById('total')
			    //кол-во людей
			    personsSum = 0,
			    //сколько дней
			    daysSum = 0,
			    //общий результат
			    total = 0;
			    //меняем сумму в макете html 
			    totalValue.innerHTML = 0;
			   //Создаем переменную с регулярным выражением для запрета ввода символов
			    let rep = /\d/ig;
			    //отслеживаем изменение данных в импутах через change, создаем обрабтчик событий
			    persons.addEventListener('input', function(e){
                  let target = e.target.value;
                    if (target.match(rep) && target != '') {
                    	console.log(target);
                    } else{
                    	persons.value = '';
                    }

					personsSum = +this.value;
			    	
			    	
			    	//пишем условие и проверяем на сколько дней едет человек
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
 			    })
			    
			    restDays.addEventListener('input', function(e){
					let target = e.target.value;
                    if (target.match(rep) && target != '') {
                    	console.log(target);
                    } else{
                    	restDays.value = '';
                    }

			    	daysSum = +this.value;
			    	//пишем условие где проверяем сколько человек едет
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
			        if (retsDay > 0 && retsDays != 0){
			        	total = (daysSum + personsSum)*4000;
			        }else{
			        	total = 0;
			        }
				})
				//Рассчет суммы при выборе направления путешествия
			    place.addEventListener('input', function(){
			    	if (restDays.value == '' || persons.value == '') {
			    		totalValue.innerHTML = 0;
			    } else{
			    	total = total * this.options[this.selectedIndex].value;
			    	totalValue.innerHTML = total;
			    }

			});
    });










// if (resDays.value == '' || persons.value == '') {
// 			            totalValue.innerHTML = 0;
// 			            total = 0;
// 			     	} else if (resDays.value == 0 || persons.value == 0) {
// 			            totalValue.innerHTML = 0;
// 			            total = 0;
// 			        }


// if (resDays.value == '' || persons.value == '') {
// 			            totalValue.innerHTML = 0;
// 			            total = 0;
// 			     	} else if (resDays.value == 0 || persons.value == 0) {
// 			            totalValue.innerHTML = 0;
// 			            total = 0;
// 			        }

// .replace(\[^\d]*/g)
// .replace(/^[^]*(\d+([.,])d{0,5})?).*$/g, '$');
 // let rep = /[-\.;":'/a-zA-Zа-яА-Я ]/;


// target.match(/^[-.;":'/a-zA-Zа-яА-Я ]/g);