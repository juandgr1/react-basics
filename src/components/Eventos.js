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