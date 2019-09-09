import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, cancelUpdate, updateService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);	
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
			evt.preventDefault();			
			item.id ? dispatch(updateService(item)) :
				 dispatch(addService(item.name, item.price));				 
	}

	const handleCancel = () => {		
		dispatch(cancelUpdate());
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			<button type='button' onClick={handleCancel}>Cancel</button>
		</form>
	);
}

export default ServiceAdd;
