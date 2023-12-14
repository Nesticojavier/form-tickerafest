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
import PaymentMethodCard from "./cards/PaymentMethodCard";
import map from "../assets/map.png";
import { useForm } from "react-hook-form";
import { RULES } from "../utils/validators";
import Warning from "./icons/warning";
import ErrorMessage from "./ErrorMessage";
import {
  ticketTypes,
  paymentMethods,
  MOBILE_PAYMENTS,
  TRANSFER_METHOD,
  ZELLE_METHOD,
  TICKET,
} from "../utils/staticFormData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Form() {
  const [selectedTicketType, setSelectedTicketType] = useState(ticketTypes[0]);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0].id
  );

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
    console.log(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    console.log("Enviar al backend");
  });

  // console.log(selectedTicketType);
  // console.log(selectedPaymentMethod);
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-white text-center text-2xl font-bold mb-4">
          RESERVE SU ENTRADA AQUÍ
        </h1>
        <form
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          onSubmit={onSubmit}
        >
          <div>
            <div className="">
              <h2 className="text-lg font-bold text-white">
                Información personal
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Nombre
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      {...register("name", RULES.name)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.name && (
                    <ErrorMessage message={errors.name.message} />
                  )}
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
                      id="lastname"
                      {...register("lastname", RULES.lastname)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.lastname && (
                    <ErrorMessage message={errors.lastname.message} />
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="idcard"
                    className="block text-sm font-medium text-white"
                  >
                    Cédula/RIF
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="idcard"
                      placeholder="V-XXXXXXXX, J-XXXXXXXX, ..."
                      {...register("idcard", RULES.idcard)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.idcard && (
                    <ErrorMessage message={errors.idcard.message} />
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Correo electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="email"
                      {...register("email", RULES.email)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.email && (
                    <ErrorMessage message={errors.email.message} />
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-white"
                  >
                    Ciudad
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="city"
                      {...register("city", RULES.city)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.city && (
                    <ErrorMessage message={errors.city.message} />
                  )}
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
                      id="phone"
                      {...register("phone", RULES.phone)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.phone && (
                    <ErrorMessage message={errors.phone.message} />
                  )}
                </div>
              </div>
            </div>

            {/* Buy Information */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <RadioGroup
                value={selectedTicketType}
                onChange={setSelectedTicketType}
              >
                <RadioGroup.Label className="text-lg font-bold text-white">
                  Información de la compra
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                  {ticketTypes.map((ticketType) => (
                    <RadioGroup.Option
                      key={ticketType.id}
                      value={ticketType}
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
                                {ticketType.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 flex items-center text-sm text-gray-700"
                              >
                                {ticketType.turnaround}
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                as="span"
                                className="mt-6 text-sm font-bold text-black"
                              >
                                {ticketType.price}
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
                    {...register("ticket", RULES.ticket)}
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
                  {errors.ticket && (
                    <ErrorMessage message={errors.ticket.message} />
                  )}
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
              {selectedPaymentMethod === "mobile-payment" && (
                <PaymentMethodCard method={MOBILE_PAYMENTS} />
              )}
              {selectedPaymentMethod === "transfer" && (
                <PaymentMethodCard method={TRANSFER_METHOD} />
              )}
              {selectedPaymentMethod === "zelle" && (
                <PaymentMethodCard method={ZELLE_METHOD} />
              )}

              <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
                <div className="col-span-4">
                  <label
                    htmlFor="reference"
                    className="block text-sm font-medium text-white"
                  >
                    Refencia de la transacción
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="reference"
                      {...register("reference", RULES.reference)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-myblue focus:ring-myblue sm:text-sm"
                    />
                  </div>
                  {errors.reference && (
                    <ErrorMessage message={errors.reference.message} />
                  )}
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