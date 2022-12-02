import { Component } from 'react';

class Props2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '김영식',
      addr: '서면',
      food: '탕수육'
    }
  }
  render() {
    return (
      //return문 안쪽에는 부모요소가 하나가 반드시 있어야한다.
      <div>
        {/* 아래의 문자열들을 state값으로 변경하고,
            적용을 시켜봅시다. 
            이름 : name 
            사는동네 : addr 
            좋아하는 음식 : food */}
        {/* <p>{this.state.name}</p> 이름 */}
        {/* <p>{this.state.addr}</p> 사는동네 */}
        {/* <p>{this.state.food}</p> 좋아하는 음식 */}

        {/* props로 적용해보기 */}
        {/* <p>{this.props.name}</p> 이름 */}
        {/* <p>{this.props.addr}</p> 사는동네 */}
        {/* <p>{this.props.food}</p> 좋아하는 음식 */}

        {/* props.intoduce가 배열형태의 데이터 이므로
          그에 맞는 데이터를 출력하도록 수정하세요. */}
        {/* <p>{this.props.introduce[0]}</p> 이름 */}
        {/* <p>{this.props.introduce[1]}</p> 사는동네 */}
        {/* <p>{this.props.introduce[2]}</p> 좋아하는 음식 */}

        {/* App.js에서 title,addr,food라는 이름의 데이터를 받아와서 출력 */}
        <p>{this.props.title}</p> {/* 이름 */}
        <p>{this.props.addr}</p> {/* 사는동네 */}
        <p>{this.props.food}</p> {/* 좋아하는 음식*/}
      </div>
    );
  }
}

export default Props2;