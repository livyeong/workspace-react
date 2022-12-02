import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import TOC from './TOC';
import ReadContent from './ReadContent';
import Like from './Like';
import Control from './Control';
import CreateContent from './CreateContent';

//ctrl + shift + k : 한줄 삭제
//atl + shifk + 방향키위 아래 : 한줄복사
//atl + 방향키 위아래 : 한줄 이동
//ctrl + / : 주석(처리 or 해제)
class App extends Component {
  // state값 활용시 필수항목 : 생성자 (13~15라인까지의 항목들 : 생성자,슈퍼생성자,this.state)
  constructor(props) {
    super(props);
    this.state = {
      //state의 이름을 contents라고 하겠다. : 뒤에는 저장할 값
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is MarkupLanguage' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JS is for interactive' }
      ],
      strValue: 'strValue',
      numValue: 123,
      boolValue: false,
      //state의 값에 따라서 다른 내용이 보여지도록. 예제_1
      mode: 'welcome',
      welcome: { title: 'welcome', desc: 'Hello, React' },

      selected_content_id: 1
    }
  }

  findContentById(id) {
    let content;
    for (let i = 0; i < this.state.contents.length; i++) {
      if (id === this.state.contents[i].id) {
        //해당하는 id값과 일치하는 contents를 찾으면 content변수에 저장한다.
        content = this.state.contents[i];
        break; //저장이 끝난후 더이상for문을 실행하지 않아도 되므로, 바로 종료
      }
    }
    return content; //저장이 끝난 content변수를 호출한곳으로 보낸다.
  }
  render() { //state값이 변경이되면 재호출된다.
    let title, desc;
    let article; // mode가 create,update인지에 따라서 보여줄 화면을 결정할 변수
    // === : JS에서 비교연산할때 타입까지 비교를 해준다.
    if (this.state.mode === 'welcome') {
      title = this.state.welcome.title;
      desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      //state의 selected_content_id값이 변경이될때마다 content변수에 담겨질 내용이 변경된다.
      //1 -> HTML에 해당하는 내용으로
      //2 -> CSS에 해당하는 내용으로
      //3 -> JS에 해당하는 내용으로 
      const content = this.findContentById(this.state.selected_content_id);
      title = content.title;
      desc = content.desc;
    } else if (this.state.mode === 'create') {
      article =
        <CreateContent onSubmit={function (title, desc) {
          this.state.contents.push(
            {
              id: this.state.contents.length + 1,
              title: title,
              desc: desc
            }
          );
          this.setState({ contents: this.state.contents });
        }.bind(this)} />
    }
    return (
      <div className="App">
        {/* 
          html 태그 형식으로 컴포넌트를 적용 
          컴포넌트 : 보여질 화면을 js파일로 생성한것
          컴포넌트를 생성할때는 html태그와 구분을 주기위해서,
          첫글자는 대문자로 생성(명명)한다.
        */}
        {/* 
          컴포넌트에 데이터 전달 : 
          html의 속성을 부여하듯이 
          넘겨줄 데이터의 이름을 정한뒤 = 뒤에 넘겨줄 값을 설정해준다.
          ex) title="WEB!" 
        */}
        {/* mode를 변경하기 위해 이벤트 활용
            Subject 컴포넌트에 onChangeMode라는 이름으로 props를 전달한다.
            이때, onChangeMode에는 함수가 담겨져 있고,
            해당함수에는 state값(App.js의 mode 데이터)을 변경하는 내용이 담겨져있다. */}
        <Subject title="WEB!" sub="World Wide Web!"
          onChangeMode={
            function () {
              //해당 함수가 실행이 될때마다 state의 mode값을 체크해서
              //welcome 이면 read로 변경 하고
              //read 이면 welcome으로 변경한다.
              if (this.state.mode === 'welcome') {
                //해당컴포넌트 내에서 state값을 변경하고자 할때
                // setState함수를 이용한다.
                this.setState({ mode: 'read' });
                // this.state.mode = 'read'; -> state직접 수정은 불가하다.
              } else if (this.state.mode === 'read') {
                this.setState({ mode: 'welcome' });
              }
            }.bind(this)
          } />
        {/* this.state.데이터이름 으로 state값 사용가능 */}
        {/* TOC컴포넌트에 contents라고하는 데이터를 전송하는데,
            전송할 데이터는 App.js 컴포넌트가 가지고있는 state값을 전송한다. */}
        <TOC contents={this.state.contents}
          onSelect={
            function (id) {
              this.setState({
                mode: 'read',
                selected_content_id: id
              });
            }.bind(this)
          } />

        <Control onChangeMode={function (mode) {
          this.setState({ mode: mode });
        }.bind(this)} />

        {/* Content컴포넌트에 title과desc라는 데이터를 전송하는데,
          전송할 데이터는 각각 App.js 컴포넌트가 가지고있는 state.contents[0].title 그리고,
            state.contents[0].desc 값을 전송한다. */}
        {/* <Content title={this.state.contents[0].title} desc={this.state.contents[0].desc} /> */}

        {/* Content컴포넌트에 contents라고하는 데이터를 전송하는데,
            전송할 데이터는 App.js 컴포넌트가 가지고있는 state값을 전송한다. */}
        {/* <Content contents={this.state.contents} /> */}

        {/* mode의 값에 따라서 Content컴포넌트에 보여줄 내용 변경 
          {변수명} : mode의 값에 따라서 내용이 변경될수 있도록,
                    render함수 내부에서 선언해놓은 변수를 사용하고 있다. */}
        <ReadContent title={title} desc={desc} />

        {/* mode가 create,update에 따라서 보여줄 화면을 표시한다. */}
        {article}

        {/* 좋아요기능 UI구현 */}
        <Like onLike={function (id) {
          if (id === 'like') { //빨간색 하트가 클릭되었을때
            document.getElementById('like').style.display = "none";
            document.getElementById('unlike').style.display = "inline";
          } else { //빈하트가 클릭되었을때
            document.getElementById('like').style.display = "inline";
            document.getElementById('unlike').style.display = "none";
          }
        }} />
      </div>
    );
  }

}

export default App;
