import React from 'react';
import Modal from 'reactstrap';

export const ModalCreate = (props) =>{
  return (
    <Modal
      isOpen={props.isOpen}
    >
      Hello world
    </Modal>
  )
}
