import { MdAdd } from 'react-icons/md';
import './TodoInsert.css';
import { useState, useCallback } from 'react';

const TodoInsert = (props) => {
  const [value, setValue] = useState('');

  const onchange = useCallback((e) => {
    setValue(e.target.value);
  });

  const onSubmit = useCallback((e) => {
    props.onInsert(value);
    setValue('');
    e.preventDefault();
  }, [value]);
  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input placeholder='할 일을 입력하세요.' value={value}
        onChange={onchange}></input>
      <button type='submint'>
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;