import React from 'react';
import style from './Material.css';
import cx from 'classname';
import _ from 'lodash';

export default class Material_3 extends React.Component {


  constructor(props) {
    super(props);
    this.state ={
    	show_first:false,
    	show_3_2_1:true,
    	show_3_2_2:false,
    	show_3_1:false,
    	index_3_1_1:"00",
    	index_3_1_2:"0",
    	index_3_1_3:"00",
    	index_3_1_4:"000"
    };
    this.onChange=this.onChange.bind(this);
    this.onClick=this.onClick.bind(this);
  }
  show(){
  	this.setState({show_first:!this.state.show_first});
  }
  onClick(){
  	this.setState({show_3_2_1:!this.state.show_3_2_1});
  }
  onChange(e){
  	if(e.target.name == "glup"){
  		this.setState({show_3_2_1:!this.state.show_3_2_1});
  	}


  	if(e.target.name == "index_2_2"){
  		this.setState({index_2_1_2:e.target.value});
  	}
  	if(e.target.name =="index_3_1"){
  		this.setState({index_3_1_1:e.target.value});
  	}
  	if(e.target.name =="index_2_3"){
  		this.setState({index_2_1_3:e.target.value});
  	}
  	if(e.target.name =="index_2_4"){
  		this.setState({index_2_1_4:e.target.value});
  	}

  }

  render() {
  	const tape_type_glup =['POLYESTER FILM TAPE (M-T)','PAPER TAPE (560F, 560S)','POLYIMIDE FILM TAPE','EPOXY TAPE (3M#10)','ACETATE CLOTH TAPE (3M#11,ACAT)','GLASS CLOTH TAPE (3M#27)(TUCK#51)','PROFORMED BUTYL TAPE','DOUBLE SURFACE TAPE','ADHESIVE & SEMI ADHESIVE TAPE','PROTECT TAPE','SINGLE COATED WITH FOAM TAPE','COMPOUND ADHESIVE TAPE','ALUMINUM FOIL TAPE (3M#)/COPPER TAPE','REINFORCED PET INSULATION TAPE','TAPE VINY ELECTRICAL','PTFE FILM TAPE'
];
	const tape_type_glup_zh =[
						'聚脂酸膜膠帶',
						,'紙膠帶',
						,'聚亞胺基膜膠帶',
						,'環氧樹脂膜膠帶',
						,'醋酸鹽布膠帶',
						,'玻璃纖維膠帶',
						,'合成橡膠膠帶',
						,'雙面膠帶',
						,'',
						,'',
						,'保護膠帶',
						,'單面膠帶',
						,'混合膠帶',
						,'鋁膠帶/銅膠帶',
						,'PET加強膠帶',
						,'電工膠帶',
						,'鐵氟龍膠帶'
					];

	const tape_type_noglup =['NOMEX PAPER','KRAFT PAPER, PAPER BB ','MYLAR','WHITE WAX PAPER','FIBER','UL TUBE','UN-UL TUBE','GLASS TUBE','WAX TUBE、INSUL. TUBE','HEAT SHRINKABLE TUBE','KRAFT TUBE','TEFLON TUBE','SILICON BARRIER','COTTON TAPE','NON-WOVEN FABRIC','SILICON RUBBER','SILICON TUBE','SILICON RUBBER COATED FIBERGLASS SLEEVING','SILICON VARNISHED GLASS SLEEVING','BEN-HAR ACRYL SLEEVING','END CHEEK','CLOTH','SUPER INSULATION','AL FOIL 鋁箔','PET 擴充編織'];


	const tape_type_type =['整卷','整卷沖孔','切斷','切斷沖製'];
	const tape_type_mil=[
		'其他',
		'1mil (0.025mm)',
		'2mil (0.05mm)',
		'3mil (0.08mm)',
		'4mil (0.10mm)',
		'5mil (0.13mm)',
		'6mil (0.15mm)',
		'7mil (0.18mm)',
		'8mil (0.20mm)',
		'9mil (0.23mm)',
		'10mil (0.25mm)',
		'11mil (0.28mm)',
		'12mil (0.30mm)',
		'以此類推'	];

	const tape_mm =[
		'0.4mm',
		,'0.5mm',
		,'0.8mm',
		,'0.85mm',
		,'1.0mm',
		,'1.5mm',
		,'2.0mm',
		,'2.5mm',
		,'3.0mm',
		,'3.5mm',
		,'3.7mm',
		,'4.0mm',
		,'5.0mm',
		,'5.2mm',
		,'6.0mm',
		,'6.5mm',
		,'8.2mm',
		,'9.5mm',
		,'10.0mm',
		,'12.5mm',
		,'18.0mm',
		,'19.0mm',
		,'7.0mm',
		,'1.35mm',
		,'6.35mm',
		,'6.20mm',
		,'X/8”',
		,'X/16”',
		,'8.0mm',
		,'15.0mm',
		,'12.0mm',
		,'0.1-0.99mm',
		,'1.01-1.99mm',
		,'12.7mm',
		,'2.69mm',
		,'14mm',
		,'25.4mm(1”)',
		,'11mm',
		,'13.5mm',
		,'38.1mm',
		,'35mm',
		,'16mm',
		,'20mm',
		,'50.8mm',
		,'63.5mm',
		,'30mm',
		,'17mm',
		,'70mm',
		,'1.6mm',
		,'其他'
			];
		const material_a =_.map(tape_type_glup,(v,k)=>{
			return (<option value={(k<10)?"0"+k:k} key={k}>{tape_type_glup[k]}</option>);
		});
			const material_b =_.map(tape_type_noglup,(v,k)=>{
			return (<option value={k+50} key={k}>{tape_type_noglup[k]}</option>);
		});
			const material_c =_.map(tape_type_type,(v,k)=>{
			return (<option value={k} key={k}>{tape_type_type[k]}</option>);
		});
			const material_d =_.map(tape_type_mil,(v,k)=>{
			return (<option value={k} key={k}>{tape_type_mil[k]}</option>);
		});

    return (
      <div> 
      		<h2 className={style.h2}> (3)--絕緣材料--</h2> 
		<div>
      		<h5><i className={cx({'fa fa-caret-square-o-down':!this.state.show_first,'fa fa-caret-square-o-up':this.state.show_first})} aria-hidden="true" onClick={()=>{this.setState({show_first:!this.state.show_first})}}> </i> 1.標準形式  </h5>
      		<table style={{"border":1,"textAlign":"center","display":this.state.show_first?"":"none"}}>
      			<thead>
		      		<tr style={{"fontSize":"15px"}}>
				      			<th>(1)</th>
				      			<th>(2,3)種類 <input type="checkbox" name="glup" onChange={this.onChange}/>{this.state.show_3_2_1?"含膠":"不含膠"}</th>
				      			<th>(4)型態</th>
				      			<th>(5)(6)厚度與直徑 </th>
				      			<th>(7)(8)(9)流水號</th>
				      			<th>(0)檢查號</th>
		      		</tr>
		      	</thead>
	      		<tbody>
	      			<tr>
			      			 <td>3</td>
			      			 <td>

			      			 	<select name="index_3_1" onChange={this.onChange} style={{"fontSize":"10px"}}>
			      			 		{this.state.show_3_2_1?material_a:material_b}
			      			 	</select>
			      			 </td>
			      			<td>	
			      				<select name="index_3_2" onChange={this.onChange} >
			      					{material_c}
			      				</select>
				      			
			      			</td>
			      			<td>
			      				<select name="index_3_3" onChange={this.onChange} >
			      					{material_d}
			      				</select>
			      			</td>
			      			<td> 
			      				<select name="index_3_4" onChange={this.onChange}>
			      				
			      				</select>
			      			</td>
			      			<td>_ </td>
	      			
	      			</tr>
	      		</tbody>
      		</table>
      	</div>

      	<form>
      		<label>(2)(3)種類   <i onClick={this.onClick} className={cx({'fa fa-toggle-on':this.state.show_3_2_1,'fa fa-toggle-off':!this.state.show_3_2_1})} aria-hidden="true"></i> {this.state.show_3_2_1?"含膠":"不含膠"} :</label>
      		
      		<select name="index_3_1" onChange={this.onChange} style={{"fontSize":"15px","marginLeft":"40px","float":"right","paddingTop":"-50px"}}>
			    {this.state.show_3_2_1?material_a:material_b}
			</select>

      	</form>
      	<div style={{"textAlign":"center","display":this.state.show_first?"":"none"}}> 

      		{this.state.show_first?
      	 				`輸出結果 => 2${this.state.index_3_1_1}${this.state.index_3_1_2}${this.state.index_3_1_3}${this.state.index_3_1_4}_`:null
      	 			}
      	</div>
      </div>
    );
  }
}

