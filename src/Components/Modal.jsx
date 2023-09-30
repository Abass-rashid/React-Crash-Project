import classes from "./Modal.module.css"
const Modal = ({children,onModal}) => {
  return (  
    <>
      <div className={classes.backdrop} onClick={onModal}/>
    <dialog open={true} className={classes.modal}>{children}</dialog>
    </>
  );
}
 
export default Modal;