
import { useEffect, useState } from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostList.module.css';
import { DiVim } from 'react-icons/di';

function PostsList({ isPosting, onStopPosting }) {
    fetch('http://localhost:8080/posts');
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }
        fetchPosts();
    }, []);
    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // setPosts([postData, ...posts]); else use below
        setPosts((existingPosts) => [postData, ...existingPosts]);

    }

    return (
        <>
            {isPosting ? (<Modal onClose={onStopPosting}>
                <NewPost
                    onCancle={onStopPosting} onPostAdd={addPostHandler}
                />
            </Modal>
            ) : false}
            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {!isFetching && posts.length === 0 && <div style={{ textAlign: 'center', color: 'white' }}>
                <h2>There are no posts yet...</h2>
                <p>Start adding some Post!!</p>
            </div>}
            {isFetching &&(
                <div style={{ textAlign: 'center', color: 'white' }} >
                    <p>Loading Post ......</p>
                </div>
            )}
        </>
    );
}
export default PostsList;