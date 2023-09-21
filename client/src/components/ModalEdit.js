import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

const ModalEdit = (props) => {
    const {show, onHide} = props
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
      <Modal.Title>Edit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Fuels</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Maintenance</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
