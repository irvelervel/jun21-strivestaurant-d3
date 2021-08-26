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

    clickHandler = () => {
        // does not create its own scope!
        // so it inherits the outside one
        // and this is why we get 'this' to be used
        console.log(this.setState)
    }

    // 3)
    componentDidMount = async () => {
        console.log("I'm componentDidMount")
        // here things happen AFTER the initial render
        // this is the PERFECT PLACE for a get request
        // because the user is already watching your "static" part of the jsx
        // now we're going to perform here the fetch (a get request)
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            // console.log(response)
            let reservations = await response.json()
            // console.log(reservations)
            this.setState({
                reservations
                // this is equal to reservations: reservations
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {

        // the render method fires AGAIN every time there's a change in the STATE
        // or in the PROPS of the component

        console.log("I'm render")
        return (
            <div className="text-center">
                <h2 onClick={this.clickHandler}>RESERVATIONS</h2>
                <ListGroup>
                    {/* 2 */}
                    {
                        this.state.reservations.map(reservation => (
                            <ListGroup.Item key={reservation._id}>{reservation.name}</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

export default Reservations