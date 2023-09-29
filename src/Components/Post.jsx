import classes from "./Post.module.css"
const Post = ({name, value}) => {
 
    return ( 
    <li className={classes.post}>
      <p className={classes.author}>{name}</p>
    <h3 className={classes.text}>{value}</h3>
    </li>
   );
}
 
export default Post;