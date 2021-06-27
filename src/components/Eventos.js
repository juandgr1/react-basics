import React, {Component} from 'react' 

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);

    }


    //Cuando se utiliza un componente basado en clasess, la recomendación de react ess hacer el   
    // bind del this, dentro del constructor. 
    // React al principio acostumbraba a crear los componentess basadoss en clases, ahora se hacen de forma funcional,
    // por ahora este ejemplo es basado en clases... esto cambio cuando nacieron los hooks. 

    sumar(e){
        console.log("sumando");
        console.log(this);
        this.setState({
            contador:this.state.contador+1,
        });
    }
    
    restar(e){
        console.log("restando");
        console.log(this);
        this.setState({
            contador:this.state.contador-1,
        });
    }
    

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}
// Esto se crea ahora con una caracteristica que se llama
// Properties Initializer
export class EventosES7 extends Component{
    
    // Gracias a esta propiedad es posible eliminar el constructor. 
    state = {
        contador: 0,
    };

// ahora es necesario definir los eventos con las
// Arrow functions

    sumar = (e) => {
        console.log("sumando");
        console.log(this);
        this.setState({
            contador:this.state.contador+1,
        });
    }
    
    restar = (e) => {
        console.log("restando");
        console.log(this);
        this.setState({
            contador:this.state.contador-1,
        });
    }
    

    render(){
        return(
            <div>
                <h2>Eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// OPCION 1: SE PUEDE OPTIMIZAR ESTA PORCION DE CODIGO, YA QUE SI SE HACE COMO FUNCION, HAY QUE 
// HACER UN RETORNO EXPLICITO...  Y SEE PUEDEN OPTIMIZAR LINEAS DE CODIGO
// function Boton (props) {
//     return(
//         <button onClick={props.MyOnClick}>Boton hecho componente</button>
//     );
//}

// SE PUEDEN CREAR VARIABLES EXPRESADAS 
// LAS ARROW FUNCTIONS HACEN UN RETURN IMPLICITO !!!1

// OPCION 1: SE PUEDE SIMPLIFICAR MAS ESTA COMPONENTE 
// const Boton = (props) => (
//     <button onClick={props.MyOnClick}>Boton hecho componente</button>
// );

const Boton = ({MyOnClick}) => (
    <button onClick={MyOnClick}>Boton hecho componente</button>
);




export class MasSobreEventos extends Component{

    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }

    render(){
        return(
            <div>
                <h2>Mas Sobre Eventos</h2>
                <button onClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}>Saludar</button>
                {/* Evento personalizado */}
                {/* <Boton onClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}/> */}
                <Boton MyOnClick={(e) => this.handleClick(e, "Hola pasando parametro desde un evento")}/>
            </div>
        )
    }
}