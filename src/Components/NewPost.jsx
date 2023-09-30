
import classes from "./NewPost.module.css"
const NewPost = ({handleChange,onAutherChange}) => {
 
  return (
    <form className={classes.form}>
       <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChange}/>
       </p>
       <p>
        <label htmlFor="body">Your Name.</label>
        <input id="name"  type="text"  required onChange={onAutherChange}/>
       </p>
    </form>
    );
}
 
export default NewPost;