import React from 'react'
import axios from 'axios';
import Link from 'next/link'


class HelloUA extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get('http://localhost:8080/api/posts/', {responseType: 'json'});

    return { posts: response.data }
  }

  render() {
    console.log(this.props.posts);

    return (
      <div>
        Hello Worlddd
        <ul>
        {this.props.posts.map(
          post => <li key={post.id} >
            <Link href={`/post?id=${post.id}`} as={`/posts/${post.id}`} ><a>{post.title}</a></Link>
          </li>
        )}
        </ul>
      </div>
    )
  }
}

export default HelloUA
