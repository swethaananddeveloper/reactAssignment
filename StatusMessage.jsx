import React from "react";

function StatusMessage({ status }) {
  const getStyle = () => {
    if (status === "success") {
      return { color: "white", backgroundColor: "green" };
    } else if (status === "error") {
      return { color: "white", backgroundColor: "red" };
    } else if (status === "warning") {
      return { color: "black", backgroundColor: "yellow" };
    } else {
      return { color: "black", backgroundColor: "gray" };
    }
  };

  return (
    <div style={{ padding: "10px", borderRadius: "5px", ...getStyle() }}>
      Status: {status}
    </div>
  );
}




export default StatusMessage;
