import { useState } from "react";
import css from '../Modal/Modal.module.css'


const Modal = ({isOpen, onClose})=>{
    // const [isOpen, setIsOpen] = useState(false);
   

return (<>
    <div className={css.modal}>
    hello
    <button onClick={onClose}>Закрити</button>
    </div>
</>)
}

export default Modal;

// const Modal = ({ isOpen, onClose }) => {
//     return (
//       // Стилі для модального вікна, які визначають його розташування та вигляд
//       <div
       
//       >
//         {/* Зміст модального вікна */}
//         <p>Це модальне вікно!</p>
  
//         {/* Кнопка для закриття модального вікна */}
//         <button onClick={onClose}>Закрити</button>
//       </div>
//     );
//   };