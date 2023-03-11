import { Card, CardActions, CardContent } from '@mui/material'
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
        <Card className="auto">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-mileage">
                    {mileage} mi • {transmission} • {engine} • {color}
                </div>
                <div className="product-border"></div>
                <div className="product-price">
                    Price: <span>${price}.00</span>
                </div>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    )
}
export default AutoListItem
