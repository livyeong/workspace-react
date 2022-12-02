import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = (props) => {
  // 부모컴포넌트(TodoList.js)에서 전달받은 todo데이터에는 text, checked 데이터가 들어있을 예정
  // props.todo 에는 id, text, checked값이 있는데
  // text, checked의 변수명과 일치하는 데이터가 자동으로 배치가 된다.
  const { id, text, checked } = props.todo;
  return (
    <div className='TodoListItem'>
      <div className={checked === true ? 'checkbox checked' : 'checkbox'}>
        {checked === true ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => {
        props.onRemove(id);
      }}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default TodoListItem;