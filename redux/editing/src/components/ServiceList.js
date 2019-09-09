import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = evt => {   
    dispatch(editService(evt));
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          <p>{o.name} {o.price}</p>
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o)}>o</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
