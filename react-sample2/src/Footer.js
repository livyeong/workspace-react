import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const list = [];
    for (let i = 0; i < this.props.desc.length; i++) {
      // console.log(this.props.desc[i]); -> 데이터가 정상적으로 가져와지는지 테스트
      const desc = this.props.desc[i];
      list.push(
        <h5 key={i} onClick={function (e) {
          //부모컴포넌트(App.js)에서 정의한 onChangeStyle함수를 실행시키는데,
          //이벤트가 발생하는 객체의정보(e)를 파라미터로 넘겨준다. 
          this.props.onChangeStyle(e);
        }.bind(this)}>{desc}</h5>
      );
    }
    return (
      <footer>
        {/* for문을 사용하여 h5태그를 한꺼번에 출력 */}
        {list}

        {/* for문을 사용하지 않고 h5태그 5개를 배치 */}
        {/* <h5>{this.props.desc[0]}</h5>
        <h5>{this.props.desc[1]}</h5>
        <h5>{this.props.desc[2]}</h5>
        <h5>{this.props.desc[3]}</h5>
        <h5>{this.props.desc[4]}</h5> */}

      </footer>
    );
  }
}

export default Footer;