import React from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';
import {
  Modal,
  Button,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

//simple use of hooks.  No effects (so no save or restore of the counter value)
export default function Counter(props) {
  const [count, setCount] = React.useState(+props.init || 1);
  const [modalVisible, setModalVisible] = React.useState(false);
  const txtNombre = React.useRef(null);

  function increment(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
    }
  }

  function montrerModal() {
    setModalVisible(true);
  }

  function cacherModal() {
    setModalVisible(false);
  }

  function saisirNombre() {
    setCount(+txtNombre.current.value);
    setModalVisible(false);
  }

  return (
    <>
      <h1>The count is: {count} </h1>
      <MyButton onIncrement={increment} value={1} />
      <MyButton onIncrement={increment} value={-10} />
      <MyButton onIncrement={increment} value={100} />
      <MyTextbox value={count} onChange={change} />
      <Button onClick={montrerModal}>Saisir nouveau nombre</Button>
      <Modal isOpen={modalVisible} toggle={cacherModal}>
        <ModalHeader>Saisir nouveau nombre</ModalHeader>
        <ModalBody>
          <Input innerRef={txtNombre} defaultValue={count} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => saisirNombre()}>Terminé</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
