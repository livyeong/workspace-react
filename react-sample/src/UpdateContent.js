import { Component } from "react";

class UdateContent extends Component {
  render() {
    return (
      <article>
        <h2>Update Content</h2>
        <form action="/update_process" method="post">
          <p><input type='text' name='title'></input></p>
          <p><textarea name="desc"></textarea></p>
          <p><input type='text' name='title'></input></p>
        </form>
      </article>
    );
  }
}

export default UdateContent;