import React from "react";
//useSelector es un hook de redux, que equivale a mapStateToProps. useDispatch es para las acciones
import { useSelector, useDispatch } from "react-redux";
import { Button, Jumbotron } from "reactstrap";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  //acepta funcion como parametro, y esta funcion es llamada como selector.
  //recibe state como argumento, muy similar al mapStateToProps
  //ese cake es por el rootReducer
  const numOfCakes = useSelector(state => state.cake.numOfCakes);

  //useDispatch retorna una referencia al dispatch en redux
  const dispatch = useDispatch();

  return (
    <div>
      <Jumbotron>
        <h2>Number of cakes: {numOfCakes} </h2>
        <Button color="danger" size="lg" onClick={() => dispatch(buyCake())}>
          Buy cake!
        </Button>
      </Jumbotron>
    </div>
  );
};

export default HooksCakeContainer;
