import { AiOutlineClose } from 'react-icons/ai';
import css from '../Modal/Modal.module.css'
import Form from "components/Form/Form";


const Modal = ({id, name, number, onClose})=>{
   
return (<>
    <div className={css.backdrop} onClick={onClose}></div>
    <div className={css.modal}>
    <Form 
    id={id}
    name={name}
    number={number}
    onClose={onClose}/>
    <button className={css.button} onClick={onClose}>
        <AiOutlineClose/>
    </button>
    </div>
</>)
}

export default Modal;

