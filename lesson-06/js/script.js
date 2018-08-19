let openBtn = document.getElementById('open-btn'),
    
    nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discontValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	
	goodsItem = document.querySelectorAll('.goods-item'),
	
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],

	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
    count_budget_value = document.querySelector('.count-budget-value'),
	
	hireEmployers = document.querySelectorAll('.hire-employers-item');

     input = document.getElementById("budget").setAttribute("disabled", "true");

	goods_btn.setAttribute("disabled", "true");
	function checkGoodsFields(){
		for(let i =0; i<goodsItem.length; i++) {
        	if  (goodsItem[i].value == '') {
 	     		goods_btn.setAttribute("disabled", "true");
    
			} else {
				goods_btn.removeAttribute("disabled");
			}
	    }
	}
	goodsItem[0].addEventListener('keypress', checkGoodsFields);    
    goodsItem[1].addEventListener('keypress', checkGoodsFields); 
    goodsItem[2].addEventListener('keypress', checkGoodsFields); 
    goodsItem[3].addEventListener('keypress', checkGoodsFields); 



	 employers_btn.setAttribute("disabled", "true");
     function nameEmployers(){
	 	for(let i =0; i<hireEmployers.length; i++) {
         	if  (hireEmployers[i].value == '') {
  	     		employers_btn.setAttribute("disabled", "true");
    
	 		} else {
				employers_btn.removeAttribute("disabled","true");
	 		}
	     }
	 }
   hireEmployers[0].addEventListener('keypress', nameEmployers);
   hireEmployers[0].addEventListener('keypress', nameEmployers);
   hireEmployers[0].addEventListener('keypress', nameEmployers);
let money,
	price;

    openBtn.addEventListener('click', () => {
	money = prompt ('Какой Ваш бюджет?', '');
	    while (isNaN(money) || money == "" || money == null) {
		 	money = prompt ('Какой Ваш бюджет?', '');
        }
	    	budgetValue.textContent = money;
        nameValue.textContent = prompt('Название Вашего магазина?', '').toUpperCase();
		
		mainList.discont = confirm('Включить ли дисконтную систему?');	
		//Дисконтная система включается при открытии магазина.
			if (mainList.discont == true){
	   discontValue.style.backgroundColor = 'green' 
	}  else {
	   discontValue.style.backgroundColor = 'red'

	}
 });

     goods_btn.addEventListener('click', () => {

    	for (let i = 0; i < goodsItem.length; i++) {
	   		let a = goodsItem[i].value;

			if ((typeof(a)) === 'string' && (typeof(a)) != null &&  a.length <50) {
				console.log('Все верно');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
		} else {
		 i = i - 1;
		}

	}	 
});

    choose_item.addEventListener('change', () => {
	let items = choose_item.value;

		if (isNaN(items) && items != '') {
			mainList.shopItems = items.split(', ');
			mainList.shopItems.sort();
        itemsValue.textContent = mainList.shopItems;
	}
});

    time_value.addEventListener('change', () => {
	
	let time = time_value.value;
	if (time < 0) {    
		console.log('Такого не может быть');
        mainList.open = false;
	} else if (time > 8 && time < 20) {
		console.log('Время работать');
		mainList.open = true;

	} else if (time < 24) {
		console.log('Уже слишком поздно');
        mainList.open = false;
	} else {
	     console.log('В сутках только 24 часа');
	     mainList.open = false;
	 };

	if (mainList.open == true){
	   isopenValue.style.backgroundColor = 'green' 
	}  else {
	   isopenValue.style.backgroundColor = 'red'

	}
});	

    budget_btn.addEventListener('click', () => {
	 count_budget_value.value = money  / 30;
});

    employers_btn.addEventListener('click', () => {
      for (let i = 0; i < hireEmployers.length; i++) {
	  let name = hireEmployers[i].value;
	   mainList.employesrs[i] = name;

	   employersValue.textContent += mainList.employesrs[i] + ', ';
	}
});
    
let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employesrs: {},
    open: false,
    discont: true,
	shopItems: [],
}
//     discountSystem: function discountSystem() {
// 		    if (mainList.discount == true) {
// 				price = '80%';
// 				console.log(price);
// 			} else {
// 				price = '100%';
// 				console.log(price);
// 			}
// 	}		
// }

        

		   
//  Если хоть одно поле будет пустым соответю кнопки, то унас элемент кнопки будет блокирован

// if ((typeof(a)) === '' && (typeof(a)) != null &&  a.length <50) {
// 			console.log('Все верно');
// 			mainList.shopGoods[i] = a;
// 			goodsValue.textContent = mainList.shopGoods;
// 		} else {
// 		 goods_btn.removeAttribute("disabled", "true")
// 		}