


const Item = ({item}) =>{
  return(
    
      <a href="">
        <img src={item.image} alt="" />
          <p>{item.title}</p>
      </a>
    
  );
}

export default Item;