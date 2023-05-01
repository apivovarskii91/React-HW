import { Button, Card, CardActions, CardContent } from '@mui/material' // eslint-disable-line @typescript-eslint/no-unused-vars

import './AutoListItem.scss'
import { useState } from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'

type Props = {
    id: number
    title: string
    mileage: number
    transmission: string
    engine: string
    color: string
    price: number
    image: string

    isLiked: boolean
    toggleLike: (id: number) => void
}
const AutoListItem = ({
    id,
    title,
    mileage,
    transmission,
    engine,
    color,
    price,
    image,

    isLiked,
    toggleLike,
}: Props) => {
    const [count, setCount] = useState<number>(1) // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
        <Card className="auto">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-title">{title}</div>
                <div className="product-mileage">
                    {mileage} mi • {transmission} • {engine} • {color}
                    <Button onClick={() => toggleLike(id)}>
                        {isLiked ? (
                            <ThumbUpAltIcon
                                fontSize="large"
                                sx={{ color: '#bd162d', marginBottom: '10px' }}
                            />
                        ) : (
                            <ThumbUpOffAltIcon
                                fontSize="large"
                                sx={{
                                    color: '#bd162d',
                                    marginBottom: '10px',
                                }}
                            />
                        )}
                    </Button>
                </div>
                <div className="product-border"></div>
                <div className="product-price">
                    Price: <span>${price}.00</span>
                </div>
            </CardContent>
        </Card>
    )
}
export default AutoListItem
