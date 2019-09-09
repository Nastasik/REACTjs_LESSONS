import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {removeService, editService} from '../actions/actionCreators';
import {connect} from 'react-redux';

class ServiceListClassBased extends Component {
  handleRemove = id => {
    this.props.removeService(id);
  }

  handleEdit = evt => {   
    this.props.onEdit(evt);
  }

  render() {
    const {items} = this.props;

    return (
      <ul>
        {items.map(o => (
          <li key={o.id}>
            <p>{o.name} {o.price}</p>
            <button onClick={() => this.handleRemove(o.id)}>✕</button>
            <button onClick={() => this.handleEdit(o)}>o</button>
          </li>
        ))}
      </ul>
    )
  }
}

ServiceListClassBased.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
}

const mapStateToProps = (state) => ({
  items: state.serviceList,
});

const mapDispatchToProps = (dispatch) => {
  return {
        removeService: id => dispatch(removeService(id)),
        onEdit: (evt) => dispatch(editService(evt)),
  }
};

// const mapDispatchToProps = ({
//   removeService,
//   onEdit
// });

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
