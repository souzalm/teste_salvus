const mongoose = require('mongoose');

const Patient = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      maxlength: 200,
    },
    data_de_nascimento: {
      type: Date,
      required: true,
    },
    doenca: {
      type: String,
      required: true,
      maxlength: 400,
    },
    tratamento: {
      type: String,
      required: true,
      maxlength: 400,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model('patient', Patient);
