const mongoose = require('mongoose')

const url_bd = 'mongodb://localhost:27017/Libreria'

mongoose.connect(url_bd)

.then(() => {
    console.log("Funciona")
})
.catch((err) => {
    console.log("No funciono")
})

const Esquema_Libreria = new mongoose.Schema({
    name:{ type: String},
    price:{ type: Number},
    date:{ type: Date},
    editorial:{ type: String},
    author:{ type: String},
    genre:{ type: String},
    numpage:{ type: Number}
})

const Modelo_Libreria = new mongoose.model('Libros',Esquema_Libreria) 

Modelo_Libreria.create({
    name: "Viaje al centro de la tierra",
    price: 190,
    date: new Date ("06/12/2024"),
    editorial: "Valvidia",
    author: "Julio Verne",
    genre: "Fantasia",
    numpage: 1234
})