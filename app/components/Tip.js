import React from 'react';

export default class Tip extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
  	const { index_1 , content } = this.props;
    return (
      <div> <label> Tip </label> <p> {content} </p></div>

    );
  }
}

