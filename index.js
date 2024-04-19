const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var aluno = {
    nome: "Funalo",
    nota: 9,
    curso: "ADS" 
}

app.get("/", (req, res) => {
    res.send(aluno); //Manda um response de aluno para saber se está recebendo os determinados resultados.
});

app.listen(8000, () => {
    console.log("Ouvindo a porta 8000"); //Teste para receber comentário se ele ouvir a porta 8000
})

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("ok");
})
