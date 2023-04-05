import {
    Button,
    Card,
    CardContent,
    TextField,
    TextareaAutosize,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'

type Props = {}

type Reviews = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    // eslint-disable-line @typescript-eslint/no-unused-vars

    const arrReviews = [
        {
            name: 'Саша',
            text: 'Выражаю большую благодарность администратору салона, а также консультанту сервиса Шрамко Сергею за квалифицированный подход и быстрое решение проблемы. Радует, что в компании работают такие профессионалы, которые с большим вниманием относятся к проблемам клиентов и помогают их решить. Большое Вам спасибо',
        },
        {
            name: 'Валера',
            text: ' Отличный сервис, очень доволен обслуживанием. Помогли решить проблему, которую вообще никто не мог решить.',
        },
    ]
    const [reviews, setReviews] = useState<Reviews[]>(arrReviews)
    const [newReview, setNewReview] = useState<Reviews>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setReviews((prevState) => {
            return [...prevState, newReview]
        })

        setNewReview({
            name: '',
            text: '',
        })
    }
    return (
        <div>
            <Typography
                variant="h4"
                component="h2"
                sx={{ margin: '30px 0', fontWeight: 'bold' }}
            >
                Reviews
            </Typography>
            {reviews.map((item, i) => (
                <Card variant="outlined" sx={{ margin: '30px 0' }} key={i}>
                    <CardContent>
                        <div style={{ fontWeight: 'bold' }}>{item.name}:</div>
                        <div>{item.text}</div>
                    </CardContent>
                </Card>
            ))}

            <form onSubmit={sendReview}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        label="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        style={{ height: '100px', width: '220px' }}
                        maxRows={15}
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button
                    variant="outlined"
                    type="submit"
                    endIcon={<SendIcon />}
                    sx={{
                        backgroundColor: '#bd162d',
                        color: 'white',
                        margin: '0 0 20px 0px',

                        width: '220px',
                        '&:hover': {
                            backgroundColor: '#1976d2',
                        },
                    }}
                >
                    Send
                </Button>
            </form>
        </div>
    )
}

export default Reviews
