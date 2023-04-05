export type Product = {
    id: number
    title: string
    mileage: number
    transmission: string
    engine: string
    color: string
    price: number
    image: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'Audi S4 2020',
        mileage: 20360,
        transmission: 'Manual',
        engine: 'Petrol',
        color: 'Blue',
        price: 49950,
        image: './images/audi-1.jpg',
    },
    {
        id: 2,
        title: 'Tesla Model 3',
        mileage: 358,
        transmission: 'Automatic ',
        engine: 'Electric ',
        color: 'Black',
        price: 42800.0,
        image: './images/tesla-1.jpg',
    },
    {
        id: 3,
        title: 'Jeep Grand Cherokee 2021',
        mileage: 15,
        transmission: 'Automatic ',
        engine: 'Diesel ',
        color: 'White',
        price: 35460.0,
        image: './images/jeep-1.jpg',
    },
    {
        id: 4,
        title: 'BMW 118i 2020',
        mileage: 20580,
        transmission: 'Automatic ',
        engine: 'Petrol',
        color: 'Blue',
        price: 45100.0,
        image: './images/bmw-car-dealer.jpg',
    },
    {
        id: 5,
        title: 'Nissan 350Z 2021',
        mileage: 36500,
        transmission: 'Manual',
        engine: 'Petrol',
        color: 'White',
        price: 26230.0,
        image: './images/citroen-car-dealer.jpg',
    },
    {
        id: 6,
        title: 'Mercedes Benz AMG 2020',
        mileage: 53120,
        transmission: 'Automatic ',
        engine: 'Diesel ',
        color: 'Grey',
        price: 32600.0,
        image: './images/mercedes-car-dealer.jpg',
    },
]
export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
