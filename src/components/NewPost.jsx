import { useState } from 'react'; 
import classes from './NewPost.module.css';

function NewPost({onCancle, onPostAdd }) {
  const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    

    function BodychangeHandler(event) {
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
      event.preventDefault();
      const postData ={
        body:  enteredBody,
        author: enteredAuthor
      };
      onPostAdd(postData);
      onCancle();
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={BodychangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.action}>
        <button type="button" onClick={onCancle} className={classes.button}>Cancle</button>
        <button className={classes.button}>Submit</button>
      </p>
    </form>
  );
}

   export default NewPost;