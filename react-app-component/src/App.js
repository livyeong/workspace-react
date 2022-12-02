import './App.css';
//함수형 컴포넌트에서 state기능 사용시 useState 임포트 필수
//클래스형 컴포넌트 생성시 Component 임포트 필수
//함수형 컴포넌트에서 lifeCycle 함수 이용을 위한 useEffect 임포트
//함수형 컴포넌트에서 useEffect를 사용하여 최신state값 활용을 하기위해 useRef 임포트
import { Component, useState, useEffect, useRef } from 'react';

// 클래스 형태의 컴포넌트
class ClassComp extends Component {
  //class형 컴포넌트에서 state사용
  // 생성자(constructor)를 선언하고,
  // this.state= {}부분의 중괄호 안쪽에서 사용할데이터이름:실제데이터 의 형태로 생성한다.
  constructor(props) { // 필수
    super(props); // 필수
    // console.log('mount_1 constructor'); // 라이프사이클 - 마운트 
    this.state = { //필수
      number: this.props.initNumber,
      date: new Date().toString() //클래스형 컴포넌트에서 state값 여러개 추가
      // 1. state값 사이에 ,(콤마)로 구분 지어준다.
      // 2. 기본형태는 dataName : realData 로 동일함.
    }
  }

  componentDidMount() {
    // console.log('mount_3 componentDidMount'); // 라이프사이클 - 마운트 
  }

  shouldComponentUpdate() {
    // console.log('update_1 shouldComponentUpdate'); //라이프사이클 - 업데이트
    return true;
  }

  componentDidUpdate() {
    // console.log('update_3 componentDidUpdate'); //라이프사이클 - 업데이트
  }

  componentWillUnmount() { //라이프사이클 - 언마운트
    // console.log('unmount componentWillUnmount');
  }

  render() {
    // console.log('update_2 render'); //라이프사이클 - 업데이트
    // console.log('mount_2 render'); // 라이프사이클 - 마운트 
    // const number = this.props.initNumber; //클래스 형 컴포넌트에서 props 사용
    return (
      <div className='container'>
        <h2>클래스 형태의 컴포넌트</h2>
        {/* state 활용방법 : this.state.데이터이름 */}
        <p>Number : {this.state.number}</p>
        <p>myName : {this.props.myName}</p>
        {/* class형 컴포넌트에서 state값 변경 */}
        <button type='button' onClick={function () {
          // setState함수를 이용하여 state값을 변경할수 있다.
          // 객체형태의 데이터형식을 맞춰준다.
          this.setState({ number: Math.random() });
        }.bind(this)}>Number 변경</button>
        <p>Date : {this.state.date}</p>
        <button type='button' onClick={function () {
          // state값 여러개일때 변경하는 방법
          // 클래스형 컴포넌트에서는 state값을 변경할때 무조건 this.setSate함수를 이용하면 된다.
          this.setState({ date: new Date().toString() });
        }.bind(this)}>Date 변경</button>
      </div>
    );
  }
}

//함수 형태의 컴포넌트
// 함수형 컴포넌트에서 props 사용 방법 
// 1 - 함수형 컴포넌트 선언부의 파라미터(매개변수)에 첫번째 항목에 props라는 이름으로 선언해준다.
// 2 - 함수 내부에서 props.데이터이름 or props.함수이름 으로 사용한다.
function FunctionComp(props) { // props 사용 1.
  // const number = props.initNumber; // props 사용 2.
  console.log('함수형 mount_1, update_1 함수내부');

  useEffect(function () { //componentDidMount, componentDidUpdate와 동일한 역할
    console.log('함수형 mount_2, update_2 useEffect');
    return function () { // cleanUp 함수
      console.log('함수형 unMount => useEffect의 return');
    }
  });

  //함수형 컴포넌트에서 state 사용
  const numberState = useState(props.initNumber);
  // console.log(numberState);//배열형태로 생성이 되고
  const number = numberState[0]; //numberState의 0번째 항목에는 state의 실제 데이터가 있다.
  const setNumber = numberState[1];//numberState의 1번째 항목에는 익명함수(setState함수)가
  // 내장되어있다.
  // 즉 아래의 형태와 같다고 볼수있다.
  // setNumber = function(){
  //   setState()함수가 내장
  // }
  // state값 여러개 추가할때
  // useState함수를 이용해서 기존에 추가했던 방식과 동일하게 state값을 추가한다.
  // react공식문서에 나오는 useState함수 활용 방법
  // const [stateName , setStateName] = useState(realData);
  // 네이밍할때(이름지을때)
  // 변수 : 첫글자를 소문자로 뒤에 붙는 합성단어의 첫글자는 대문자로
  // set변수 : set은 소문자 + 뒤에 붙는 단어의 첫글자는 대문자로
  const [date, setDate] = useState(new Date().toString());
  return (
    <div className='container'>
      <h2>함수 형태의 컴포넌트</h2>
      <p>Number : {number}</p>
      <p>myName : {props.myName}</p>
      <button type='button' onClick={function () {
        setNumber(Math.random());//setNumber변수에는 함수가 내장되어있어서
        // 함수 호출하듯이 사용하면된다.
      }}>Number 변경</button>
      <p>Date : {date}</p> {/*state값이 저장된 변수명을 그대로 사용하면 된다.*/}
      <button type='button' onClick={function () {
        //함수형 컴포넌트에서 state값 여러개일때 setState방법
        // state을 생성할때 저장한 set변수명() 을 사용하여 해당 state값을 수정 할수 있다.
        setDate(new Date().toString());
      }.bind(this)}>Date 변경</button>
    </div>
  );
}

//라이프사이클 메소드를 활용한 최신 state값 활용 - class형 컴포넌트
class ClassCounter extends Component {
  state = { count: 0 }
  componentDidUpdate() {
    //업데이트가 된 이후 1초뒤에 작동
    setTimeout(() => {
      console.log(this.state.count);
    }, 1000);
    return true;
  }
  render() {
    return (
      <> {/* 부모 요소를 생성을 필수로 해야하는데 빈 요소로 선언해서 사용이 가능하다. */}
        <button onClick={function () {
          this.state.count++;
          this.setState({ count: this.state.count });
        }.bind(this)}>클래스 count</button>
      </>
    );
  }
}

//라이프사이클 메소드를 활용한 최신 state값 활용 - class형 컴포넌트
function FunctionCounter() {
  const [count, setCount] = useState(0);
  //특정 상태값이 변경될때만 useEffect가 실행되는것을 확인하기 위한 etc상태값 생성
  const [etc, setEtc] = useState(0);

  //함수형 컴포넌트에서 useEffect를 사용하여 최신 state값을 활용하기 위해 
  // 임의의 변수를 하나 생성하여 useRef()를 저장한다.
  // ex: 임의의 변수 = useRef(); 
  const lastestCount = useRef();
  useEffect(function () {
    //useRef를 저장한 변수.current에 state을 저장시킨다.
    lastestCount.current = count;
    setTimeout(() => {
      // console.log(count);// -> 최신상태의 state값이 아닌 클릭했을때 당시의 state값이 순차적으로 출력
      console.log(lastestCount.current); //useEffect에서 최신상태의 state값을 활용
    }, 1000);
  });

  // useEffect함수를 마운트될때 한번만 실행되도록 수정
  useEffect(function () {
    console.log('FunctionCounter 컴포넌트의 useEffect 실행 - 마운트될때 한번만 실행');
  }, []);

  // 특정 상태값이 변경될때만 useEffect 실행
  useEffect(function () {
    console.log('count 상태값이 변경될때 실행');
  }, [count]);

  return (
    <>
      <button onClick={function () {
        setCount(count + 1);
      }}>함수 count</button>
      {/* 특정 상태값이 변경될때만 useEffect가 실행되는것을 확인하기 위한 버튼 생성 */}
      <button onClick={function () {
        setEtc(etc + 1);
      }}>함수 etc</button>
    </>
  );
}

function App() {
  const [isShow, setShow] = useState(true);
  const [isShow2, setShow2] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>
      {isShow === true ? <ClassComp initNumber={2} myName='김영식' /> : null}
      {isShow2 === true ? <FunctionComp initNumber={2} myName='김영식' /> : null}
      <ClassCounter />
      <FunctionCounter />
    </div>
  );
}

export default App;
