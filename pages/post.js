import React, { Component } from 'react';
import axios from "axios";
import Link from 'next/link'

class post extends Component {
  static async getInitialProps(context) {
    const response = await axios.get(`http://localhost:8080/api/posts/${context.query.id}`, {responseType: 'json'});

    return { post: response.data }
  }

  render() {
    console.log(this.props);

    return (<div>
      <Link href={`/`} ><a>GO BACK</a></Link>

      <br />
      <h1>{this.props.post.title}</h1>
      <p><b>Written BY</b> {this.props.post.author} </p>
    </div>);
  }
}

export default post;