import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true },
    { id: 2, text: '컴포넌트 스타일링 해보기', checked: true },
    { id: 3, text: '일정 관리 앱 만들어 보기', checked: false }
  ]);

  //useRef : 고유한 값을 저장할때 사용한다.
  const nextId = useRef(todos.length + 1);

  // 사용자가 입력한 값을 할일 목록에 추가
  const onInsert = useCallback((inputText) => {
    const todo = { id: nextId.current, text: inputText, checked: false };
    setTodos(todos.concat(todo));// todos.push() 사용 불가
    // nextId.current += 1; //왼쪽항과 오른쪽항을 더해서 왼쪽항에 저장한다.
    nextId.current = nextId.current + 1;
  }, [todos]); // useCallback 함수안에서 사용하는 state 또는 props가 있다면
  // 배열로 반드시 지정해야 최신 상태값을 보장할수 있다.

  // 할일목록 중에서 선택한 항목 삭제
  const onRemove = useCallback((id) => {
    // 배열.filter() : filter() 함수 내부에서 테스트소스코드를 통해 통과된 항목들만 모아서
    // 새롭게 배열을 구성한다.
    // 파라미터로 받은 id값과 todo(할일항목)의 id값이 일치 하지 않는 항목만 모아서 
    // 새로운 배열을 구성한다. == 선택한 항목은 삭제한다.
    setTodos(todos.filter((todo) => todo.id !== id));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
