import React from 'react'
import {Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Alert} from 'react-bootstrap'
import Loader from 'react-loader-spinner'

import {dispatch} from "../index";
import {connect} from 'react-redux'

class ConnectForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onUsernameChange(e) {
    dispatch.auth.changeUsername({username: e.target.value})
  }

  onPasswordChange(e) {
    dispatch.auth.changePassword({password: e.target.value})
  }

  onSubmitClick() {
    dispatch.auth.initUser({
      username: this.props.username,
      password: this.props.password
    })
  }

  render() {
    return (
        <Grid fluid={true}>
          <Row md={12}>
            <FormGroup controlId="inputCredentials">
              <Col md={6}>
                <ControlLabel>User id:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.props.username}
                    placeholder="Enter the user id"
                    onChange={this.onUsernameChange}
                />
              </Col>
              <Col md={6}>
                <ControlLabel>Password:</ControlLabel>
                <FormControl
                    type="text"
                    value={this.props.password}
                    placeholder="Enter the password"
                    onChange={this.onPasswordChange}
                />
              </Col>
            </FormGroup>
          </Row>
          <Row md={5}>
            {this.props.hasError && <Alert bsStyle="warning">
              There was an error while authenticating
            </Alert>}
          </Row>
          <Row md={12} style={{ marginTop: '10px'}}>
            <Col md={2}>
              <Button onClick={this.onSubmitClick}>Connect</Button>
            </Col>
            <Col>
              {
                this.props.isLoading &&
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height="20"
                    width="20"
                />
              }
            </Col>
          </Row>
        </Grid>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
  password: state.auth.password,
  isLoading: state.auth.isLoading,
  hasError: state.auth.hasError
});

export default connect(mapStateToProps)(ConnectForm)