const Error = ({ handleClose, show}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <button type="button">sign in</button>
          <button type="button" onClick={handleClose}>cancel</button>
          <button type="button" onClick={handleClose}>
            X
          </button>
        </section>
      </div>
    );
  };

export default Error;