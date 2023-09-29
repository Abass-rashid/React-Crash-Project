import classes from "./Post.module.css"
const Post = ({name, value}) => {
 
    return ( 
    <div className={classes.Post}>
      <p className={classes.author}>{name}</p>
      <h3 className={classes.text}>{value}</h3>
    </div>
   );
}
 
export default Post;