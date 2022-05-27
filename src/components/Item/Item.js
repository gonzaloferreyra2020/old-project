import {Card, Button} from 'react-bootstrap';
import "../../styles/styles.css";


const Item = ({item}) =>{
  return(
    <>
    <div className="CardItem">
      
    <Card style={{ width: "18rem", border: "1px solid #ccc" }}>
      <Card.Img variant="top" src={item.image} className="img-fluid" />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <p>Stock: {item.stock}</p>
          <p>Price : {item.price}</p>
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>

    </div>
    </>
  );
}

export default Item;