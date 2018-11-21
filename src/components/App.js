import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './Header';
import ConnectForm from './ConnectForm';
import TripList from './TripList';
import MapView from './MapView';
import EventList from './EventList'
import PointList from './PointList'


const App = () => {
  return (
      <Grid className="show-grid" fluid={true}>
        <Row>
          <Header/>
        </Row>
        <Row>
          <ConnectForm />
        </Row>
        <Row>
          <Col>
            <TripList/>
          </Col>
          <Col>
            <Row>
              <MapView/>
            </Row>
            <Row>
              <Grid className="show-grid">
                <Col>
                  <PointList/>
                </Col>
                <Col>
                  <EventList/>
                </Col>
              </Grid>
            </Row>
          </Col>
        </Row>
      </Grid>
  )
};
export default App;