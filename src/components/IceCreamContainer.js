import React from "react";
import { Button, Jumbotron } from "reactstrap";
//conectar el HOC:
import { connect } from "react-redux";
//importo los action creator desde el index.js, no desde el archivo del action
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <Jumbotron>
        <h2>Number of Icecreams: {props.numOfIceCream}</h2>
        <Button color="primary" size="lg" onClick={props.buyIceCream}>
          Buy Icecream!
        </Button>
      </Jumbotron>
    </div>
  );
}

//paso 1: traigo el state y lo mapeo. Mapea el state a props
const mapStateToProps = state => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream
  };
};

//paso 2: hago el dispatch del action creator. Mapea el dispatch del action creator a un prop y por eso puedo llamarlo así
const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
};

//paso 3: conecto el hoc:
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
