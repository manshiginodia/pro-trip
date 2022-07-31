import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarPlus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/home"><FontAwesomeIcon icon={faHome} /></Link>
                <Link to="/addTrip"><FontAwesomeIcon icon={faCalendarPlus} /></Link>
                <Link to="/list"><FontAwesomeIcon icon={faCalendarAlt} /></Link>
            </div>
        )
    }
}