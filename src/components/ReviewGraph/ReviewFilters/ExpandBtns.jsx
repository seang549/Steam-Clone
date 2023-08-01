const ExpandBtns = ({ expanded, toggleExpanded }) => {
    if (!expanded) {
      return (
        <div>
          <span id="review_show_graph_button">
            <span onClick={toggleExpanded}>Show graph</span>
            <div className="graph_toggle_icon down"></div>
          </span>
        </div>
      );
    } else {
      return (
        <div>
          <span id="review_hide_graph_button">
            <span onClick={toggleExpanded}>Hide graph</span>
            <div className="graph_toggle_icon up"></div>
          </span>
        </div>
      );
    }
  };
  
  export default ExpandBtns;
  

