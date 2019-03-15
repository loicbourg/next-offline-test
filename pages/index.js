import React from 'react'
import axios from 'axios';
import Link from 'next/link'
import Head from 'next/head'


class HelloUA extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get('http://localhost:8080/api/posts/', {responseType: 'json'});

    return { posts: response.data }
  }

  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous" />
        </Head>

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
