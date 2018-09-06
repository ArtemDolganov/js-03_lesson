let popupBtn = document.querySelector('.popup_engineer_btn'), //вызываем кнопку модального окна
   
    //добавляем  модальное окно
	  popupMod = document.querySelector('.popup_engineer'),  
	 // добавляем класс закрытия модального окна.
	 popupClose = popupMod.getElementsByClassName('popup_close')[0]; 
        //добавляем обработчик событий открытия модального окна
     popupBtn.addEventListener('click', function() {
         popupMod.style.display = 'flex';
    });
         //добавляем обработчик событий закрития модального окна
    popupClose.addEventListener('click', function() {
        popupMod.style.display = 'none';
    });

let phoneLink = document.getElementsByClassName('phone_link'),
    callPoup = document.querySelector('.popup'),  
	closePhone = callPoup.getElementsByTagName('strong')[0]; 
        
     phoneLink[0].addEventListener('click', function() {
        callPoup.style.display = 'flex';
    });
    phoneLink[1].addEventListener('click', function() {
        callPoup.style.display = 'flex';
    }); 
    closePhone.addEventListener('click', function() {
        callPoup.style.display = 'none';
    });
    
        