import React from "react";

const Cells = ({
  alpha,
  state,
  country,
  name,
  web,
  domains,
  index,
  save,
  setUniversities,
}) => {
  const handleChange = (id) => {
    setUniversities((prew) => {
      return prew.map((el) => {
        if (id == el.index) {
          return { ...el, save: !el.save };
        } else {
          return el;
        }
      });
    });
  };

  return (
    <div className="cells">
      <div className="cell index">{index + 1}</div>
      <div className="cell">{alpha}</div>
      <div className="cell country">{country}</div>
      <div className="cell name">{name}</div>
      <div className="cell url">
        {web.map((url) => {
          return (
            <>
              <a href="">{url}</a>
              <br />
            </>
          );
        })}
      </div>
      <div className="cell domain">
        {domains.map((dom) => {
          return (
            <>
              {dom} <br />
            </>
          );
        })}
      </div>
      <div className="cell check">
        <input
          type="checkbox"
          id={`check-${index}`}
          checked={save}
          onChange={() => handleChange(index)}
        />
        <label htmlFor={`check-${index}`}>save in my list</label>
      </div>
    </div>
  );
};

export default Cells;
