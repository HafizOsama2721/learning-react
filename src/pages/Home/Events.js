import React from "react";

export default function Events() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Button is Working");
  };

  return (
    <div className="py-5 bg-secondary fruits">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">This is our Events Section</h1>
            <div className="text-center">
              <form>
                <input type="text" className="form-control" placeholder="Enter your text" />
                <button className="btn btn-info" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
            <p style={{color: 'black', textAlign: 'center', marginTop: 10 }}>I'm a Paragraph.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
