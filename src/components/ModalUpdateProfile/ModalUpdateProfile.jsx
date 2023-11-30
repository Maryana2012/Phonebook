import { AiOutlineClose } from 'react-icons/ai';
import css from '../ModalUpdateProfile/ModalUpdateProfile.module.css'
import FormUpdateProfile from 'components/FormUpdateProfile/FormUpdateProfile';


const ModalUpdateProfile = ({onClose})=>{
   
return (<>
    <div className={css.backdrop} onClick={onClose}></div>
    <div className={css.modal}>
   
    <button className={css.button} onClick={onClose}>
        <AiOutlineClose/>
    </button>
    <FormUpdateProfile onClose={onClose}/>
    </div>
</>)
}

export default ModalUpdateProfile;