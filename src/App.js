import { useState } from "react";
import HeaderComponent from "./Components/HeaderComponent";
import FilterComponent from "./Components/FilterComponent";
import "./App.css";

function App() {
  const valoresDosDados = [
    { title: "Primeiro", amount: "10", date: "10/10/2019" },
    { title: "Segundo", amount: "20", date: "20/03/2020" },
    { title: "Terceiro", amount: "30", date: "09/04/2021" },
    { title: "Quarto", amount: "40", date: "08/12/2019" },
    { title: "Quinto", amount: "50", date: "03/10/2020" },
    { title: "Sexto", amount: "60", date: "04/11/2021" },
    { title: "Sétimo", amount: "70", date: "04/03/2020" },
    { title: "Oitavo", amount: "80", date: "05/04/2021" },
    { title: "Nono", amount: "90", date: "09/03/2019" },
    { title: "Décimo", amount: "100", date: "07/10/2020" },
  ];
  const inserirNovoDados = (e) => {
    e.preventDefault();
    console.log("estou pronto para adicionar valores!");
  };
  return (
    <>
      <HeaderComponent inserirNovoDados={inserirNovoDados}></HeaderComponent>;
      <FilterComponent
        inserirNovoDados={inserirNovoDados}
        valores={valoresDosDados}
      ></FilterComponent>
    </>
  );
}

export default App;
