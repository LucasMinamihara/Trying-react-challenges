import "./HeaderComponent.css";

function HeaderComponent(props) {
  return (
    <form className="formulario">
      <label>
        <div>Title</div>
        <input type="text" name="title"></input>
      </label>
      <label>
        <div>Amount</div>
        <input type="number" name="amout"></input>
      </label>
      <label>
        <div>Date</div>
        <input type="date" name="date"></input>
      </label>
      <button className="botaoAdicionar" onClick={props.inserirNovoDados}>
        Adicionar Valor!
      </button>
    </form>
  );
}

export default HeaderComponent;
