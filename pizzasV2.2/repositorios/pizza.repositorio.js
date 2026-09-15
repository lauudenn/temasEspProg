//esta es la capa donde persisten los datos, en este caso es un arreglo de pizzas
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let pizzas = [{id: 1, nombre: "Hawaiina", descripcion: "Jamon y pinia"}];
/**
 * Regresa una lista de las pizza
 * @returns []
 */
export async function obtenerPizzasAsync() {
    await sleep(2000); 
    return pizzas
}
/**
 * Regresa una pizza por su id
 * @param {*} id 
 */
export async function obtenerPizzaPorIdAsync(id) {
    await sleep(1000);
    const pizza = pizzas.find(x => x.id == id);
    return pizza
}
export async function agregarPizzas(pizza) {
    await sleep(1000);
    pizzas.push(pizza);
}
export async function actualizarPizzas(id, pizzaActualizada) {
    await sleep(1000)
    let pizza = pizzas.find(x => x.id == id)
    pizza.nombre = pizzaActualizada.nombre
    pizza.descripcion = pizzaActualizada.descripcion
    return "pizza actualizada"
}
export async function EliminarPizzas(id) {
    await sleep(1000)
    const index = pizzas.findIndex(x => x.id == id)
    pizzas.splice(index, 1)
    return "pizza borrada"
}

