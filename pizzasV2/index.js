const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//rutas
app.get("/", (req, res) => {
    const saludo = {mensaje: "Bienvenido a la Api de Lau v2"};
    return res.json(saludo);
});
app.get("/api/v1/saludos", (req, res) => {
    const saludo = {mensaje: "Hola mundo desde nodejs"};
    return res.json(saludo);
});
app.get("/api/v1/error", (req, res) => {
    const respuesta = {mensaje: "ocurrio un error"};
    return res.status(500).json(respuesta)
});
app.get("/api/v1/pizzas", (req, res) => {
    const pizzas = [
        { nombre: "Hawaiina", descripcion: "Jamon y pinia"}     
    ];
    return res.status(200).json(pizzas);
});

app.post("/api/v1/pizzas", (req, res) => {
    const pizza = req.pizza
    console.log(pizza)  
    //guarda
    //guardarPizza(pizza);
    const respuestaDto = {
        mensaje: "Pizza agregada",
        id: 1,
        fecha: new Date()
    }
    return res.status(201).json(respuestaDto);
});
/**
 * regresa 1 pizza por el id que se le pase por parametro
 * simulavion para la conexion de la bdd
 * @param {*} id 
 * 
 */
function getPizzas(id) {
    //se conecta a la db
    //busca en la tabla o coleccion de pizzas
    //regresa el elemento
    return {nombre: "Hawaiina", descripcion: "Jamon y queeso"}
}
app.get("/api/v1/pizzass/:id", (req, res) => {
    console.log(req.query);
    console.log(req.path);
    console.log(req.params);
    const id = req.params.id;
    console.log("id",id);
    const pizza = getPizzas(id);
    return res.status(200).json(pizza)
});


//iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});