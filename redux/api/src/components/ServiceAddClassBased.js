import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeServiceField, addService, cancelUpdate, updateServices, updateService } from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      content: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onUpdateServer: PropTypes.func.isRequired,
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => {
    const {item} = this.props;
    evt.preventDefault();
    if (item.id) {
        this.props.onUpdate(item);
        this.props.onUpdateServer(item);
        window.history.back();
    } else {
        this.props.onSave(item.name, item.price, item.content); 
    }   
  };

  handleCancel = () => this.props.onCancel();

  render() {
    const {item, loading, error} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Название
            <input name='name' onChange={this.handleChange} value={item.name} placeholder='Название'/>
        </label>
        <label>Цена
            <input name='price' onChange={this.handleChange} value={item.price} placeholder='Цена'/>
        </label>
        <label>Описание
            <input name='content' onChange={this.handleChange} value={item.content} placeholder='Описание'/>
        </label>
        {/* <Link to="/services"> */}
            <button type='submit' disabled={loading}>Save</button>
        {/* </Link>   */}
        <Link to="/services">      
            <button type='button' onClick={this.handleCancel} disabled={loading}>Cancel</button>
        </Link>
        {error && <p className='error'>Произошла ошибка!</p>}
    </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { serviceAdd: {item, loading, error} } = state;
  return { item, loading, error };
};

const mapDispatchToProps = {
  onChange: changeServiceField,
  onSave: addService,
  onUpdate: updateServices,
  onUpdateServer: updateService,
  onCancel: cancelUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
