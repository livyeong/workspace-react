import { Component } from 'react';
import Child from './Child'; //Child컴포넌트를 사용하기위한 임포트 선언
import Props from './Props';
import Props2 from './Props2';

class App extends Component {
  // state 데이터 생성 
  constructor(props) {
    super(props);
    this.state = {
      //여기에서 state데이터를 생성한다.
      h1_title: 'hello world',
      // 배열 : [] 
      // 인덱스(순서,방)는 0부터 시작
      // 배열 데이터에 접근할때 ex: 배열변수명[0] -> 배열변수명의 0번째 인덱스값을 가져온다.
      // { 데이터1,데이터2,데이터3 } -> JS에서 객체를 의미(데이터1,2,3이 담긴 객체)
      introduce: [
        '김영식', //index : 0
        '서면',  //index : 1
        '탕수육' //index : 2
      ]
    }
  }
  render() {
    return (
      <div>
        {/* state값 사용 : this.state.데이터이름 */}
        <h1>{this.state.h1_title}</h1>
        {/* Child컴포넌트를 사용 : html태그처럼 사용 */}
        <Child />
        <Props title="App컴포넌트에서 데이터를 전달" /> {/* Props컴포넌트에 title이라는 데이터를
                                                         전달(이때 props에 담아서 전달한다.)*/}
        {/* Props2 컴포넌트를 생성하고 Props컴포넌트 아래쪽에 위치하도록 적용 */}
        {/* <Props2 /> */}

        {/* Props2 컴포넌트에 name, addr, food 라는 이름의 데이터를 넘겨주도록 소스코드를 
          작성 해봅시다. 
          name : 본인이름 , addr : 사는동네, food : 좋아하는 음식 */}
        {/* <Props2 name="김영식" addr="서면" food="탕수육" /> */}

        {/* App.js에서 state값을 생성 : introduce
            이때 introduce state값은 배열형태로 작성한다.
             Props2컴포넌트에서는 this.props.introduce데이터를 받아와서,
             배열데이터의 형태를 출력 해보도록 합시다. */}
        {/* <Props2 introduce={this.state.introduce} /> */}

        {/* title에는 this.state.introduce의 0번째항목 
            addr에는 this.state.introduce의 1번째항목
            food에는 this.state.introduce의 2번째항목 
            을 Props2컴포넌트에 전달 하고
            Props2 컴포넌트에서는 위의 세가지 데이터를 출력해봅시다. */}
        <Props2 title={this.state.introduce[0]} addr={this.state.introduce[1]}
          food={this.state.introduce[2]} />
      </div>
    );
  }
}

export default App;
