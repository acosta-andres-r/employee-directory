import React from 'react';

function Search(props) {

  const divStyle = {
    width: "250px"
  };

  return (
    <div className="input-group mb-3 mx-auto" style={divStyle}>
      {/* <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
      </div> */}
      <input
        type="text"
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        onChange={(event) => {props.search(event)}}
      />
    </div>
  );
}

export default Search;