import React from 'react';

const Form = (props) => {

  const style = {
    display: 'flex',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style} className="mt-4">
      <form onSubmit={props.onSearch}>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipe's name" name="recipeName" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
