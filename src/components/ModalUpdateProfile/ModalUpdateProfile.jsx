import { AiOutlineClose } from 'react-icons/ai';
import css from '../Modal/Modal.module.css'


const ModalUpdateProfile = ({onClose})=>{
   
return (<>
    <div className={css.backdrop} onClick={onClose}></div>
    <div className={css.modal}>
   
    <button className={css.button} onClick={onClose}>
        <AiOutlineClose/>
    </button>
    </div>
</>)
}

export default ModalUpdateProfile;