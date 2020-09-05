const express = require('express');
const mongoose = require('mongoose');

require('./models/Patient');
const Patient = mongoose.model('patient');

const app = express();

app.use(express.json());

mongoose
  .connect('mongodb://localhost/teste_salvus', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Conexão com MongoDB estabelecida com sucesso!');
  })
  .catch((erro) => {
    console.log('Erro: Conexão com MongoDB não foi estabelecida com sucesso!');
  });

app.get('/api/patients', (req, res) => {
  Patient.find({})
    .then((patient) => {
      return res.json(patient);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: 'Nenhum paciente encontrado!',
      });
    });
});

app.get('/api/patients/:id', (req, res) => {
  Patient.findOne({ _id: req.params.id })
    .then((patient) => {
      return res.json(patient);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: 'Paciente não encontrado!',
      });
    });
});

app.post('/api/patients', (req, res) => {
  const patient = Patient.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Erro: Paciente não foi cadastrado!',
      });

    return res.status(200).json({
      error: false,
      message: 'Paciente cadastrado com sucesso!',
    });
  });
});

app.put('/api/patients/:id', (req, res) => {
  const patient = Patient.updateOne({ _id: req.params.id }, req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Erro: Paciente não foi editado com sucesso!',
      });

    return res.json({
      error: false,
      message: 'Paciente editado com sucesso!',
    });
  });
});

app.delete('/api/patients/:id', (req, res) => {
  const patient = Patient.deleteOne({ _id: req.params.id }, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Erro: Paciente não foi excluído!',
      });

    return res.json({
      error: false,
      message: 'Paciente excluído com sucesso!',
    });
  });
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080: http://localhost:8080/');
});
