export const RULES = {
  name: {
    required: {
      value: true,
      message: "El nombre es requerido",
    },
    pattern: {
      value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      message: "El nombre debe contener solo letras.",
    },
  },

  lastname: {
    required: {
      value: true,
      message: "El apellido es requerido",
    },
    pattern: {
      value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
      message: "El apellido debe contener solo letras.",
    },
  },

  idcard: {
    required: {
      value: true,
      message: "Cédula, pasaporte o RIF requerido",
    },
    pattern: {
      value: /^[VJGEvjge]-\d{7,9}$/,
      message: "Formato de CI/RIF inválido",
    },
  },

  city: {
    required: {
      value: true,
      message: "Ciudad requerida",
    },
  },

  email: {
    required: {
      value: true,
      message: "Correo requerido",
    },
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "Debe ingresar un correo válido.",
    },
  },

  phone: {
    required: {
      value: true,
      message: "Teléfono requerido",
    },
    pattern: {
      value: /^[0-9]{11}$/,
      message: "Número de teléfono inválido.",
    },
  },

  ticket: {
    required: {
      value: true,
      message: "Debe seleccionar una entrada",
    },
  },

  reference: {
    required: {
      value: true,
      message: "Debe agregar referencia de pago",
    },
    minLength: {
      value: 4,
      message: "Debe ingresar mínimo 4 dígitos",
    },
    pattern: {
      value: /^[0-9]/,
      message: "Sólo puede ingresar números",
    },
  },
};
