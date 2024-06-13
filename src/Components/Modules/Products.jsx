import React, { useState } from 'react'
import { Button, Container,Card } from 'react-bootstrap'

function Products() {

    const [items, setItems] = useState([
        {
            id: 1,
            product_name: 'Product 1',
            price: 999,
            image: "/logo192.png"
        },
        {
            id: 2,
            product_name: 'Product 2',
            price: 9199,
            image: "/logo192.png"
        },
    ])
  return (
    
            <Container className= "rows" style={{display: "flex"}}>
                    {items.map((elem) => {
                        return( <Card key={elem.id} className="col-md-3" >
                            <Card.Img variant = 'top' style={{height:"200px",width:"200px"}} src={process.env.PUBLIC_URL + elem.image}/>
                            <Card.Body>
                            <Card.Title>{elem.product_name}</Card.Title>
                            <Card.Text>${elem.price}</Card.Text>
                            <Button >Buy NOw</Button>
                             </Card.Body>
                            </Card>
                        )
                    
                })}
            </Container>
  )
}

export default Products
