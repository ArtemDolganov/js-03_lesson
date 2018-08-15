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

let mainList = {
    budget: budget,
    shopName: shop,
    shopGoods: [],
    employesrs: {},
    open: false,
    discont: true

}
function chooseGoods() {
    for (let i = 0; i < 5; i++) {
	   let a = prompt('Какой тип товаров мы будем продавать');

	   if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
			 mainList.shopGoods[i] = a;
		
		} else {
			  a = i - 1;
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

function dayBudget() {
   alert("Ежедневный бюджет " + mainList.budget / 30); 
}
budgetСalculation();

function discountSystem() {
	 if (mainList.discount == true) {
            price = '80%';
            console.log(price);
        } else {
            price = '100%';
            console.log(price);
        }
}
discontSystem();
function hireEployers() {
   for (let i = 1; i < 4; i++) {
	   let name = prompt("Имя сотрудника");
	   mainList.employesrs[i] = name;
		
	}

}
// hireEployers();
console.log(mainlist)