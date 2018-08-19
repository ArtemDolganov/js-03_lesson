let menu = document.querySelector('.menu'),
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title')
    adv = document.querySelector('.adv'),
    body = document.getElementsByTagName('body')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    question = document.getElementById('prompt')
    
    menu.insertBefore(menuItem[1], menuItem[3]);
    title.textContent = 'Мы продаем только подлинную технику Apple';
    column[1].removeChild(adv);
    body.style.backgroundImage = 'url(img/apple_true.jpg)';
  
      console.log(menu);
      console.log(menuItem);
      console.log(adv);
      console.log(prompt);
    div = document.createElement('div');
    div.classList.add('menu-item');
    menu.appendChild(div);
    div.innerHTML = 'Пятый пункт';
    question.textContent = prompt('Как Вы относитесь к технике Apple','');
    

















 //menu = document.getElementByClassName("menu-item");
// console.log(menu);


//ul.class.menu.add("menu-item")

//document.div.removeChild("adv");
//let title = document.getElementById('title'),
//let body = document.querySelector('body'),
//style.background = 'url(../img/apple_true.jpg) center no-repeat';
