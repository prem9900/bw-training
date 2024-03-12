
import React from "react"
class App  extends React.Component {
    state = {
           counter:0
    }
    render() {
          return(
                    <>
                        <h1>counter value :{this.state.counter}</h1>
                        <button onClick={() => {
                        this.setState({

                            counter:this.state.counter + 1

                        })

                  }}>Change </button> 

                    </>
          )

    }
  
}

export default App