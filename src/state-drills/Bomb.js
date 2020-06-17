import React from 'react';

class Bomb extends React.Component {

    state={
        count:0,
        display:'tick'
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count:this.state.count+1
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
                count:0,
                display:'BOOM!'                             
            })
            clearInterval(this.interval)        
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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