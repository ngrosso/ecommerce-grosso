import ItemCount from "./ItemCount";

const ItemDetail = ({ producto, getItem }) => {

  const onAdd = (quantity) => {
    console.log("Añadido al carrito: " + quantity);
  }

  console.info(getItem())

  if (producto !== null) {
    return (<>
      <div className="center">
        <div className="card">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={producto.pictureURL} alt="" />
                <span className="card-title">{producto.title}</span>
              </div>
              <div className="card-content">
                <h3>$ {producto.price}</h3>
                <p>{producto.descripcion}</p>
              </div>
              <div className="card-action">
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
  } else {
    return null;
  }
}

export default ItemDetail;