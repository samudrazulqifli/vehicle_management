import { Form, Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {ModalEdit} from "./index"

const AdminLiist = () => {
  const [show, setShow] = useState(false);
  const [modalEdit, setModalEdit] = useState(false)

  const handleEditShow = () => setModalEdit(true)
  const handleEditClose = () => setModalEdit(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="card ms-2 mt-2">
        <div className="card-body">
          <table className="table caption-top">
            <caption>List of Vehicles</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Fuels</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>Pertamax</td>
                <td>
                  <Link className="btn btn-sm btn-info me-2" onClick={handleShow}>propose</Link>
                  <Link className="btn btn-sm btn-warning me-2" onClick={handleEditShow}>Edit</Link>
                  <Link className="btn btn-sm btn-danger">delete</Link>
                </td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>Pertamax</td>
                <td>
                  <Link className="btn btn-sm btn-info me-2" onClick={handleShow}>propose</Link>
                  <Link className="btn btn-sm btn-warning me-2" onClick={handleEditShow}>Edit</Link>
                  <Link className="btn btn-sm btn-danger">delete</Link>
                </td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>Pertamax</td>
                <td>
                  <Link className="btn btn-sm btn-info me-2" onClick={handleShow}>propose</Link>
                  <Link className="btn btn-sm btn-warning me-2" onClick={handleEditShow}>Edit</Link>
                  <Link className="btn btn-sm btn-danger">delete</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Propose Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Choose User</Form.Label>
              <Form.Control type="text" autoFocus></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalEdit
      show={modalEdit}
      onHide={handleEditClose}>
      </ModalEdit>
    </>
  );
};

export default AdminLiist;
