import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 60000000000,
      cond: false,


    }
    setInterval(
      () => {
        this.state.cond &&
          // this.state.timer ++
          this.setState({
            timer: (this.state.timer + 1000)
          })
      },
      1000
    )
  }
  reset = () => {
    this.setState({
      timer: 0,

    })
  }

  star = () => {
    if (!this.state.cond) {
      this.setState({
        cond: true


      })
    } else {
      this.setState({
        cond: false

      })
    }

  }
  render() {

    let min = Math.floor((this.state.timer / 60000) % 60)
    let heure = Math.floor((this.state.timer / 3600000) % 24)
    let second = Math.floor((this.state.timer / 1000) % 60)

    return (
      <div className="cloke" >
        {/* <h1> CHRONOMETRE </h1>
        <h1> {this.state.timer} </h1> */}

        <table className="clok">


          <p>Heures  Minutes  Secondes</p>
          <p>{String(heure).padStart(2, 0)} &nbsp;: &nbsp;{String(min).padStart(2, 0)} &nbsp;: &nbsp;{String(second).padStart(2, 0)}</p >


        </table>
        <div className="mb-2">
          <Button variant="primary" size="lg" onClick={this.star}>
            {this.state.cond ? "Pause" : "Start"}
          </Button>
          <Button variant="primary" size="lg" onClick={this.reset}>
            Reset
          </Button>


        </div>
      </div >

    )
  }
}
export default Timer