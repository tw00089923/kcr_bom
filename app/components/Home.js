// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';



export default class Home extends Component {
  render() {
    return (
      <div>
       <div className={styles.leftcontainer}> 
       
       </div> 
        <div className={styles.container}>
          <h2>KCR_BOM</h2>
          <ul className={styles.liststyle}>
          <li> <Link to="/counter">資料簡介</Link></li>
          <li> <Link to="/bom"> 新編 Kcr_bom </Link> </li>
         
          </ul>
        </div>

      </div>
    );
  }
}
