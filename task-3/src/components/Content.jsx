import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UniversitiesActionCreators } from "../redux/universities/universities-actions";
import CellHeader from "./CellHeader";
import Cells from "./Cells";

const Content = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState(null);

  const data = useSelector((state) => state.universities);

  //console.log(universities);

  useEffect(() => {
    if (localStorage.getItem("universities") != null) {
      console.log(JSON.parse(localStorage.getItem("universities")));
      setUniversities(JSON.parse(localStorage.getItem("universities")));
    }
  }, []);

  useEffect(() => {
    if (data.data != null) {
      setUniversities(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (universities != null) {
      localStorage.setItem("universities", JSON.stringify(universities));
    }
  }, [universities]);

  const handleSend = () => {
    if (country == "") {
      alert("Enter ypur country");
    } else {
      dispatch(UniversitiesActionCreators.getData(country));
      setCountry("");
    }
  };

  const handleReset = () => {
    setUniversities(null)
    localStorage.setItem("universities", null)
    setCountry("");
    dispatch(UniversitiesActionCreators.resetUniversiti());
  };

  return (
    <div className="container">
      <div className="handle">
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={handleReset}>Reset</button>
        <div className="counter">
          Total saved: { universities && universities.filter((item) => item.save).length}
        </div>
      </div>

      <div className="table">
        {universities && [
          <CellHeader />,
          universities.map((el) => {
            return (
              <Cells
                key={el.name}
                alpha={el.alpha_two_code}
                state={el["state-province"]}
                country={el.country}
                name={el.name}
                web={el.web_pages}
                domains={el.domains}
                index={el.index}
                save={el.save}
                setUniversities={setUniversities}
              />
            );
          }),
        ]}
      </div>
    </div>
  );
};

export default Content;
