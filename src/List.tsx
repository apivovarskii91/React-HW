type Props = {
    item: string
    item2: string
    item3: string
}
const List = ({ item, item2, item3 }: Props) => {
    return (
        <ul>
            <li>List item {item}</li>
            <li>List item {item2}</li>
            <li>List item {item3}</li>
        </ul>
    )
}
export default List
