import React from 'react';

class HelloWorld extends React.Component {

    state={
        who:'world!'
    }
    handleClick = (string) => {
        this.setState({
            who:string})
    };

  render() {
    return (

       <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={()=>this.handleClick('world!')}>world</button>
        <button onClick={()=>this.handleClick('friend!')}>friend</button>
        <button onClick={()=>this.handleClick('React!')}>React</button>
       </div>

    );
  }
}

export default HelloWorld;