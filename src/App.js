import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
    }
  }

  componentDidMount() {
    console.log('I am mounted')
    axios
      .get('https://pokeapi.co/api/v2/pokemon/25')
      .then((res) => {
        console.log(res.data)
        this.setState({
          pokemon: res.data,
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    return <div className="App">{JSON.stringify(this.state.pokemon)}</div>
  }
}
export default App
