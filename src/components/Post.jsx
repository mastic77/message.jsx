  import classes from './Post.module.css';
 function Post(props) {
    return ( <div className={classes.post}>
        <p className="classes.text">{props.body}</p>
        <p className="classes.auther">{props.auther}</p>
    </div>
  );
 }

    export default Post;