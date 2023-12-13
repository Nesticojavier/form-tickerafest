import "tailwindcss/tailwind.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import map from "./assets/map.png";
import logo from "./assets/retro-experience.png";
import tickerafest from "./assets/logo-tickerafest.png";
import { INPUTS } from "./utils/validators";

function App() {
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
  return (
    <>
      <div
        className="h-auto bg-gradient-to-b from-myblue to-black flex flex-col p-12 items-center"
        // className="bg-[linear-gradient(to_bottom,rgba(254,21,119,0.5),#000),url('/src/assets/map.png')] h-40"
      >
        <div>
          <img
            src={logo}
            alt="logo"
            style={{ width: "250px", height: "auto" }}
          />
        </div>
        <div className="text-white text-4xl ">
          {/* <div className="text-transparent bg-clip-text bg-gradient-to-r to-white from-fucsia text-4xl "> */}
          LA NOCHE DE LAS TRES DÉCADAS
        </div>
      </div>

      <div className="bg-black flex justify-center">
        <div className="m-4">
          <img
            src={map}
            alt="payment_icon"
            style={{ width: "350px", height: "auto" }}
          />
        </div>
        <div className="m-4 flex items-center">
          <form className="" onSubmit={onSubmit}>
            <h1 className="text-white text-xl font-bold  mb-6 flex justify-center">
              RESERVA TU ENTRADA AQUÍ
            </h1>
            <div className="grid grid-cols-1 gap-2">
              {/* basic inputs */}
              {INPUTS.map((input) => (
                <div key={input.id} className="flex flex-col">
                  <input
                    className="border rounded w-full py-2 px-3"
                    type="text"
                    placeholder={input.placeholder}
                    {...register(input.name, input.rules)}
                  />
                  {errors.hasOwnProperty(input.name) && (
                    <span className="text-red-700">
                      {errors[input.name].message}
                    </span>
                  )}
                  {input.name === "idcard" && (
                    <p className="text-white text-xs">
                      Ejemplo de CI/RIF: V-12345678, J-12345678
                    </p>
                  )}
                </div>
              ))}

              {/* Payment method field */}
              <div className="flex flex-col">
                <select
                  className="border rounded w-full py-2 px-3"
                  name=""
                  id=""
                  {...register("payment_method", {
                    required: true,
                  })}
                >
                  <option value="" disabled selected>
                    Método de pago
                  </option>
                  <option value="1">Transferencia</option>
                  <option value="2">Pago móvil</option>
                  <option value="3">Zelle</option>
                </select>
                {errors.payment_method && (
                  <span className="text-red-700">
                    Seleccione un método de pago
                  </span>
                )}
              </div>

              {/* reference field */}
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Refencia del pago"
                  className="border rounded w-full py-2 px-3"
                  {...register("reference", {
                    required: true,
                  })}
                />
                {errors.reference && (
                  <span className="text-red-700">
                    Debe agregar referencia de pago
                  </span>
                )}
              </div>

              {/* ticket type field */}
              <div className="flex flex-col">
                <select
                  className="border rounded w-full py-2 px-3"
                  name=""
                  id=""
                  {...register("ticket_type", {
                    required: true,
                  })}
                >
                  <option value="" disabled selected>
                    Tipo de entrada
                  </option>
                  <option value="1">Mesa Oro</option>
                  <option value="2">Mesa Plata</option>
                  <option value="3">Entrada General</option>
                </select>
                {errors.ticket_type && (
                  <span className="text-red-700">
                    Seleccione un tipo de entrada
                  </span>
                )}
              </div>

              {/* ticked code field */}
              <div className="flex flex-col">
                <select
                  className="border rounded w-full py-2 px-3"
                  name=""
                  id=""
                  {...register("ticket", {
                    required: true,
                  })}
                >
                  <option value="" disabled selected>
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
                  <span className="text-red-700">
                    Seleccione una entrada
                  </span>
                )}
              </div>
            </div>

            <button className="bg-white mt-4">Enviar</button>
          </form>
        </div>
      </div>
      {/* <div className="bg-[url('/src/assets/bg-footer.jpg')] h-80 w-full bg-cover bg-center p-16"> */}
      <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.0),#000),url('/src/assets/bg-footer.jpg')] h-80 w-full bg-cover bg-center p-16">
        {/* <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0),#000),url('/src/assets/bg-footer.jpg')] h-40"> */}

        <div className="h-full flex flex-col items-center justify-end">
          <a
            className="h-full flex flex-col items-center justify-end"
            href="http://www.tickerafest.com"
            target="_blank"
          >
            <img
              src={tickerafest}
              alt="logo"
              style={{ width: "200px", height: "auto" }}
            />
            <p className="text-white">
              Visita nuestra página oficial para más información
            </p>
          </a>
        </div>
      </div>
    </>
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

export default App;
