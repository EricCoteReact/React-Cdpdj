import React, { useState } from 'react';
import BlueBox from './LeftL2-BlueBox';
import GreyBoxes from './RightL2-GreyBoxes';
import { Row, Col } from 'reactstrap';
import MyContext from './MyContext';

export default function SimpleContext() {
  // eslint-disable-next-line
  const [firstName, setFirstName] = useState('John');
  // eslint-disable-next-line
  const [lastName, setLastName] = useState('Wayne');
  // eslint-disable-next-line
  const [color, setColor] = useState('blue');
  // eslint-disable-next-line
  const [lastNameColor, setLastNameColor] = useState('red');

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    // eslint-disable-next-line
    eval(str);
  }

  return (
    <MyContext.Provider
      value={{ firstName, lastName, color, lastNameColor, onChange: change }}
    >
      <Row>
        <Col md='6'>
          <BlueBox />
        </Col>
        <Col md='6'>
          <GreyBoxes />
        </Col>
      </Row>
    </MyContext.Provider>
  );
}
