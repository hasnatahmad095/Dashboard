import React, { Component } from 'react'
import Matrials from './Matrials'
import Headernavbar from './Headernavbar'
import Bannerhome from './Bannerhome'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Matrials/>
        <Headernavbar/>
        <Bannerhome/>
      </div>
    )
  }
}
