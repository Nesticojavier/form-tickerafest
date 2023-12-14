import "tailwindcss/tailwind.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import map from "./assets/map.png";
import logo from "./assets/retro-experience.png";
import tickerafest from "./assets/logo-tickerafest.png";
import Form from "./components/form.jsx";

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

      

      <div className="bg-red-500">
        <Form />
      </div>

      <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.0),#000),url('/src/assets/bg-footer.jpg')] h-80 w-full bg-cover bg-center p-16">
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

export default App;
