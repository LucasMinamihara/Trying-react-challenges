import { useState } from "react";
import "./FilterComponent.css";
import FilterDados from "./FilterDados";

function FilterComponent(props) {
  const [valor, mudandoValor] = useState("2022");
  const [exibicao, mudandoExibicao] = useState("Aqui aparecerá o resultado!");
  const valoresAno = [
    "esse é de 2022",
    "esse é de 2021",
    "esse é de 2020",
    "esse é de 2019",
  ];

  let novoValor;

  function mudandoResultado(e) {
    novoValor = e.target.value;
    mudandoValor(novoValor);
    console.log(novoValor);
    valoresAno.map((e) => {
      if (e.includes(novoValor)) {
        mudandoExibicao(e);
      }
    });
  }

  return (
    <>
      <div className="filterSecao">
        <div className="textFilter">Filter by Year</div>
        <select
          value={valor}
          onChange={mudandoResultado}
          className="secaoOpcoes"
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {/* <div className="resultadoParte">{exibicao}</div> */}
      {props.valores.map((e) => {
        // display values from object!
        <FilterDados></FilterDados>;
      })}
    </>
  );
}

export default FilterComponent;
