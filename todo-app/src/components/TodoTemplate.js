import './TodoTemplate.css';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
      {/* 부모컴포넌트에서 
          현재 컴포넌트를 호출할때 태그사이에 넣은 문자열 
          <TodoTemplate>문자열</TodoTemplate>
          -> 문자열이 children이라고 하는 매개변수에 담겨져서 전달된다. */}
    </div>
  );
}

export default TodoTemplate;