import React from 'react';
import _ from 'lodash';


export default class Select_option extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const {options , name ,type , min ,max , maxLength,key} = this.props;
    return (
      <div>

      	{name}

      	 <select name=name id="" onChange={this.onChange} key=key>  
      	
      		{_.map(options ,(v,k)=>{
      			return (<option value={v} > {v}</option>);
      		}) }

      	 </select>


      </div>
    );
  }
}


