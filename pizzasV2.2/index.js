import express from "express";
import cors from "cors";
import { obtenerPizzasAsync, obtenerPizzaPorIdAsync, agregarPizzas, actualizarPizzas, EliminarPizzas } from "./repositorios/pizza.repositorio.js";

const app = express();
app.use(cors())
const PORT = 3000;
//configuracion para ver el body en un metodo post
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/v1/pizzas", async (req, res) => {
    const pizzas = await obtenerPizzasAsync();
    return res.status(200).json(pizzas);
});

app.get("/api/v1/pizzas/:id", async (req, res) => {
    const id = req.params.id;
    const pizza = await obtenerPizzaPorIdAsync(id);
    return res.status(200).json(pizza);
});
app.post("/api/v1/pizzas", async (req, res) => {
     const pizza = req.body; 
     await agregarPizzas(pizza); 
     return res.status(201).json({ mensaje: "Pizza agregada" }); 
});
app.put("/api/v1/pizzas/:id", async (req, res) => {
    const id = req.params.id; 
    const pizzaActualizada = req.body; 
    await actualizarPizzas(id, pizzaActualizada); 
    return res.status(200).json({ mensaje: "Pizza actualizada" }); 
});
app.delete("/api/v1/pizzas/:id", async (req, res) => { 
    const id = req.params.id; 
    await EliminarPizzas(id); 
    return res.status(200).json({ mensaje: "Pizza eliminada" }); 
});

//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});