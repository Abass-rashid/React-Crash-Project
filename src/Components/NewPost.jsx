
import classes from "./NewPost.module.css"
const NewPost = ({handleChange,onAutherChange,onCancel}) => {
 
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
       <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
       </p>
    </form>
    );
}
 
export default NewPost;