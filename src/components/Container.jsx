import React, { useState } from "react";
// en el componente container  va a contener tanto el input que es el Tasklist como el formTodo que es lo que contiene el array que se trae por el ingreso de las tareas 
import TaskList from "./Tasklist"; // se importa el componente TaskList
import FormTodo from "./FormTodo";// se importa el componente FromTodo

const Container = () => {
const [list, setList] = useState([]); //  array vacio que me setea una lista y se usa el useState para que me cambie el estado

const handleAddItem = addItem => {// recibe el atributo que declaramos en el formTodo, que recibe unas caracteristicas
setList([...list, addItem]); //  se recibe la tarea y la va organizando en una lista mendiante el array  
};
return (
<div>

<FormTodo handleAddItem={handleAddItem} />

<TaskList list={list} setList={setList} />
</div>
);
};

export default Container;// me esta retornando el codigo HTML, donde me agrupa en un div los elementos de input y lista 
