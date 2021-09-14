import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../styles/Products.css";
import { getToken, getUser, removeUserSession } from "../Utils/Common";
import Pagination from "./Pagination";
import ProductsList from "./ProductsList";

function Products() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerpage] = useState(3);

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
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  const indexOfLastData = currentPage * datasPerpage;
  const indexOfFirstData = indexOfLastData - datasPerpage;
  const currentData = datas.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="product">
      {!token ? (
        <h3>
          Xush Kelibsiz Mehmon! Mahsulotlarimizni ko'rish uchun autorizatsiyadan
          o'ting
        </h3>
      ) : (
        <div>
          <ProductsList datas={currentData} />
          <Pagination
            datasPerPage={datasPerpage}
            totalDatas={datas.length}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
}

export default Products;
