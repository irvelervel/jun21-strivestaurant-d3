// we'll need the state here!
// the plan is to bind our JSX with the state (map over it)
// at that point we just need to FILL the state

import { Component } from 'react'
import { Alert, ListGroup, Spinner } from 'react-bootstrap'
import { format, parseISO } from 'date-fns'

class Reservations extends Component {

    // 'this' is always an object
    // 'this' is filled with properties and methods belonging to the current INSTANCE of the class

    // 1) create an empty state, make room for our reservations that we're going to grab from the api
    // 2) create some JSX that maps over our state, generating all the time a list out of it
    // 3) we have now to FILL that state with our reservations

    // 1)
    state = {
        // initial value?
        reservations: [],
        isLoading: true,
        isError: false
    }

    clickHandler = (e) => {
        // does not create its own scope!
        // so it inherits the outside one
        // and this is why we get 'this' to be used
        // console.log(this.setState)
        console.log(e)
        this.setState({
            reservations: []
        })
    }

    // 3)
    componentDidMount = async () => {
        console.log("I'm componentDidMount")
        // here things happen AFTER the initial render
        // this is the PERFECT PLACE for a get request
        // because the user is already watching your "static" part of the jsx
        // now we're going to perform here the fetch (a get request)
        // it's somewhat like window.onload()

        // componentDidMount will always happen JUST ONCE!!!
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/reservation')
            // console.log(response)

            if (response.ok) {
                let reservations = await response.json()
                // console.log(reservations)
                this.setState({
                    reservations,
                    // this is equal to reservations: reservations
                    isLoading: false
                })
            } else {
                console.log('something went wrong with the server')
                this.setState({
                    isLoading: false,
                    isError: true
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    render() {

        // the render method fires AGAIN every time there's a change in the STATE
        // or in the PROPS of the component

        console.log("I'm render")

        // ? : this is the ternary operator
        // && this is the short-circuit operator
        return (
            <div className="text-center">
                <h2 onClick={this.clickHandler}>RESERVATIONS</h2>
                {
                    this.state.isLoading && // this is called the SHORT-CIRCUIT operator
                    <Spinner animation="border" variant="success" className="mx-auto" />
                }
                {
                    this.state.isError &&
                    <Alert variant="danger">
                        An error occurred!
                    </Alert>
                }
                {/* the "no reservations" message should come up if isLoading is false and */}
                {/* the reservations array is empty */}
                {

                    (this.state.reservations.length === 0 && !this.state.isLoading) ? (
                        <div>NO RESERVATIONS TO SHOW</div>) :
                        <ListGroup>
                            {/* 2 */}
                            {

                                // we want to convert our dateTime string into a more readable date string
                                // we need two steps:
                                // 1) convert the string we got from the database (the ugly one) into a proper Date object
                                // 2) once we have a proper Date object we can convert it back to a string, in a nicer format
                                this.state.reservations.map(reservation => (
                                    <ListGroup.Item key={reservation._id}>
                                        {reservation.name} for {reservation.numberOfPeople} at {
                                            format( // 2)
                                                parseISO(reservation.dateTime) // 1)
                                                , "yyyy MMMM dd | HH:m")
                                        }
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                }
            </div>
        )
    }
}

export default Reservations