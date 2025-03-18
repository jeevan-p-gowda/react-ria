import { useEffect, useRef, useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const emailRef = useRef();

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const saveData = (ev) => {
    ev.preventDefault();
    console.log("Data saved", name, emailRef.current.value);
  };
  return (
    <form onSubmit={(e) => saveData(e)}>
      {/* CONTROLLED */}
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {name === "" ? <small>Name is required</small> : null}
      {/* UNCONTROLLED */}
      <input type="text" placeholder="Email" ref={emailRef} />
      {emailRef.current && emailRef.current.value === "" ? (
        <small>Email is required</small>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}
export default Checkout;