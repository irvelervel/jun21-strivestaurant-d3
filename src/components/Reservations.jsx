// we'll need the state here!
// the plan is to bind our JSX with the state (map over it)
// at that point we just need to FILL the state

import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Reservations extends Component {

    // 'this' is always an object
    // 'this' is filled with properties and methods belonging to the current INSTANCE of the class

    // 1) create an empty state, make room for our reservations that we're going to grab from the api
    // 2) create some JSX that maps over our state, generating all the time a list out of it
    // 3) we have now to FILL that state with our reservations

    // 1)
    state = {
        // initial value?
        reservations: []
    }

    render() {
        // console.log(this)
        return (
            <div className="text-center">
                <h2>RESERVATIONS</h2>
                <ListGroup>
                    {/* 2 */}
                    {
                        this.state.reservations.map(reservation => (
                            <ListGroup.Item>RESERVATION</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

export default Reservations