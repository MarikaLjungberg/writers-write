import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'react-bootstrap';

class ExerciseModal extends React.Component {

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div>
        <h1>MODALLLLL</h1>
         <Modal className="exerciseModal"> {/*show={this.props.show} onHide={this.props.handleClose} */}
          <Modal.Header> {/*closeButton*/}
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.handleSave}>Save</Button> */}
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


ExerciseModal.propTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default ExerciseModal;
