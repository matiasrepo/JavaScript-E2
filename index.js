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

console.log("a) Las pizzas con id impar:");

const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);

pizzasIdImpar.forEach((pizza) => {
	console.log(`Pizza ${pizza.nombre} - ID: ${pizza.id}`);
});

console.log("\nb) ¿Hay alguna pizza que valga menos de $600?");

const pizzaMenor600 = pizzas.some((pizza) => pizza.precio < 600);

if (pizzaMenor600) {
	console.log("Sí, hay al menos una pizza que vale menos de $600.");
} else {
	console.log("No, no hay pizzas que valgan menos de $600.");
}


console.log("\nc) Nombre de cada pizza con su respectivo precio:");

pizzas.forEach((pizza) => {
  console.log(`Pizza ${pizza.nombre} - Precio: $${pizza.precio}`);
});


console.log("\nd) Ingredientes de cada pizza:");

pizzas.forEach((pizza) => {
  console.log(`Pizza ${pizza.nombre} - Ingredientes: ${pizza.ingredientes.join(", ")}`);
});