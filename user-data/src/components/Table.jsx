import React, { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import axios from "axios";
import Loading from "./Loading";

function Table() {
  const [state, setState] = useState([]);
  const [isFetched, setFetch] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://secure-springs-19836.herokuapp.com/api/v1/users"
      )
      .then((res) => {
        setState(res.data.members);
        setFetch(false);
      });
  }, []);

  console.log(state);
  function createData(prop) {
    return (
      <TableBody
        key={prop.id}
        id={prop.id}
        name={prop.real_name}
        timezone={prop.tz}
      />
    );
  }
  return (
    <div>
      <table id='keywords' cellSpacing='0' cellPadding='0'>
        <TableHead />
        {state.map((el) => createData(el))}
      </table>
      {isFetched ? <Loading /> : undefined}
    </div>
  );
}

export default Table;
