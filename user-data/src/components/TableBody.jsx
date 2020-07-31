import React from "react";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

function TableBody(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <tbody>
      <tr>
        <td className='lalign'>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.timezone}</td>
        <td>
          <button
            onClick={() => {
              setModalShow(true);
            }}>
            <i className='far fa-eye fa-2x'></i>
          </button>
        </td>
      </tr>
      <MyVerticallyCenteredModal
        id={props.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </tbody>
  );
}

export default TableBody;
