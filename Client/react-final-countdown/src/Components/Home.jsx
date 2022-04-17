import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const display = () => {
    fetch(`http://localhost:8080/teachers?_limit=4&_page=${page}`) //_limit=3&_page=${page}
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    display();
  }, [page]);

  return (
    <div>
      <Link to="/login">Login</Link>

      <h2>Teacher's Details</h2>
      <div className="Cards">
        {data.map((e) => (
          <div key={e._id}>
            <img
              src={e.img}
              alt=""
              style={{ width: "300px", height: "300px" }}
            />
            <h3>Name : {e.name}</h3>
            <p>Age : {e.age}</p>
            <p>Gender : {e.gender}</p>
            {/* {e.class_id.map((el) => (
              <div key={el._id}>
                <p>Grade : {el.Grade}</p>
                <p>Section : {el.Section}</p>
                <p>Subject : {el.Subject}</p>
              </div>
            ))} */}
          </div>
        ))}
      </div>

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
