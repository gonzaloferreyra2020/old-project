


const Item = ({item}) =>{
  return(
    <div className="Item">
      <a href="">
        <img src={item.image} alt="" />
          <p>{item.title}</p>
      </a>
      <p>${item.price}</p>
      <h5>Stock:{item.stock}</h5>
      <button>Ver más</button>
      </div>
  );
}

export default Item;