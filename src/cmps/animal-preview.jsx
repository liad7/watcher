
export function AnimalPreview({animal}) {

    return (
        <tr>
            <td>{animal.type}</td>
            <td>{animal.count}</td>
            <td><a href="#">Search</a></td>
        </tr>
    )
}