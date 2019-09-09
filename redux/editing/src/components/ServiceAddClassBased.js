import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeServiceField, addService, cancelUpdate, updateService} from '../actions/actionCreators';

class ServiceAddClassBased extends Component {
  handleChange = evt => {
    const { name, value } = evt.target;
    this.props.onChange(name, value);
  }

  handleSubmit = evt => {
    const {item} = this.props;
    evt.preventDefault();			
    item.id ? this.props.onUpdate(item) :
              this.props.onSave(item.name, item.price);				 
  }

  handleCancel = () => {		
    this.props.onCancel();
  }

  render() {
    const { item } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' onChange={this.handleChange} value={item.name} />
        <input name='price' onChange={this.handleChange} value={item.price} />
        <button type='submit'>Save</button>
        <button type='button' onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
}


ServiceAddClassBased.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  item: state.serviceAdd,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => dispatch(changeServiceField(name, value)),
    onSave: (name, price) => dispatch(addService(name, price)),
    onCancel: () => dispatch(cancelUpdate()),
    onUpdate: (service) => dispatch(updateService(service)),
  }
};

// const mapDispatchToProps = ({
//   onChange: changeServiceField,
//   onSave: addService,
//   onCancel: cancelUpdate,
//   onUpdate: updateService,
// });

export default connect(mapStateToProps, mapDispatchToProps)(ServiceAddClassBased);
