import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { Container } from '@mui/system'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import InventoryPage from 'pages/InventoryPage/InventoryPage'
import LatestsOffersPage from 'pages/LatestsOffersPage/LatestsOffersPage'
import AbautPage from 'pages/AbautPage/AbautPage'
import AutoNewsPage from 'pages/AutoNewsPage/AutoNewsPage'
import { omit } from 'lodash'

type Props = {}

type AutoInCartType = {
    [id: number]: number
}

type ProductsLike = {
    [id: number]: boolean
}

const App = (props: Props) => {
    const [autoInCart, setAutoInCart] = useState<AutoInCartType>({
        // 1: 0,
        // 2: 0,
    })

    const [productsLike, setProductsLike] = useState<ProductsLike>({
        1: true,
        2: true,
    })
    const addAutoToCart = (id: number, count: number) => {
        setAutoInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setAutoInCart((prevState) => omit(prevState, id))
    }

    const toggleLike = (id: number) => {
        setProductsLike((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header autoInCart={autoInCart} />
            <Container maxWidth="xl" component="main">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                addAutoToCart={addAutoToCart}
                                productsLike={productsLike}
                                toggleLike={toggleLike}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                autoInCart={autoInCart}
                                removeProductFromCart={removeProductFromCart}
                            />
                        }
                    />
                    <Route path="/inventory" element={<InventoryPage />} />
                    <Route
                        path="/latestsOffers"
                        element={<LatestsOffersPage />}
                    />
                    <Route path="/abaut" element={<AbautPage />} />
                    <Route path="/AutoNews" element={<AutoNewsPage />} />
                </Routes>
            </Container>
            <Footer />
        </>
    )
}

export default App
