import { Component } from 'react';

class Props extends Component {
  render() {
    return (
      // 부모 컴포넌트로 부터 title이라는 이름의 데이터를 받아서 사용하겠다.
      // props사용 : this.props.데이터이름
      <h3>{this.props.title}</h3>
    );
  }
}

export default Props;