// import { useState } from "react";
import css from '../Modal/Modal.module.css'
import Form from "components/Form/Form";


const Modal = ({id, name, number, isOpen, onClose})=>{
   
return (<>
    <div className={css.modal}>
    <Form 
    id={id}
    name={name}
    number={number}/>
    <button onClick={onClose}>Закрити</button>
    </div>
</>)
}

export default Modal;

