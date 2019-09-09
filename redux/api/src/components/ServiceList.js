import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {fetchServices, removeService, editService, removeServiceItem, editServiceField} from '../actions/actionCreators';

import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(removeServiceItem(id));
  }

  const handleEdit = id => {
    dispatch(editService(id));
    dispatch(editServiceField());    
  };

  if (loading) {
    return  (<div className='circular'>
              <CircularProgress/>
            </div>);
  }

  if (error) {
    return <p className='error'>Произошла ошибка!</p>;
  }

  return (
    <ul>       
         {items.map(o => (
              <li key={o.id} name={o}>
                <p>{o.name} {o.price} {o.content}</p>
                <button onClick={() => handleRemove(o.id)}>✕</button>
                <Link to={`/services/${o.id}`}>
                  <button onClick={() => handleEdit(o.id)}>o</button>
                </Link> 
              </li> ))}
      </ul>
  );
}

export default ServiceList
