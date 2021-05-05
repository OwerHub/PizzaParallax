function TableDraws(props) {
  console.log(
    "table: " + props.tableNr + "  avilable:" + props.avilable[props.tableNr - 1]
  );

  function bgAvilable() {
    if (props.avilable[props.tableNr - 1] == 0) {
      return "blue";
    } else {
      return "green";
    }
  }

  const tryStyle = {
    backgroundColor: bgAvilable(),
    height: "20vh",
    width: "30vw",
    margin: "10px",
    color: "white",
  };

  return (
    <div>
      <div style={tryStyle}>Asztalikon helye</div>
    </div>
  );
}

export default TableDraws;
