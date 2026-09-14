const express = require('express');
const app = express();
const PORT = 3000; // Puerto en el que escuchará el servidor

app.get("/", (req, res)=>{
    const saludo = { mensaje : "Api Pizzas FES"};
    return res.json(saludo);
    });


app.get("/api/v1/pizzas", (req, res) => {
  const pizzas = [
    { 
      nombre: "Pepperoni", 
      descripcion: "Doble pepperoni u queso" 
    },
    { 
      nombre: "Hawaiana", 
      descripcion: "Jamón, piña y queso" 
    },
    { 
      nombre: "Mexicana", 
      descripcion: "Chorizo, jalapeños, y queso" 
    },
    { 
      nombre: "picante", 
      descripcion: "Queso, carne, chile" 
    }
  ];
  return res.json(pizzas);
});

// Ruta para la lista de tamaños
app.get("/api/v1/tamanios", (req, res) => {
  const tamanios = [
    { 
      nombre: "Chica", 
      rebanadas: 4,
      descripcion: "1 persona"
    },
    { 
      nombre: "Mediana", 
      rebanadas: 8,
      descripcion: "2 personas"
    },
    { 
      nombre: "Grande", 
      rebanadas: 12,
      descripcion: "Para 3 a 4 personas"
    },
    { 
      nombre: "Jumbo", 
      rebanadas: 16,
      descripcion: "muchas personas"
    }
  ];

  return res.json(tamanios);
});

// Ruta para la lista de bebidas
app.get("/api/v1/bebidas", (req, res) => {
  const bebidas = [
    { 
      nombre: "Coca", 
      tamanio: "600 ml", 
      tipo: "Gasificada" 
    },
    { 
      nombre: "Agua de Jamaica", 
      tamanio: "1 Litro", 
      tipo: "Natural" 
    },
    { 
      nombre: "Agua de guayaba", 
      tamanio: "1 Litro", 
      tipo: "Natural" 
    },
    { 
      nombre: "limonada", 
      tamanio: "500 ml", 
      tipo: "natural" 
    }
  ];

  return res.json(bebidas);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});