//Создаем класс Options
class Options { 
  // Конструктор принимает  значения которые мы передали  экземпляру класса
  constructor(height, width, bg, fontSize, textAlign){
    //Создаем свойства класса
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  //Создаем метод класса который
 calcArea() {
   // Создает новый элемент div например
   let div = document.createElement('div'); 
   // Добавляет на страничку
   document.body.appendChild(div);
   // Добавляет текст к блоку и задает вопрос через prompt
   div.textContent = prompt("тут мой вопрос?");
   // Создаем стиль нашему блоку через свойства нашего класса Options
   div.style.cssText = `height:${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
    
  }
}
//Создаем новый экземпляр в котором передаем значения класса
let opt = new Options('100px', '100px', 'green', '17px', 'center');
//Вызываем метод который создает элемент на страницы
opt.calcArea();
//Содаем второй экземпляр объекта который может иметь другое значение например красный цвет
 console.log(Options);
 let opt1 = new Options('100px', '100px', 'red', '17px', 'center');
 //Вызываем метод который создает элемент на страницы
opt1.calcArea();