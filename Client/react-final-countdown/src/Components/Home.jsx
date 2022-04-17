import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState([]);

  const handleSort = () => {
    let temp = [...data];
    temp.sort((a, b) => a.age - b.age);
    setSortdata(temp);
  };

  //   console.log("sortdata:", sortdata);

  const handleGender = (value) => {
    //   let temp = [...data];
    if (value == "All") {
      setSortdata(data);
    } else {
      let temp = data.filter((e) => e.gender == value);
      setSortdata(temp);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:8080/teachers`) //?_limit=3&_page=${page}
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSortdata(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/login">Login</Link>
      <br />
      <button onClick={handleSort}>Sort by age</button> <br />
      <button onClick={() => handleGender("All")}>All</button>
      <button onClick={() => handleGender("Male")}>Sort by Male</button>
      <br />
      <button onClick={() => handleGender("Female")}>Sort by Female</button>
      <h2>Teacher's Details</h2>
      <div className="Cards">
        {sortdata.map((e) => (
          <div key={e._id}>
            <img
              src={e.img}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
            <h3>Name : {e.name}</h3>
            <p>Age : {e.age}</p>
            <p>Gender : {e.gender}</p>
            {e.class_id.map((el) => (
              <div key={el._id} style={{ border: "1px solid gray" }}>
                <p>Grade : {el.Grade}</p>
                <p>Section : {el.Section}</p>
                <p>Subject : {el.Subject}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
