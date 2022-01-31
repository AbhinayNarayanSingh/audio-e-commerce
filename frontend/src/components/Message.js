import React from "react";

function Message({ cls, msg }) {
  console.log(msg);
  console.log(">>>");
  return (
    <div className={cls}>
      {/* <p>{msg}</p> */}
      {msg}
    </div>
  );
}

export default Message;
