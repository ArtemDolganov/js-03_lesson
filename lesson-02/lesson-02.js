let budget = prompt ('Какой Ваш бюджет?');
let shop = prompt ('Название Вашего магазина?');
let time = 24
let mainList = {
    budget: budget,
    shopName: shop,
    shopGoods: [],
    employesrs: {},
    open: false
}

for (let i = 0; i < 5; i++) {
	let a = prompt('Какой тип товаров мы будем продавать');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length <50) {
		mainList.shopGoods[i] = a;
	
	} else {
		i = i - 1;
	}
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

 /* Закоментировал два цикла while, do while
let i = 0;
while (i > 5) {
	let a = prompt('Какой тип товаров мы будем продавать');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.lenght < 50) {
		mainList.shopGoods[i] = a;
		i++;
	}
}

let i = 0;
do {
    let a = prompt('Какой тип товаров мы будем продавать');

	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.lenght < 50) {
		mainList.shopGoods[i] = a;
		i++;
       }
}  
while ( i > 5) 
*/
