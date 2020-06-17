import React from 'react';

class Bomb extends React.Component {

    state={
        count:0,
        display:'tick'
    }

    componentDidMount() {
        let interval = setInterval(() => {
          this.setState({
              count:{interval}
          })
          if(this.state.count<8&&this.state.count%2===0){
            this.setState({
                display:'tick'              
            })
          }else if(this.state.count<8&&this.state.count%2===1){
            this.setState({
                display:'tock'              
            })
          }else{
            this.setState({
                display:'BOOM!'                             
            })
            clearInterval(interval) 
          }
        }, 1000)
      }
     


  render() {
    return (

       <div>
        <p>{this.state.display}</p>        
       </div>

    );
  }
}

export default Bomb;