const names = ["Hassan", "Ibrahim", "Jafar"];

const Post = () => {
  const chosenRand = Math.random() > 0.3 ? names[0] : names[2];
    return ( 
    <div>
      <p>{chosenRand}</p>
      <p>React Js is Awesome!</p>
    </div>
   );
}
 
export default Post;