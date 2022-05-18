import { Card,Button } from "react-bootstrap";

export default function Item(item){
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            <p>Price:{item.price}</p>
            <p>Stock:{item.stock}</p>
          </Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    )
}