import { useState } from "react";
import classes from "./NewPost.module.css"
const NewPost = ({onCancel,onAddPost}) => {
  const [enteredBody, setEnteredBody] = useState("")
  const [enteredAuther, setEnteredAuther] = useState("");
  const handleChange = (event) => {
    setEnteredBody(event.target.value)
}
  const handleAuther = (event) => {
    setEnteredAuther(event.target.value)
}

const submitHandler = (event) => {
  event.preventDefault();
  const PostData = {
    body: enteredBody,
    author: enteredAuther
    };
    onAddPost(PostData);
    onCancel();
}
  return (
    <form className={classes.form} onSubmit={submitHandler}>
       <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChange}/>
       </p>
       <p>
        <label htmlFor="body">Your Name.</label>
        <input id="name"  type="text"  required onChange={handleAuther}/>
       </p>
       <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
       </p>
    </form>
    );
}
 
export default NewPost;