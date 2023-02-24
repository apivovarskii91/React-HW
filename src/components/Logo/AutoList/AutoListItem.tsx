import { Button, Card, CardActions, CardContent } from '@mui/material'
import './AutoListItem.scss'

type Props = {
    title: string
    mileage: number
    transmission: string
    engine: string
    color: string
    price: number
    image: string
}
const AutoListItem = ({
    title,
    mileage,
    transmission,
    engine,
    color,
    price,
    image,
}: Props) => {
    return (
        <Card variant="outlined" className="auto">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-mileage">Mileage: {mileage} mi</div>
                <div className="product-transmission">
                    Transmission: {transmission}
                </div>
                <div className="product-engine">Engine: {engine}</div>
                <div className="product-color">Color: {color}</div>
                <div className="product-price">
                    Price: <span>${price}</span>
                </div>
            </CardContent>
            <CardActions className="btns-wrap">
                <Button variant="outlined">Add to card</Button>
            </CardActions>
        </Card>
    )
}
export default AutoListItem
