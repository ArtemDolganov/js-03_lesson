let budget,
	shop,
	time,
	price 

function start() {
		 budget = prompt ('Какой Ваш бюджет?', '');

		 while (isNaN(budget) || budget == "" || budget == null) {
		 budget = prompt ('Какой Ваш бюджет?', '');

		}
		  shop = prompt ('Название Вашего магазина?', '').toUpperCase();
		  time = 24
    }
start();

let mainList = {
    budget: budget,
    shopName: shop,
    shopGoods: [],
    employesrs: {},
    open: false,
    discont: true,
	shopItems: [],
	    chooseGoods: function chooseGoods() {
			for (let i = 0; i < 5; i++) {
			   let a = prompt('Какой тип товаров мы будем продавать', '');

			   if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
					 mainList.shopGoods[i] = a;
				
				} else {
					  a = i - 1;
				}

			}	 
		},
        workTime: function workTime(time) {

			if (time < 0) {    
				console.log('Такого не может быть');

			} else if (time > 8 && time < 20) {
				console.log('Время работать');
				mainList.open = true;

			} else if (time < 24) {
				console.log('Уже слишком поздно');

			  } else {
			}	console.log('В сутках только 24 часа');
	    },
	    dayBudget: function dayBudget() {
		   alert("Ежедневный бюджет " + mainList.budget / 30); 
		},
		discountSystem: function discountSystem() {
		    if (mainList.discount == true) {
				price = '80%';
				console.log(price);
			} else {
				price = '100%';
				console.log(price);
			}
		},
        hireEployers: function hireEployers() {
		   for (let i = 1; i < 4; i++) {
			   let name = prompt("Имя сотрудника");
			   mainList.employesrs[i] = name;
				
			}

		},
        chooseShopItems: function chooseShopItems () {
			for (let i = 0; i < 1; i++) {
			let items = prompt('Перечислите ваши товары через зяпятую', '');
			if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && items.length <50) {
				mainList.shopItems = items.split(',');
				mainList.shopItems.push(prompt('Подождите еще', ',' ));
				mainList.shopItems.sort();
				mainList.shopItems.forEach(function(item, i, arr) {
				  i++;
				  console.log('У нас вы можете купить:' + i + ': ' + item );
				});
			for (let key in mainList.shopItems) {
		       console.log('Наш магазин включает в себя ' + mainList.shopItems[key]);
				}		
			} else {
				i--;
			}
		}  
	} 
}   
    mainList.chooseShopItems();
	    console.log(mainList.shopItems);   

