import { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a href='/create' onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a>
        </li>
        <li>
          {/* 클릭했을때 onChangeMode를 통해서 mode가 update로 변경되도록 */}
          <a href='/update' onClick={function (e) {
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a>
        </li>
        <li>
          {/* 클릭했을때 onChangeMode를 통해서 mode가 delete로 변경되도록 */}
          <button onClick={function () {
            this.props.onChangeMode('delete');
          }.bind(this)}>delete</button>
        </li>
      </ul>
    );
  }
}

export default Control;