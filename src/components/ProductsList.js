import React from "react";

function ProductsList({ datas }) {
  return (
    <div className="products">
      <h3>Xush Kelibsiz Mehmon!</h3>

      <div className="col-md-10 mx-auto">
        <table className="table table-hover">
          <thead className="text-white bg-primary text-center">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Supplier</th>
              <th scope="col">Barcode</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {datas.map((items, id) => (
              <tr key={id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.supplier}</td>
                <td>{items.barcode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductsList;
