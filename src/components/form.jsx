/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import MobilePayment from "./cards/MobilePayment";
import Transfer from "./cards/Transfer";
import Zelle from "./cards/Zelle";
import map from "../assets/map.png";

const products = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const deliveryMethods = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0].id
  );

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    console.log(event.target.value);
  };

  console.log(selectedDeliveryMethod);
  console.log(selectedPaymentMethod);
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-white text-center text-2xl font-bold mb-4">
          RESERVE SU ENTRADA AQUÍ
        </h1>
        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div className="">
              <h2 className="text-lg font-bold text-white">
                Información personal
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-white"
                  >
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-white"
                  >
                    Apellidos
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-white"
                  >
                    Cédula/RIF
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-white"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email-address"
                      name="email-address"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-white"
                  >
                    Ciudad
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white"
                  >
                    Teléfono
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Information */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <RadioGroup
                value={selectedDeliveryMethod}
                onChange={setSelectedDeliveryMethod}
              >
                <RadioGroup.Label className="text-lg font-bold text-white">
                  Información de la compra
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  {deliveryMethods.map((deliveryMethod) => (
                    <RadioGroup.Option
                      key={deliveryMethod.id}
                      value={deliveryMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? "border-transparent" : "border-gray-300",
                          active ? "ring-4 ring-myblue" : "",
                          "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex flex-1">
                            <span className="flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className="block text-sm font-bold text-black"
                              >
                                {deliveryMethod.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 flex items-center text-sm text-gray-700"
                              >
                                {deliveryMethod.turnaround}
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                as="span"
                                className="mt-6 text-sm font-bold text-black"
                              >
                                {deliveryMethod.price}
                              </RadioGroup.Description>
                            </span>
                          </span>
                          {checked ? (
                            <CheckCircleIcon
                              className="h-5 w-5 text-myblue"
                              aria-hidden="true"
                            />
                          ) : null}
                          <span
                            className={classNames(
                              active ? "border" : "border-4",
                              checked ? "border-myblue" : "border-transparent",
                              "pointer-events-none absolute -inset-px rounded-lg"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>

              <div className="mt-4">
                <label
                  htmlFor="ticket"
                  className="block text-sm font-medium text-white"
                >
                  Entradas disponibles
                </label>
                <div className="mt-1">
                  <select
                    defaultValue=""
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    // {...register("ticket", {
                    //   required: true,
                    // })}
                  >
                    <option value="" disabled>
                      Seleccione la entrada
                    </option>
                    {TICKET.map((ticket, index) => {
                      return (
                        <option key={index} value={ticket.id}>
                          {ticket.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-bold text-white">
                Información del pago
              </h2>

              <fieldset className="mt-4">
                <legend className="sr-only">Payment type</legend>
                <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      {paymentMethodIdx === 0 ? (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          // defaultChecked
                          value={paymentMethod.id}
                          checked={selectedPaymentMethod === paymentMethod.id}
                          onChange={handlePaymentMethodChange}
                          className="h-4 w-4 border-gray-300 text-myblue focus:ring-myblue"
                        />
                      ) : (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          value={paymentMethod.id}
                          checked={selectedPaymentMethod === paymentMethod.id}
                          onChange={handlePaymentMethodChange}
                          className="h-4 w-4 border-gray-300 text-myblue focus:ring-myblue"
                        />
                      )}

                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block text-sm font-medium text-white"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>

              {/* Using cards */}
              {selectedPaymentMethod === "mobile-payment" && <MobilePayment />}
              {selectedPaymentMethod === "transfer" && <Transfer />}
              {selectedPaymentMethod === "zelle" && <Zelle />}

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="col-span-4">
                  <label
                    htmlFor="card-number"
                    className="block text-sm font-medium text-white"
                  >
                    Refencia de la transacción
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="card-number"
                      name="card-number"
                      autoComplete="cc-number"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border-gray-200 py-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-myblue px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-myblue focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirmar pago
              </button>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0 flex justify-center items-center">
            <div>
              <img
                src={map}
                alt="map_icon"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

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
