import React, {Fragment} from 'react';
import ServiceAdd from './ServiceAdd';
import ServiceList from './ServiceList';
import ServiceAddClassBased from './ServiceAddClassBased';
import ServiceListClassBased from './ServiceListClassBased';

function MainPage() {
  return (
    <Fragment>
      <ServiceAdd />
      <ServiceList />
      <hr />
      <ServiceAddClassBased />
      <ServiceListClassBased />
    </Fragment>
  );
}

export default MainPage;
