import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header'
import Content from './Content'
import List from './List'

const App = () => {
    return (
        <>
            <Header title="React" />
            <Content
                text1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit est explicabo provident laboriosam distinctio! Ratione excepturi voluptatem eos blanditiis soluta qui iste, quam voluptatum dolor ipsum recusandae ad minima!"
                text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugit est explicabo provident laboriosam distinctio! Ratione excepturi voluptatem eos blanditiis soluta qui iste, quam voluptatum dolor ipsum recusandae ad minima!"
            />
            <List item="App" item2="React" item3="TS" />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
