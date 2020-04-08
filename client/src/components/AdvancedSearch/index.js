import React from "react";

function AdvancedSearch(props) {
  return (
    <form onSubmit={props.getSearch} className="form mb-3">
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            className="form-control"
            onChange={props.changeQuery}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            onChange={props.changeQuery}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-6">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="form-control"
            onChange={props.changeQuery}
          />
        </div>
        <div className="form-group col-6">
          <label htmlFor="publisher">Publisher</label>
          <input
            type="text"
            name="publisher"
            id="publisher"
            className="form-control"
            onChange={props.changeQuery}
          />
        </div>
      </div>
      <input type="submit" value="Search" className="btn btn-primary ml-2" />
    </form>
  );
}

export default AdvancedSearch;
