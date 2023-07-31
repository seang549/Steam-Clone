const Error = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
        <button type="button" onClick={handleClose}>
            X
          </button>
            <h1> Error</h1>
            <p>You must be logged in to perform that action.</p>
          <button type="button">sign in</button>
          <button type="button" onClick={handleClose}>cancel</button>
          
        </section>
      </div>
    );
  };

  export default Error;