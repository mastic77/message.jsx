
import { useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

function PostsList(){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuther, setEnteredAuther]= useState('');

    function BodychangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuther(event.target.value);
    }
    return(
        <>
        <NewPost onBodyChange={BodychangeHandler} onAuthorChange={authorChangeHandler}/>
        <ul className={classes.posts}>
            <Post auther={enteredAuther} body={enteredBody}/>
            <Post auther="Manuel" body="check out the react" />     
        </ul>
        </>
    );
}
export default PostsList;