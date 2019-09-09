import React, {Fragment} from 'react';
import ServiceAdd from './ServiceAdd';
import ServiceAddClassBased from './ServiceAddClassBased';

function IdPage() {
  return (
    <Fragment>
      <ServiceAdd />      
      <hr />
      <ServiceAddClassBased />     
    </Fragment>
  );
}

export default IdPage;