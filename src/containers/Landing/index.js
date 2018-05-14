import React, { Component } from 'react';
import {
  Alert,
  Container,
  Row,
  Column,
  Button,
  Icon,
  Jumbotron,
  Logo,
} from '../../components';

import './style.css';

class Landing extends Component {

  render() {

    return (
      <div>
        <Logo style={{ padding: '50vh 0', marginTop: '-5.7em' }} />
        <Container fluid>
          <Row>
            <Column>
              <Alert type='warning' className='text-center'>
                This site is currently undergoing construction
              </Alert>
            </Column>
          </Row>
        </Container>
      </div>
    )
  }
}
export default Landing;
