import React from 'react';

// Parent Component
      class ParentComponent extends React.Component{
        render(){
              return(
                <div>
                <h1> this is parent Component</h1>
                <Childcomponent name="prem"             />


                </div>
              )
        }
      }






// Child Component
class Childcomponent extends React.Component{
  render(){

            return(
            <p>my name is {this.props.name}   </p>


)

  }
}


export default ParentComponent;
