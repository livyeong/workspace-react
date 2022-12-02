import React, { Component } from 'react';

class ReadContent extends Component {
  render() {
    return (
      <article>
        {/* props.title 적용 */}
        <h2>{this.props.title}</h2>
        {/* props.desc 적용 */}
        {this.props.desc}

        {/* App.js에서 state(contents를 그대로)값을 받아와서, 항목 출력 */}
        {/* <h2>{this.props.contents[0].title}</h2>
        {this.props.contents[0].desc} */}
      </article>
    );
  }
}

export default ReadContent;