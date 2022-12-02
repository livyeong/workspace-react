import React, { Component } from 'react';

class TOC extends Component {
  render() {
    const list = [];
    for (let i = 0; i < this.props.contents.length; i++) {
      const content = this.props.contents[i]; //0 ,1 ,2
      list.push(
        // for 문으로 li를 표현할때 key속성을 추가 해줘야한다.
        // unique한 값을 세팅 해줘야한다.
        <li key={content.id}>
          <a href={"/content/" + content.id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onSelect(content.id);
            }.bind(this)}>{content.title}</a>
        </li>
      )
    }
    return (
      // <nav>
      //   <ul>
      //     {/* <li>
      //       <a href={this.props.contents[0].id + ".html"}
      //         onClick={function (e) {
      //           e.preventDefault();
      //           this.props.onSelect(this.props.contents[0].id);
      //         }.bind(this)}>{this.props.contents[0].title}</a>
      //     </li>
      //     <li>
      //       <a href={this.props.contents[1].id + ".html"}
      //         onClick={function (e) {
      //           e.preventDefault();
      //           this.props.onSelect(this.props.contents[1].id);
      //         }.bind(this)}>{this.props.contents[1].title}</a>
      //     </li>
      //     <li>
      //       <a href={this.props.contents[2].id + ".html"}
      //         onClick={function (e) {
      //           e.preventDefault();
      //           this.props.onSelect(this.props.contents[2].id);
      //         }.bind(this)}>{this.props.contents[2].title}</a>
      //     </li> */}
      //   </ul>
      // </nav>

      //for문을 활용한 li태그 표시
      <nav>
        <ul>
          {list}
        </ul>
      </nav>
    );
  }
}

export default TOC;