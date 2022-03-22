import { Card } from "react-bootstrap"

export default function ProductCard({
    product : {product_code, name, brand, thumbnail, city, price, seller, rating, search_quantity}
}) {
    return (
        <>
          <Card style={{ width: '18rem' }}>
              <CardMedia component="img" height="194" image={thumbnail} alt="img" />
              <Card.Body>
                  <Card.Title>Nombre</Card.Title>
                  <Card.Text>
                      Marca
                      Ciudad
                      Precio
                      Vendedor
                      Rating
                      Cantidad de busquedas
                  </Card.Text>
              </Card.Body>
          </Card>
        </>
    )
}

/*
<Card.Title>${name}</Card.Title>
                  <Card.Text>
                      ${brand}
                      ${city}
                      ${price}
                      ${seller}
                      ${rating}
                      ${search_quantity}
                  </Card.Text>
*/