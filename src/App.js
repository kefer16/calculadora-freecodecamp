import "./App.css";
import freeCodeCampLogo from "./imagenes/free-code-camp.png";
import { Boton } from "./componente/Boton";
import { Pantalla } from "./componente/Pantalla";
import { BotonClear } from "./componente/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
	const [input, setInput] = useState("");

	const agregarInput = (val) => {
		setInput(input + val);
	};

	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input));
		}
	};

	return (
		<div className="App">
			<div className="freecodecamp-logo-contenedor">
				<img
					src={freeCodeCampLogo}
					className="freecodecamp-logo"
					alt="logo de freecodecamp"
				/>
			</div>
			<div className="contenedor-calculadora">
				<Pantalla input={input} />
				<div className="fila">
					<Boton manejarClic={agregarInput}>1</Boton>
					<Boton manejarClic={agregarInput}>2</Boton>
					<Boton manejarClic={agregarInput}>3</Boton>
					<Boton manejarClic={agregarInput}>+</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={agregarInput}>4</Boton>
					<Boton manejarClic={agregarInput}>5</Boton>
					<Boton manejarClic={agregarInput}>6</Boton>
					<Boton manejarClic={agregarInput}>-</Boton>
				</div>
				<div className="fila">
					<Boton manejarClic={agregarInput}>7</Boton>
					<Boton manejarClic={agregarInput}>8</Boton>
					<Boton manejarClic={agregarInput}>9</Boton>
					<Boton manejarClic={agregarInput}>*</Boton>
				</div>
				<div className="fila"></div>
				<div className="fila">
					<Boton manejarClic={calcularResultado}>=</Boton>
					<Boton manejarClic={agregarInput}>0</Boton>
					<Boton manejarClic={agregarInput}>.</Boton>
					<Boton manejarClic={agregarInput}>/</Boton>
				</div>
				<div className="fila">
					<BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
