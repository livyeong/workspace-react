import React, { Component } from 'react';

class Subject extends Component {
  render() {
    // JS에서의 출력문 : console.log(출력할내용);
    // console.log(this.props);
    return (
      <header>
        {/* 
          컴포넌트 내부에서 전달받은 데이터 사용시 :
          this.props 내부에 있는 데이터의 이름을 활용
        */}
        <h1><a href="" onClick={
          //   function (e) {
          //   // alert('title click');
          //   // console.log('title click');
          //   this.props.onChangeMode(); //App.js에서 작성한 onChangeMode에 지정해놓은 함수가 실행
          //   e.preventDefault(); //HTML요소의 기본동작을 막아준다.
          // }.bind(this)

          //bind(this)를 사용하지않으려면 화살표 함수로 작성해야함
          (e) => {
            e.preventDefault();
            this.props.onChangeMode();
          }
        }>{this.props.title}</a></h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;