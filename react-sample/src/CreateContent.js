import { Component } from 'react';

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create Content</h2>
        <form action='/create_process' method='post'
          onSubmit={function (e) {
            e.preventDefault();
            //form태그에서 name을 주게되면 데이터에 파라미터명(변수명)을 줄수있다.
            const title = e.target.title.value;
            const desc = e.target.desc.value;
            this.props.onSubmit(title, desc);
          }.bind(this)}>
          <p><input type='text' name='title'></input></p>
          <p><textarea name='desc'></textarea></p>
          <p><input type='submit'></input></p>
        </form>
      </article>
    );
  }
}

export default CreateContent;