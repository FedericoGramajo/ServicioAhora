import express from "express";
import data from './data.js'
const app = express()

app.get('/api/products', (req, res) => {
    res.send(data.products)
});
app.get('/', (req, res) => {
    res.send('Server is ready')
});
app.get('/api/rubros', (req, res) => {
    res.send(data.rubros)
});
app.get('/api/servicios/:id', (req, res) => {

    const idreq = req.params.id;
    let array = [];
    data.servicios.find((servicio) => {
        if (servicio.rubro_id == idreq) {
            array.push(servicio)
        }

    })
    res.send(array)
});


app.get('/api/profesional/:id', (req, res) => {
    const id = req.params.id;
    console.log(data.servicios.find(({ _id }) => _id == id))
    res.send(data.servicios.find(({ _id }) => _id == id))

});


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})