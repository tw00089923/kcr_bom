import React from 'react';
import style from './Material.css';
import cx from 'classname';
import _ from 'lodash';

export default class Material_2 extends React.Component {


  constructor(props) {
    super(props);
    this.state ={
    	show_first:false,
    	show_2_1:false,
    	index_2_1_1:"00",
    	index_2_1_2:"0000",
    	index_2_1_3:"0",
    	index_2_1_4:"0"
    };
    this.onChange=this.onChange.bind(this);
  }
  show(){
  	this.setState({show_first:!this.state.show_first});
  }
  onChange(e){
  	if(e.target.name == "index_2_2"){
  		this.setState({index_2_1_2:e.target.value});
  	}
  	if(e.target.name =="index_2_1"){
  		this.setState({index_2_1_1:e.target.value});
  	}
  	if(e.target.name =="index_2_3"){
  		this.setState({index_2_1_3:e.target.value});
  	}
  	if(e.target.name =="index_2_4"){
  		this.setState({index_2_1_4:e.target.value});
  	}

  }

  render() {
  		const wire_type =['零號線','一種線','兩種線','三種線','HEAVY','COTTON','無','無','其他','裸線']; 
		const wire_color =['BLK (黑)','BWN (棕)','RED (紅)','ORG (橙「金」)','YEL (黃)','GRN (率)','BLU (藍)','VIO (紫)','GRY/SIL(灰「銀)','WHT (白)',];




  	const material_2_1 = ['A.P.Tz WIRE/AIEIW-200','PEW(S.S) WIRE','UEW(D.D)WIRE','DD+NY WIRE','NEW(NYW) WIRE','SQ. WIRE','COPPER BRAIDED','TINNED WIRE','Ni-Cu WIRE','PVF','Ni-Cr WIRE','鍍錫銅包鋼線','NOMEX COPPER WIRE/LITZ','TRIPLE INSULATED WIRE','SUPERCONDUCTING WIRE','BRAIDED COPPER CABLE','O.F.C WIRE 無氧銅線','WIRE UEW','WIRE DD-F','SSF-NY','WIRE AL'];
  	const material_a= _.map(material_2_1, (v,k)=>{
  		return (<option value={(k<9)?"0"+k:k} key={k}>{material_2_1[k]} </option>);
  	});
  	const material_b =_.map(wire_type,(v,k)=>{
  		return (<option value={k} key={k}> {wire_type[k]}</option>);
  	});
  	const material_c =_.map(wire_color,(v,k)=>{
  		return (<option value={k} key={k}> {wire_color[k]}</option>);
  	});

    return (
      <div>
      	<h2 onClick={this.show.bind(this)} className={style.h2}> (2)--漆包線與導線--</h2> 
      	<div>
      		<h5><i className={cx({'fa fa-caret-square-o-down':!this.state.show_first,'fa fa-caret-square-o-up':this.state.show_first})} aria-hidden="true" onClick={()=>{this.setState({show_first:!this.state.show_first})}}> </i> 1.標準形式  </h5>
      		<table style={{"border":1,"textAlign":"center","display":this.state.show_first?"":"none"}}>
      			<thead>
		      		<tr style={{"fontSize":"15px"}}>
				      			<th>(1)</th>
				      			<th>(2,3)種類</th>
				      			<th className={style.tooltip}><span className={style.tooltiptext}><ul style={{"textAlign":"left"}}><li>2.5mm(寬) x 3.7 mm(厚)</li><li >結果=> 2537</li></ul> </span>(4,5,6,7)線徑</th>
				      			<th>(8)緣厚度與種類 </th>
				      			<th>(9)顏色</th>
				      			<th>(0)檢查號</th>
		      		</tr>
		      	</thead>
	      		<tbody>
	      			<tr>
			      			 <td>2</td>
			      			 <td>
			      			 	<select name="index_2_1" onChange={this.onChange} >
			      			 		{material_a}
			      			 	</select>
			      			 </td>
			      			<td>
				      			<input style={{"width":"80px"}} name="index_2_2" type="number" value={this.state.index_2_1_2} onChange={this.onChange} maxLength="4" minLength="4" />
			      			</td>
			      			<td>
			      				<select name="index_2_3" onChange={this.onChange} >
			      					{material_b}
			      				</select>
			      			</td>
			      			<td> 
			      				<select name="index_2_4" onChange={this.onChange}>
			      					{material_c}
			      				</select>
			      			</td>
			      			<td>_ </td>
	      			
	      			</tr>
	      		</tbody>
      		</table>
      	</div>
      	<div style={{"textAlign":"center","display":this.state.show_first?"":"none"}}> 

      		{this.state.show_first?
      	 				`輸出結果 => 2${this.state.index_2_1_1}${this.state.index_2_1_2}${this.state.index_2_1_3}${this.state.index_2_1_4}_`:null
      	 			}
                &nbsp;&nbsp;&nbsp;<i className="fa fa-upload " aria-hidden="true"></i>
      	</div>
      </div>
    );
  }
}
