import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchServices, removeService, editService, removeServiceItem, editServiceField } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

class ServiceListClassBased extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number,
      content: PropTypes.string,
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }

  componentDidMount() {
    this.props.fetchServices();
  }

  handleRemove = id => {
    this.props.removeService(id);
    this.props.removeServiceItem(id);
  };

  handleEdit = id => {
    this.props.editService(id);
    this.props.editServiceField();
  };

  render() {
    const { items, loading, error } = this.props;

    if (loading) {
      return (<div className='circular'>
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
                <button onClick={() => this.handleRemove(o.id)}>✕</button>
                <Link to={`/services/${o.id}`}>
                  <button onClick={() => this.handleEdit(o.id)}>o</button>
                </Link> 
              </li> ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const { serviceList: { items, loading, error } } = state;
  return { items, loading, error };
};

const mapDispatchToProps = {
  fetchServices,
  removeService,
  removeServiceItem,
  editService,
  editServiceField,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServiceListClassBased);
