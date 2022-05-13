import { Card,Button } from "react-bootstrap";
export default function Item(product){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <p>Price:{product.price}</p>
            <p>Stock:{product.stock}</p>
          </Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    )
}