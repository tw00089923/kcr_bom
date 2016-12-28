import React from 'react';
import _ from 'lodash';


export default class Select_option extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const {options ,id, processes ,name,key ,onChange ,error} = this.props;
    const header = _.map(options,(v,k)=>{
     return (<option value={k} key={k}> {v}</option>); 
    });

    return (
      <div>

      	  <div style={{"width":"100%"}}> {processes} </div>

      	 <select name={name} id={id} onChange={onChange} key={key}>  
      	
      		{header}

      	 </select>
               {error && <span className="help-block">{error}</span>}

      </div>
    );
  }
}


