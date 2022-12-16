import React, { useState } from "react";//  useState manejo de estados
// variables constantes donde se ingresan eventos y propiedades en javascript
const FormTodo = props => {
  const { handleAddItem } = props; //(C-1)  metodo propiedades  y caracateristicas que se comparten en algun parametros  que puedo llamar a lo largo del codigo
  const [description, setDescription] = useState(""); // (F-1)
  const handleSubmit = (e) => {
    e.preventDefault(); // (E)
    // (C-2)
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),//método devuelve una cadena que representa el objeto
      description,
    });
    setDescription(""); // (B)
  };
  return (//  Me va a retornar mi estructura html 
    //Esta función recibirá los datos del formulario si la validación del formulario es exitosa.
    <form onSubmit={handleSubmit}> 
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <input  // input espacio para agregar un dato
            type="text"
            className="text"
            value={description} // valor del texto que voy a poner en input que lo toma como valor
            onChange={e => setDescription(e.target.value)}
            required={description ? "" : "required"}
          />
          {/*(A)*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"} // boton deshabilitado hasta no incluir un dato en el input
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;