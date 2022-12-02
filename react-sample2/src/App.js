import React, { Component } from 'react';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '야구게임 방식',
      desc: [
        '1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.',
        '2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.',
        '3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.',
        '4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.',
        '5. 216 - 전부 맞으므로 승리.'
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        <hr />
        <Section />
        <Article />
        <Footer desc={this.state.desc}
          onChangeStyle={function (e) {
            // pdf의 연습문제 소스코드
            // e.target.style.backgroundColor = 'beige';
            // e.target.style.textDecoration = 'underline';
            //추가 연습문제 
            //클릭이 되어서 배경색과 밑줄이 표시가 된 항목들을 클릭했을때 원상복구 시켜봅시다.
            // 삼항연산자를 활용하여 스위치 형태 소스코드 구현
            // 삼항연산자 형태 
            // (조건식) ? (참일경우) :(거짓일경우)
            // ex) 2 > 1 ? '2는 1보다 큽니다.' : '2는 1보다 크지않습니다.';
            e.target.style.backgroundColor =
              e.target.style.backgroundColor === 'beige' ? 'white' : 'beige';
            e.target.style.textDecoration =
              e.target.style.textDecoration === 'underline' ? 'none' : 'underline';
          }} />
      </div>
    );
  }
}

export default App;
