import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employees/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employees/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'


class ApplicationViews extends Component {

  render() {
    return (
      <>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        }} />

        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the employeeId to the EmployeeDetailComponent
          return <EmployeeDetail
            employeeId={parseInt(props.match.params.employeeId)}
            {...props}
          />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the ownerId to the OwnerDetailComponent
          return <OwnerDetail
            ownerId={parseInt(props.match.params.ownerId)}
            {...props}
          />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId to the LocationDetailComponent
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />
      </>
    )
  }


}

export default ApplicationViews