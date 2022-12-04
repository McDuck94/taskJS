//создаем объект
const person = {
    city: "Moscow",
    work: "Director"
}

//создаем протип и добавляем личные совйства
const worker = Object.create(person);

worker.ownCity = "Kazan";
worker.age = "25"
worker.hobby = "reading books"

//перебираем совойства и выводим только личные 
for(let key in worker) {
    if(worker.hasOwnProperty(key)) {
        console.log(`${key}: ${worker[key]}`);
    }
}
