let budget,
	shop,
	time,
	price 

function start() {
	 budget = prompt ('Какой Ваш бюджет?');

	 while (isNaN(budget) || budget == "" || budget == null) {
     budget = prompt ('Какой Ваш бюджет?');

	}
	  shop = prompt ('Название Вашего магазина?').toUpperCase();
	  time = 24
}
start();

let  mainList = {
	 budget: budget,
	 shopName: shop,
	 shopGoods: [],
     employesrs: {},
	 open: false,
	 discont: false
}
function chooseGoods() {
    for (let i = 0; i < 5; i++) {
	   let a = prompt('Какой тип товаров мы будем продавать');

	   if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
			 mainList.shopGoods[i] = a;
		
		} else {
			  i = i - 1;
		}

	}	 
}
chooseGoods();

function workTime(time) {

	    if (time < 0) {
	    	console.log('Такого не может быть');

		} else if (time > 8 && time < 20) {
			console.log('Время работать');

	    } else if (time < 24) {
	    	console.log('Уже слишком поздно');

		} else {
			console.log('В сутках только 24 часа');
	}
}
workTime(18);

function budgetСalculation() {
  let сalculation = budget / 30;
      alert (сalculation);
}
budgetСalculation();

