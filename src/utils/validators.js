export const INPUTS = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Nombre",
    rules: {
      required: {
        value: true,
        message: "El nombre es requerido",
      },
      pattern: {
        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
        message: "El nombre debe contener solo letras.",
      },
    },
  },

  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "Apellidos",
    rules: {
      required: {
        value: true,
        message: "El apellido es requerido",
      },
      pattern: {
        value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
        message: "El apellido debe contener solo letras.",
      },
    },
  },

  {
    id: 3,
    name: "idcard",
    type: "text",
    placeholder: "CI/RIF",
    rules: {
      required: {
        value: true,
        message: "Cédula o pasaporte requerido",
      },
      pattern: {
        value: /^[VJGEvjge]-\d{7,9}$/,
        message: "Formato de CI/RIF inválido",
      },
    },
  },

  {
    id: 4,
    name: "city",
    type: "text",
    placeholder: "Ciudad",
    rules: {
      required: {
        value: true,
        message: "Ciudad requerida",
      },
    },
  },

  {
    id: 5,
    name: "email",
    type: "text",
    placeholder: "Correo electrónico",
    rules: {
      required: {
        value: true,
        message: "Correo requerido",
      },
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: "Debe ingresar un correo válido.",
      },
    },
  },
];
