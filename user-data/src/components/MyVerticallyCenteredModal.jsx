import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Timeline from "./Timline";
import "./MyVerticallyCenteredModal.css";
import Loading from "./Loading";
import axios from "axios";

// let activity = users.members.map((el) => el.activity_periods);
// console.log(activity);

function MyVerticallyCenteredModal(props) {
  // console.log(props.id);
  const [state, setState] = useState([]);
  const [isFetched, setFetch] = useState(true);
  console.log(
    `https://cors-anywhere.herokuapp.com/https://secure-springs-19836.herokuapp.com/api/v1/users/${props.id}`
  );
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://secure-springs-19836.herokuapp.com/api/v1/users/${props.id}`
      )
      .then((res) => {
        setState(res.data.member[0].activity_periods);
        setFetch(false);
      });
  }, []);

  function createTimeline(prop) {
    return (
      <Timeline
        key={prop.start_time}
        start={prop.start_time}
        end={prop.end_time}
      />
    );
  }

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          User Activity Record
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container mt-5 mb-5'>
          <div className='row'>
            <div className='col-md-6 offset-md-3'>
              <h4>Activity Timeline</h4>
              {isFetched ? <Loading /> : undefined}
              {state.map((el) => createTimeline(el))}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
