import React from "react";
//useSelector es un hook de redux, que equivale a mapStateToProps. useDispatch es para las acciones
import { useSelector, useDispatch } from "react-redux";
import { Button, Jumbotron } from "reactstrap";
import { buyMilkshake } from "../redux";

const HooksMilkshake = () => {
   const numOfMilkshakes = useSelector(state => state.milkshake.numOfMilkshake);

  //useDispatch retorna una referencia al dispatch en redux
  const dispatch = useDispatch();

  return (
    <div>
      <Jumbotron>
        <h2>Number of milkshakes: {numOfMilkshakes} </h2>
        <Button color="secondary" size="lg" onClick={() => dispatch(buyMilkshake())}>
          Buy milkshake!
        </Button>
      </Jumbotron>
    </div>
  );
};

export default HooksMilkshake;
