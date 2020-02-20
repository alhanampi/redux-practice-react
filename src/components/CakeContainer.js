import React from "react";
import { Button, Jumbotron } from "reactstrap";
//conectar el HOC:
import { connect } from "react-redux";
//importo los action creator desde el index.js, no desde el archivo del action
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <Jumbotron>
        <h2>Number of cakes: {props.numOfCakes}</h2>
        <Button color="success" size="lg" onClick={props.buyCake}>
          Buy cake!
        </Button>
      </Jumbotron>
    </div>
  );
}

//paso 1: traigo el state y lo mapeo. Mapea el state a props
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

//paso 2: hago el dispatch del action creator. Mapea el dispatch del action creator a un prop y por eso puedo llamarlo así
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

//paso 3: conecto el hoc:
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
