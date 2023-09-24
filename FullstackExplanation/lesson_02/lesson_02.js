// Синхронний колбек:
// function greeting(name) {
//   alert("Привіт " + name)
// }

// function processUserInput(callback) {
//   var name = prompt("Будь ласка, введіть ім'я");
//   callback(name);
// }

// processUserInput(greeting);




// Асинхронний колбек:
// async function pageLoader(callback) {
//   const data = await fetch("https://api.example.com/callData/"); // Повертається сторінка каталогу ноутбуків
//   callback(data);
// }

// function onPageLoadingFinished(pageData) {
//   console.log("Сторінка успішно завантажена!");
//   console.log("Відповідь API:");
//   console.log(pageData);
// }

// pageLoader(onPageLoadingFinished);



// const vidpovid = new Promise ((resolve, reject) => {
//   const success = false;
//   if(success) {
//     resolve("Операція виконана успішно!");
//   } else { 
//     reject("Невірний пароль!")

//   }
// });

// vidpovid.then((message) => {
//   console.log("Успіх", message);
// }).catch((error) => {
//   console.error("Сталася Помилка!",error);
// });


// // Робота з сервером, що зберігає дані про те, яка тваринка вимовляє який звук
// async function getAnimalSound(animal) {
//   return new Promise ((resolve, reject) => {
//   // Перевірка, чи така тварина існує
//   if (animal=="cat" || animal=="dog") {
//     //Імітуємо асинхронний запит до серверу поки на сайті відбуваються інші події
//     setTimeout(() => {
//       if(animal=="cat") {
//         resolve("Meow!");
//       } else if (animal=="dog") {
//         resolve("Woof!");
//       }
//     }, 1000);
//   } else {
//     reject("Тварину не знайдено або помилка на сервері!")
//   }
//   });
// }

// getAnimalSound("cat").then((sound) => {
//   console.log("Animal sound:", sound);
// })
// getAnimalSound("dog").then((sound) => {
//   console.log("Animal sound:", sound);
// })
// .catch((error)=> {
//   console.error("Error", error);
// });


// async function fetchAnimalData(animalID) {
//   const apiUrl = "https://api.example.com/animals/${animalID}";

//   try {
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Сталася помилка під час пошуку даних", error);
//     throw new Error("Неправильний ID тварини");
//   }
// }

// async function displayAnimalData(animalID) {
//   try {
//     const animalData = await fetchAnimalData(animalID);
//     console.log("Інформація про тварину:", animalData);
//   } catch (error) {
//     console.error("Помилкові дані про тварину", error);
//   }
// }

// displayAnimalData(10);