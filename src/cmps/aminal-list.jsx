import { Component } from "react"
import { AnimalPreview } from "./animal-preview"

export class AnimalList extends Component {

    animalInfos = [
        { _id: 'a101', type: 'Malayan Tiger', count: 787 },
        { _id: 'a102', type: 'Mountain Gorilla', count: 212 },
        { _id: 'a103', type: 'Fin Whale', count: 28 },
    ]

    render() {
        return (
            <section className="animal-list">
                <h2>Rare Animals</h2>
                <table>
                    <tbody>
                        {this.animalInfos.map(animal => <AnimalPreview key={animal._id} animal={animal} />)}
                    </tbody>
                </table>
            </section>
        )
    }
}