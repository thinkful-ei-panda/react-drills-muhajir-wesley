import React from 'react'

class Accordion extends React.Component{

    state={
        expanded:null
    }

    handleButtonClick= (id)=>{
        this.setState({
            expanded:id
        })
    }


    generateText=() => {
        console.log (this.props.sections)

        return this.props.sections.map((section,index) =>
        <li>
            <button onClick={()=>this.handleButtonClick(index)}>{section.title}</button>
            {(this.state.expanded === index) && <p>{section.content}</p>}
        </li>)
    }

    

    render(){
        return(
            <ul>
                {this.generateText()}
            </ul>
        )
    }
}

export default Accordion