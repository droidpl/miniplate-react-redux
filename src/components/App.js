import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header';
import ConnectForm from './ConnectForm';


const App = () => {
  return (
      <Grid className="show-grid" fluid={true}>
        <Row>
          <Header/>
        </Row>
        <Row>
          <ConnectForm />
        </Row>
      </Grid>
  )
};
export default App;