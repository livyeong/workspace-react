import { Component } from "react";

class Like extends Component {
  render() {
    //해당태그에 style바로 적용을 시킬때
    //JS의 객체형태{} 로 스타일을 작성해서, 적용 시켜야한다.
    let defaultStyle = {
      display: "none"
    }
    return (
      <div>
        {/* 이미지 파일 경로 설정시 public폴더에 저장하도록 한다. */}
        {/* class를 지정할때 : className이라는 속성명을 사용한다. */}
        {/* 빨간색 좋아요 이미지 */}
        <img id="like" className="like" src="./like.png" style={defaultStyle}
          onClick={function () {
            this.props.onLike("like");//좋아요 해제
          }.bind(this)}></img>

        {/* 비어져있는 좋아요 해제 이미지 */}
        <img id="unlike" className="like" src="./unlike.png"
          onClick={function () {
            this.props.onLike("unlike");//좋아요 활성화
          }.bind(this)}></img>
      </div>
    );
  }
}

export default Like;