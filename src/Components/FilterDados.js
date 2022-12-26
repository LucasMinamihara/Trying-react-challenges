import "./FilterDados.css";

function FilterDados(props) {
  
  return (
    <>
      <div className="resultadoParte">
        Title: {props.title}, Amount: {props.amount}, Date: {props.date}
      </div>
    </>
  );
}

export default FilterDados;
