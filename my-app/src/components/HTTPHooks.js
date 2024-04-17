import React, {useEffect, useState,} from 'react'
import axios from 'axios'

function HTTPHooks() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts/',
            {
                title: 'Hello world!',
                body: 'It works!',
                userId: 123,
            }
        ).then(response => {
            console.log(response)
            })
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            const data = Array.isArray(response.data)
                ? response.data
                : [response.data]
            setPosts(data);
        })
        .catch(error => {
          setError(error.message);
        })
    }, [])
    return (
        <div>
          <button onClick={postToApi}>
              Create Post
          </button>
          <h2>Posts:</h2>
          {
            posts.length ? (
              posts.map(posts => (
                <div key={posts.id}>
                  <h2>{posts.id}. {posts.title}</h2>
                  <h4>By User ID {posts.userID}</h4>
                  <p>{posts.body}</p>
                  <hr />
                </div>
              ))
            ) : (
              error
              ? <p>{error}</p>
              : <h4>Loading posts ...</h4>
            )
          }
        </div>
      )
}

export default HTTPHooks