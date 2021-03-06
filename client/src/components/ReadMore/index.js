import React, { useState } from "react";

import "./index.css";

function ReadMore(props) {
  const [expanded, setExpanded] = useState(false);

  let text = "";
  if (props.children && props.children.length > 100)
    text = expanded
      ? props.children.concat(" ")
      : props.children.substring(0, 100).concat("... ");
  else if (props.children && props.children.length < 100)
    text = props.children.concat(" ");
  else text = "no description available ";

  return (
    <p className="card-body">
      {text}
      <button onClick={() => setExpanded(!expanded)} className="readmore btn btn-link card-link">
        {expanded ? "read less" : "read more"}
      </button>
    </p>
  );
}

export default ReadMore;
