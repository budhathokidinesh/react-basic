import { useRef } from "react";
export const MyForm = () => {
  const emailRef = useRef("");
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  const handleOnChange = (e) => {
    const str = e.target.value;
    console.log(str);
  };
  console.log(emailRef);
  return (
    <form action="" className="card" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        {/* <input
          type="text"
          className="form-control"
          required
          placeholder="name"
          onChange={handleOnChange}
        /> */}
        <input
          type="email"
          className="form-control"
          required
          placeholder="email"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
