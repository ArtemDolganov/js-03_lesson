 let age = document.getElementById('age'),
     btn = document.getElementsByTagName('button')[0];
     btn.addEventListener('click', function(){
         let user = {
    surname: "Пупкин",
    name: "Вася",
    // Получаем значение value с элемента
    userValue: age.value,
   
  
  showUser: function() {
    console.log(this === user);
    function showUserFunc(){
    alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.userValue);
    //Возвращаем значение
    return this.userValue; 
  }
    return showUserFunc.call(this);
  } 
}
user.showUser(); 

 });
