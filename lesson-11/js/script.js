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

    	let deadline = '2018-08-26';

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

    });


     








