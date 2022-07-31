import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import AddTripComponent from './components/AddTripComponent';
import ListComponent from './components/ListComponent';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      trips: [
        { date: "2017-01-10", place: "Manali", type: "trek" },
        { date: "2017-04-05", place: "Mumbai", type: "club" },
        { date: "2017-02-09", place: "Marina", type: "tropic" },
        { date: "2020-10-21", place: "Coimbatore", type: "trek" }
      ]
    }
  }
  addTrip = (newTrips) => {
    this.setState({
      trips: [...newTrips]
    })
  }
  render() {
    return (
        <div className="containment">
        <BrowserRouter>
        <HeaderComponent />
          <Routes>
            <Route path="/home" element={<HomeComponent trips={this.state.trips} />} />
            <Route path="/addtrip" element={<AddTripComponent addTrip={this.addTrip} trips={this.state.trips} />} />
            <Route path="/list" element={<ListComponent trips={this.state.trips} />} />
          </Routes>
        </BrowserRouter>
        </div>
    );
  }
}
