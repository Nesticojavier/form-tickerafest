const ticketTypes = [
  {
    id: 1,
    title: "Oro",
    turnaround: "Mesa (10 personas)",
    price: "800 $",
  },
  {
    id: 2,
    title: "Plata",
    turnaround: "Mesa (10 personas)",
    price: "600 $",
  },
  {
    id: 3,
    title: "General",
    turnaround: "De pie",
    price: "20 $",
  },
];

const paymentMethods = [
  { id: "mobile-payment", title: "Pago Móvil" },
  { id: "transfer", title: "Transferencia" },
  { id: "zelle", title: "Zelle" },
];

const MOBILE_PAYMENTS = [
  {
    name: "Banco",
    value: "Banco Mercantil (0105)",
  },
  {
    name: "Teléfono",
    value: "0412370XXXX",
  },
  {
    name: "RIF",
    value: "J-26946571",
  },
];

const TRANSFER_METHOD = [
  {
    name: "Banco",
    value: "Banco Mercantil",
  },
  {
    name: "Número de cuenta",
    value: "0105XXXXXXXXXXXX",
  },
  {
    name: "RIF",
    value: "J-26946571",
  },
];

const ZELLE_METHOD = [
  {
    name: "Dato 1",
    value: "XXXXXXXXXXXXXXXXX",
  },
  {
    name: "Dato 2",
    value: "XXXXXXXXXXXXXXXXX",
  },
  {
    name: "Dato 3",
    value: "XXXXXXXXXXXXXXXXX",
  },
];

const TICKET = [
  {
    id: 1,
    name: "A1",
  },
  {
    id: 2,
    name: "A2",
  },
  {
    id: 3,
    name: "A3",
  },
  {
    id: 4,
    name: "A4",
  },
  {
    id: 5,
    name: "A5",
  },
  {
    id: 6,
    name: "B1",
  },
  {
    id: 7,
    name: "B2",
  },
  {
    id: 8,
    name: "B3",
  },
  {
    id: 9,
    name: "B4",
  },
  {
    id: 10,
    name: "B5",
  },
];

export {
  ticketTypes,
  paymentMethods,
  MOBILE_PAYMENTS,
  TRANSFER_METHOD,
  ZELLE_METHOD,
  TICKET,
};
