import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employees/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
//only include these once they are built - previous practice exercise


class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/employees" render={(props) => {
          console.log("hi")
          return <EmployeeList />
        }} />
        <Route path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/locations" render={(props) => {
          return <LocationList />
        }} />
      </>
    )
  }
}

export default ApplicationViews