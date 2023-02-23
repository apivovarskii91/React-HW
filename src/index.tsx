import { type } from 'os'
import React from 'react'
import ReactDOM from 'react-dom/client'

type HedearProps = {
    title: string
}

type ContentProps = {
    text1: string
    text2: string
}

const Hedear = ({ title }: HedearProps) => {
    return <h1>Helow {title}</h1>
}

const Content = ({ text1, text2 }: ContentProps) => {
    return (
        <React.Fragment>
            <p>{text1}</p>
            <p>{text2}</p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Hedear title="React" />
            <Content
                text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                sapiente voluptate optio adipisci expedita voluptates minima sed
                aliquam! At impedit ratione architecto eaque recusandae,
                consequatur reprehenderit! Animi optio iste perferendis."
                text2="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati labore porro itaque. Molestias corrupti eos odio neque
                ratione autem vero minima consequuntur, provident aliquam in sed
                omnis nihil quibusdam aut?"
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
