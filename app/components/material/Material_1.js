import React from 'react';
import _ from 'lodash';
import dialog from 'electron';
import color from '../../data/color';
import style from './Material.css';
import cx from 'classname';

import Select from 'react-select';
import 'react-select/dist/react-select.css'

export default class Matreial_1 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    show_first:false,
    show_second:false,
    show_1_1:false,
    show_1_2:false,
  	index_1_1: "00",
  	index_1_2: "00",
  	index_1_3: "00",
  	index_1_4: "00",
  	index_1_1_1:"00",
  	index_1_1_2:"00",
  	index_1_1_3:"0000",

  	}
  	this.onChange = this.onChange.bind(this);
  	this.show = this.show.bind(this);
  }
  show(){
  	this.setState({show_first:!this.state.show_first});

  }
  onChange(e){

  	if(e.target.name == "index_1_1"){ 
  			console.log(e.target);
  			this.setState({index_1_1:e.target.value});
  	}
  	if(e.target.name == "index_1_2"){ 
  			console.log(e.target);
  			this.setState({index_1_2:e.target.value});
  	}
  	if(e.target.name == "index_1_3"){ 
  			console.log(e.target);
  			this.setState({index_1_3:e.target.value});
  	}
  	if(e.target.name == "index_1_4"){ 
  			console.log(e.target);
  			this.setState({index_1_4:e.target.value});
  	}
  	 	if(e.target.name == "index_1_1_1"){ 
  			console.log(e.target);
  			this.setState({index_1_1_1:e.target.value});
  	}
  	 	if(e.target.name == "index_1_1_2"){ 
  			console.log(e.target);
  			this.setState({index_1_1_2:e.target.value});
  	}
  	 	if(e.target.name == "index_1_1_3"){ 
  			console.log(e.target);
  			this.setState({index_1_1_3:e.target.value});
  	}
  
  }


  render() {

  	const type =[
  	{type:"UL1007",number:"00"},
  	{type:"UL1015",number:"01"},
  	{type:"UL1430",number:"02"},
  	{type:"UL1431",number:"03"},
  	{type:"UL1509",number:"04"},
  	{type:"UL1672",number:"05"},
  	{type:"UL1061",number:"06"},
  	{type:"UL1180",number:"07"},
  	{type:"UL1617",number:"08"},
  	{type:"UL1331",number:"09"},
  	{type:"UL1095",number:"10"},
  	{type:"UL1533",number:"11"},
  	{type:"UL1332",number:"12"},
  	{type:"UL2464",number:"13"},
  	{type:"UL3239",number:"14"},
  	{type:"UL1185",number:"15"},
  	{type:"UL2547",number:"16"},
  	{type:"UL20267",number:"17"},
  	{type:"UL2651",number:"18"},
  	{type:"UL2678",number:"19"},
  	{type:"UL1180",number:"20"},
  	{type:"UL1569",number:"21"},
  	{type:"UL3135",number:"22"},
  	{type:"PVC",number:"70"},
  	{type:"其他",number:"99"},
	];
	const wire_width =[
		"7/0.127",
		"7/0.16",
		"11/0.16",
		"17/0.16",
		"21/0.18",
		"34/0.18",
		"7/0.203",
		"7/0.254",
		"26/0.254",
		"41/0.254",
		"65/0.254",
		"104/0.254",
		"1/0.32",
		"7/0.32",
		"1/0.40",
		"1/0.51",
		"1/0.64",
		"1/0.81",
		"1/1.02",
		"1/1.29",
		"7/0.404",
		"133/0.254",
		"133/0.455",
		"1/1.63",
		"66/0.32",
		"19/0.16",
		"63/0.511",
		"19/0.287",
		"7/1.0",
		"19/0.32",
		"1/1.85",
		"7/0.45",
		"30/0.18",
		"45/0.32","37/0.254","43/0.32"
		];
	


	const material_a = _.map(type,(i,value) =>{

		return (<option value={type[value].number} key={value} > {type[value].type}</option>);
	});

	const material_b = _.map(Array.from({length:49} ,(v,k)=>(k<10)?'0'+k:k+1) , (i,v)=>{ 
			return (<option value={i} key={v}>{i}</option>);
	});

	const material_c = _.map(color ,(i,v)=>{

		return (<option value={color[v].index} key={v}>{color[v].color}({color[v].color_zh}) </option>);
	})
	const material_d =_.map(wire_width,(v,k)=>{
		return (<option value={(k>9)?k:"0"+k} key={k}>{wire_width[k]} </option>);
	});


    return (
      <div>

      	<h2 className={style.h2}> (1)--電線與電纜-- </h2>

      	<div >
      		<h5><i className={cx({'fa fa-caret-square-o-down':!this.state.show_1_1,'fa fa-caret-square-o-up':this.state.show_1_1})} aria-hidden="true" onClick={()=>{this.setState({show_1_1:!this.state.show_1_1})}}> </i> 1.1整卷  </h5>
      		<table style={{"border":1,"textAlign":"center","display":this.state.show_1_1?"":"none"}}>
      			<thead>
		      		<tr>
				      			<th>(1)</th>
				      			<th>種類</th>
				      			<th>號數</th>
				      			<th>顏色</th>
				      			<th>流水號</th>
				      			<th>檢查號</th>
		      		</tr>
		      	</thead>
	      		<tbody>
	      			<tr>
			      			 <td>(1)</td>
			      			 <td>
			      			 	<select name="index_1_1" id="" onChange={this.onChange}>
			      			 	{material_a} 
			      			 	</select>
			      			 </td>
			      			<td>
			      				<select name="index_1_2" id="" onChange={this.onChange} >
			      				 {material_b}
			      			 	</select>
			      			</td>
			      			<td>
			      				<select name="index_1_3" id="" onChange={this.onChange}>
			      				 {material_c}
			      				</select>
			      			</td>
			      			<td> 
			      				<select name="index_1_4" id="" onChange={this.onChange}>
			      				 {material_d}
			      				</select>
			      			</td>
			      			<td>_ </td>
	      			
	      			</tr>
	      		</tbody>
      		</table>
      	<div style={{"textAlign":"center","display":this.state.show_1_1?"":"none"}}> 

      		{this.state.show_1_1?
      	 				`輸出結果 => 1${this.state.index_1_1}${this.state.index_1_2}${this.state.index_1_3}${this.state.index_1_4}_`:null
      	 			}
      	 			&nbsp;&nbsp;&nbsp;<i className="fa fa-upload " aria-hidden="true"></i>
      	</div>
      	<h5><i className={cx({'fa fa-caret-square-o-down':!this.state.show_1_2,'fa fa-caret-square-o-up':this.state.show_1_2})} aria-hidden="true" onClick={()=>{this.setState({show_1_2:!this.state.show_1_2})}}> </i> 1.2切斷 </h5>
      	<table style={{"border":1,"textAlign":"center","display":this.state.show_1_2?"":"none"}}>
      			<thead>
		      		<tr>
				      			<th>(2)</th>
				      			<th>種類</th>
				      			<th>號數</th>
				      		
				      			<th>流水號</th>
				      			<th>檢查號</th>
		      		</tr>
		      	</thead>
	      		<tbody>
	      			<tr>
			      			 <td>(2)</td>
			      			 <td>
			      			 	<select name="index_1_1_1" id="" onChange={this.onChange}>
			      			 	{material_a} 
			      			 	</select>
			      			 </td>
			      			<td>
			      				<select name="index_1_1_2" id="" onChange={this.onChange} >
			      				 {material_b}
			      			 	</select>
			      			</td>
			      			<td> 
				      			<input type="number" maxLength="4" name="index_1_1_3" value={this.state.index_1_1_3} onChange={this.onChange} />
			      			</td>
			      			<td>_ </td>
	      			
	      			</tr>
	      		</tbody>
      		</table>
		<div style={{"textAlign":"center","display":this.state.show_1_2?"":"none"}}> 

      		{this.state.show_1_2?
      	 				`輸出結果 => 1${this.state.index_1_1_1}${this.state.index_1_1_2}${this.state.index_1_1_3}_`:null
      	 			}
      	 	&nbsp;&nbsp;&nbsp;<i className="fa fa-upload " aria-hidden="true"></i>
      	</div>

     

      	</div>

    


      </div>
    );
  }
}


