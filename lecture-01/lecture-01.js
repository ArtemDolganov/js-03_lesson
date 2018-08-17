nextPrime:
  for (let i = 1; i <= 100; i++) {

    for (let a = 2; a < i; a++) {
      if (i % a == 0) 
      	continue nextPrime;
    }
 console.log(i);
 let div = document.createElement('div'),
     position = document.querySelector('#simbol');
     
     div.textContent = i;
     position.appendChild(div);

}