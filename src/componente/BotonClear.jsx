import React from "react";
import "../css/BotonClear.css";
export const BotonClear = (props) => (
	<div 
        className="boton-clear" 
        onClick={props.manejarClear}
    >
		{props.children}
	</div>
);
