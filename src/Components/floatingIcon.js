import React from 'react';

class floatingIcon extends React.Component {
constructor(props) {
   super(props);
   this.state = {
      horizontalPosition: "0px",
      verticalPosition: "0px",
      imgRef: "http://blah.com/asdf",
      backgroundColor: "#000000"
   }

}

changePosition(horizontalPosition, verticalPosition) {
   this.setState({
      horizontalPosition,
      verticalPosition
   });
 }

render() {
   return (
    <div>
       <img 
          href={this.state.imgRef}
          style={
             {translate(this.state.horizontalPosition,
                this.state.verticalPosition)}, 
                backgroungColor:{this.state.backgroundColor}}>
         </img>
      </div>
     );
  }
 }
 
 export default floatingIcon;