import React,{Component} from 'react'

class ErrorView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <span>{this.props.message}</span>
    );
  }
}

export default ErrorView;
