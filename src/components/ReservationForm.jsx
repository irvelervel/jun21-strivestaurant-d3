// because we need a state
// we'll generate this component as a Class
import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

// name
// phone
// numberOfPeople
// smoking
// dateTime
// specialRequests

class ReservationForm extends Component {

    // this will be a controlled form
    // we'll be able to tell at any given moment the current values of the form
    // because we're going to save them in the component's state!

    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    handleInput = (e, propertyName) => {
        // this function needs two things: the event coming from the input and
        // which property of this.state.reservation we should update

        // if we're coming from the smoking checkbox, we should not use
        // e.target.value, but instead e.target.checked (it will be true/false)

        this.setState({
            reservation: {
                ...this.state.reservation,
                // copying over name, phone, numberOfPeople, smoking etc.
                [propertyName]: propertyName === 'smoking'
                    ? e.target.checked
                    : e.target.value, // for every field but the smoking
            }
        })
    }

    // handleSubmit = (e) => { // with chained thens
    //     e.preventDefault()
    //     console.log(this.state.reservation)

    //     try {
    //         // the place for every operation that might fail outside of your control
    //         fetch("https://striveschool-api.herokuapp.com/api/reservation", {
    //             method: 'POST',
    //             body: JSON.stringify(this.state.reservation),
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         })
    //             .then(response => {
    //                 if (response.ok) {
    //                     // reservation saved!
    //                     alert('your reservation was saved correctly!')
    //                     this.setState({
    //                         reservation: {
    //                             name: '',
    //                             phone: '',
    //                             numberOfPeople: 1,
    //                             smoking: false,
    //                             dateTime: '',
    //                             specialRequests: ''
    //                         }
    //                     })
    //                 } else {
    //                     alert('your reservation was NOT saved correctly!')
    //                 }
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    handleSubmit = async (e) => { // with async/await
        e.preventDefault()
        console.log(this.state.reservation)

        try {
            // the place for every operation that might fail outside of your control

            let response = await fetch("https://striveschool-api.herokuapp.com/api/reservation", {
                method: 'POST',
                body: JSON.stringify(this.state.reservation),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            if (response.ok) {
                // reservation saved!
                alert('your reservation was saved correctly!')

                // this is for resetting the form to its initial state
                this.setState({
                    reservation: {
                        name: '',
                        phone: '',
                        numberOfPeople: 1,
                        smoking: false,
                        dateTime: '',
                        specialRequests: ''
                    }
                })
            } else {
                alert('your reservation was NOT saved correctly!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className="text-center">
                <h2>MAKE A RESERVATION :)</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Your name?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert your name"
                            value={this.state.reservation.name}
                            onChange={(e) => this.handleInput(e, 'name')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insert your phone"
                            value={this.state.reservation.phone}
                            onChange={(e) => this.handleInput(e, 'phone')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>How many people?</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.reservation.numberOfPeople}
                            onChange={(e) => this.handleInput(e, 'numberOfPeople')}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Do you smoke?"
                            checked={this.state.reservation.smoking} // true or false
                            onChange={(e) => this.handleInput(e, 'smoking')}
                        // the value property here has two possible values
                        // "on" and "off"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>When?</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={this.state.reservation.dateTime}
                            onChange={(e) => this.handleInput(e, 'dateTime')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={this.state.reservation.specialRequests}
                            onChange={(e) => this.handleInput(e, 'specialRequests')}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit Reservation
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm