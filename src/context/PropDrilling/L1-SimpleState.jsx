import React, { useState } from 'react';
import BlueBox from './LeftL2-BlueBox';
import GreyBox from './RightL2-GreyBox';
import { Row, Col } from 'reactstrap';

export default function SimpleState() {
  // eslint-disable-next-line
  const [firstName, setFirstName] = useState('John');
  // eslint-disable-next-line
  const [lastName, setLastName] = useState('Wayne');
  // eslint-disable-next-line
  const [color, setColor] = useState('blue');

  //the folloing is to avoid the ESLint warning that
  //we're not calling the "set" methods.

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    // eslint-disable-next-line
    eval(str);
  }

  return (
    <Row>
      <Col md='6'>
        <BlueBox firstName={firstName} lastName={lastName} color={color} />
      </Col>
      <Col md='6'>
        <GreyBox
          firstName={firstName}
          lastName={lastName}
          color={color}
          onChange={change}
        />
      </Col>
    </Row>
  );
}
