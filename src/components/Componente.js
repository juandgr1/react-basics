import React, {Component} from "react";


// FORMA 3 - COMPONENTE EN FUNCION EXPRESADA CON LAS ARROW FUNCTION
const Componente = props => <h2>{props.msg}</h2>

// FORMA 2 COMPONENTE EN FORMATO DE FUNCION DECLARADA
// function Componente(props) {
//     return <h2>{props.msg}</h2>;
// }

// FORMA 1 COMPONENTES EN CLASE 
// class Componente extends Component {
//     render() {
//         return <h2>{this.props.msg}</h2>
//     }
// }

export default Componente;