import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: null
        }
      }
      componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response);
            this.setState({
              posts: Array.isArray(response.data)
              ? response.data
              : [response.data]
            })
        })
        .catch(error => {
          this.setState({
            error: error.message
          })
        })
      }
      render() {
        const posts = this.state.posts;
        return (
          <div>
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
                this.state.error
                ? <p>{this.state.error}</p>
                : <h4>Loading posts ...</h4>
              )
            }
          </div>
        )
    }
}

export default HTTPRequests