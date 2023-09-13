const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.

// for (PizzaImar of pizzas) {
//   if (PizzaImar.id % 2 !== 0) {
//     console.log(`Pizzas Impares ${PizzaImar.nombre}`);
//   }
// }

// b) Responder: ¿Hay alguna pizza que valga menos de $600?

// let PizzaMenorA600 = false;

// for (PizzaBarata of pizzas) {
//   if (PizzaBarata.precio < 600) {
//     PizzaMenorA600 = true;
//     break;
//   }
// }

// if (PizzaMenorA600) {
//   console.log("Si hay Pizzas menor a 600$");
// } else {
//   console.log("Pizza igual o mayor a 600$");
// }

for (const PreciosDePizzas of pizzas) {
  console.log(`${PreciosDePizzas.nombre}: $${PreciosDePizzas.precio}`);
}
