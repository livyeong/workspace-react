import { Component } from 'react';
import './App.css';

class Rps extends Component {
  render() {
    let com = 0;
    if (this.props.com === 0) {
      com = '가위';
    } else if (this.props.com === 1) {
      com = '바위';
    } else if (this.props.com === 2) {
      com = '보';
    } else {
      com = '-';
    }
    return (
      <div>
        {/* 가위 */}
        <img className='rps_img' src='./scissors.png'
          onClick={function () {
            this.props.onSelect(0);
          }.bind(this)}></img>
        {/* 바위 */}
        <img className='rps_img' src='./rock.png'
          onClick={function () {
            this.props.onSelect(1);
          }.bind(this)}></img>
        {/* 보 */}
        <img className='rps_img' src='./paper.png'
          onClick={function () {
            this.props.onSelect(2);
          }.bind(this)}></img>
        <h1>컴퓨터 : {this.props.com === '-' ? '-' : com}</h1>
        <h1>결과 : {this.props.result}</h1>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      you: '-', com: '-', result: '선택해주세요.'
    }
  }
  //가위바위보 로직
  // 가위 : 0 , 바위 : 1 , 보 : 2
  // 사용자 가 가위,바위,보를 냈을때의 경우의 수
  // 내가 지는경우의 수
  // 나 : 가위(0) , 컴퓨터 : 바위(1) 
  // 나 : 바위(1) , 컴퓨터 : 보(2)
  // 나 : 보(2) , 컴퓨터 : 가위(0)
  // (내가낸 숫자(가위바위보) + 1) % 3 
  // 가위를 내면 = 1 , 바위를 내면 = 2 , 보를 내면 = 0
  check(you) { //가위바위보 결과 체크 함수
    //comSelect변수를 새롭게 생성하여 0,1,2중에 무작위의 숫자를 저장하도록 한다. -> Math.random();
    // Math.random() -> 0~1사이의 값을 랜덤하게 발생 
    // Math.random() * 10 = 0~9까지 랜덤하게 숫자를 발생시킨다.
    // parseInt() -> 실수를 정수로 형변환 해주는 함수.
    const comSelect = parseInt(Math.random() * 3);
    if ((you + 1) % 3 === comSelect) {//내가 지는 경우
      //state값의 com과 result를 수정
      // com에는 comSelect변수로 수정
      // result는 당신이 졌습니다.
      this.setState({ com: comSelect, result: '당신이 졌습니다.' });
    } else if (you === comSelect) { // 비기는 경우
      //state값의 com과 result를 수정
      // com에는 comSelect변수로 수정
      // result는 비겼습니다.
      this.setState({ com: comSelect, result: '비겼습니다.' });
    } else { // 이기는 경우
      //state값의 com과 result를 수정
      // com에는 comSelect변수로 수정
      // result는 당신이 이겼습니다.
      this.setState({ com: comSelect, result: '당신이 이겼습니다.' });
    }
  }
  render() {
    return (
      <div className="App">
        <Rps onSelect={function (you) {
          this.check(you);
        }.bind(this)} result={this.state.result} com={this.state.com} />
      </div>
    );
  }
}

export default App;
