import { Button, Card, CardActions, CardContent } from '@mui/material'

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
    addAutoToCart: (id: number, count: number) => void
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
    addAutoToCart,
    isLiked,
    toggleLike,
}: Props) => {
    const [count, setCount] = useState<number>(1)

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
                    <Button
                        onClick={() => addAutoToCart(id, count)}
                        sx={{
                            backgroundColor: '#bd162d',
                            color: 'white',
                            margin: '0 0 10px 20px',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                            },
                        }}
                        variant="outlined"
                    >
                        Add to card
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default AutoListItem
