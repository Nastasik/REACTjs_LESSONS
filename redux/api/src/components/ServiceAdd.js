import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeServiceField, addService, cancelUpdate, updateServices, updateService } from '../actions/actionCreators';

function ServiceAdd() {
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {    
    evt.preventDefault();
    if (item.id) {
      dispatch(updateServices(item));
      dispatch(updateService(item));
      window.history.back();
    } else {
      dispatch(addService(item.name, item.price, item.content)); 
    }   
  };

  const handleCancel = () => dispatch(cancelUpdate());

  return (
    <form onSubmit={handleSubmit}> 
        <label>Название     
            <input name='name' onChange={handleChange} value={item.name} placeholder='Название'/>
        </label>
        <label>Цена
            <input name='price' onChange={handleChange} value={item.price} placeholder='Цена'/>
        </label>
        <label>Описание
            <input name='content' onChange={handleChange} value={item.content} placeholder='Описание'/>
        </label>
        <button type='submit' disabled={loading}>Save</button>
        <Link to={`/services`}>
          <button type='button' onClick={handleCancel} disabled={loading}>Cancel</button>
        </Link>
        {error && <p className='error'>Произошла ошибка!</p>}
    </form>
  );
}

export default ServiceAdd;
