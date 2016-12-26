import React from 'react';

export default class Tip extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {



  	const { index_1 , content } = this.props;
  	const tip = ({  content_10: " " ,
  					content_20: " " ,
  					content_30: " " ,
  					content_40: " " ,
  					content_50: " " ,
  					content_60: " " ,
  					content_70: " " ,
  					content_80: " " ,
  					content_90: " " ,
  					content_92: " " ,




  	  })[`content_${content}`]||['無內容顯示'];

  	
    return (
      <div> <label> Tip </label> <p> {tip}</p></div>

    );
  }
}

