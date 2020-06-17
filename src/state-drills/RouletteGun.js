import React from 'react';

class RouletteGun extends React.Component {


  state = {
    chamber : null,
    spinningTheChamber : false
  }

  handleClick = () => {
    console.log('click')
    // console.log(this.state.spinningTheChamber)
    this.setState( {
      spinningTheChamber : true
    }); 
    this.timeout = setTimeout(() => {
      this.setState( { 
        chamber : Math.ceil(Math.random() * 8) ,
        spinningTheChamber : false
      }); 
    }, 2000)
  }

  componentWillMount() {
    clearTimeout(this.timeout)
  }

  generateMessage = () => {
    if(this.state.spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger'
    }
    else if(this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!'
    }
    return 'you are safe'
  }

render() {
  return (
    <div>
      <p>
        {this.generateMessage()}
      </p>
      <button onClick={this.handleClick}>Pull The Trigger</button>
    </div>
  )
}




}

RouletteGun.defaultProps = {
  bulletInChamber : 8
}


export default RouletteGun