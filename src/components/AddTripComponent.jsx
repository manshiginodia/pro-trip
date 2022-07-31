import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AddTripComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: [...this.props.trips]
        }
    }
    addNewTrip = () => {
        let date = document.getElementById("date").value;
        let place = document.getElementById("place").value;
        let type = document.getElementById("type").value;
        this.state.trips.push({ "date": date, "place": place, "type": type })
        this.props.addTrip(this.state.trips)
    }
    render() {
        return (
            <div className="trip">
                <p className="headerer">Add a Trip</p>
                <label htmlFor="">Date:</label>
                <input type="date" name="" id="date" />
                <label htmlFor="">Place:</label>
                <input type="text" name="" id="place" />
                <label htmlFor="">Type:</label>
                <select name="" id="type">
                    <option value="trek">Trek</option>
                    <option value="club">Club</option>
                    <option value="tropic">Tropic</option>
                </select>
                <Link to="/list" className="submiiter" onClick={this.addNewTrip}>Submit</Link>
            </div>
        )
    }
}