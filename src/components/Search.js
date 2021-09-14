import React, { useEffect, useState } from "react";
import "../styles/Search.css";
import { getToken } from "../Utils/Common";

function Search() {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = getToken();

  useEffect(() => {
    if (token) {
      fetch(`https://face.ox-sys.com/variations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token} `,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: {
          size: 1,
          page: 1,
          stock: {
            exist: true,
            location: [42],
          },
        },
      })
        .then((response) => response.text())
        .then((data) => {
          let myData = JSON.parse(data);
          setDatas(myData.items);
          // console.log(myData.items[0].name);
        });
    }
  }, []);

  return (
    <div className="search">
      {!token ? (
        <h3>
          Xush Kelibsiz Mehmon! Izlashdan foydalanish uchun autorizatsiyadan
          o'ting
        </h3>
      ) : (
        <div>
          <div className="search_input">
            <input
              type="search"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>
          <ul className="list-group">
            {datas
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((data) => (
                <li key={data.id} className="list-group-item">
                  {data.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
