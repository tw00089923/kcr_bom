import React from 'react';
import style from './Material.css';
import cx from 'classname';
import _ from 'lodash';



export default class Material_8 extends React.Component {

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
       this.onChange = this.onChange.bind(this);
       this.upload = this.upload.bind(this);
  }
  show(){
  	this.setState({show_first:!this.state.show_first});
  }
  upload(e){
  	  let files = e.target.files;
  	  console.log(XLSX.read(files,{type: 'base64'}));


  	  
  	  console.log(f);

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

  	const material_a_1 = [
	  	'矽鋼鐵芯',
	  	'鎳鐵合金鐵芯',
	  	'亞鐵鐵粉芯',
	  	'鐵帶',
	  	'鐵底',
	  	'鐵蓋',
	  	'鐵腳',
	  	'鐵芯',
	  	'銅圈',
	  	'壓板',
	  	'矽鋼'
  				];
  	const material_a_2 = [
  		'SCREW',
  		'NUT',
  		'WASHER',
  		'RIVET(鉚釘)',
  		'止輪(扣環)',
  		'STUD',
  		'FORMER',
  		'CHAIN',
  		'其他',
  		'牙條 六角板手'
  		];
  	const material_a_3 = [
  		'組立面板', 
  		'電源箱把手鉸鏈 ',
  		'固定板(棒)支架端子管E型扣環 ',
  		'接線板',
  		'散熱器 ',
  		'純鐵製品 ',
  		'繞線銅板銅板 ',
  		'SPRING PIN插銷',
  		'SPRING STUD BOLT 心軸',
  		'接點接片接頭開關襯套墊片金屬軟管SHIELDCOVER(隔離罩/片)',
  		'組立框',
  		'FOIL TAPE ',
  		'鍍鋅板鋁板普通板',
  		'旋鈕(KNOB)',
  		'矽鋼板(素材)',
  		'矽鋼板(裁切條料)',
  		'IRON BOX 鐵盒耗材',
  		'其他'
  		];
  	const material_b_1 =[
  		'2.5mm',
  		'2.6mm',
  		'3.0mm',
  		'3.5mm',
  		'4.0mm',
  		'5.0mm',
  		'6.0mm',
  		'6#',
  		'8#',
  		'10#',
  		'1/4"',
  		'4.5mm',
  		'4#',
  		'英吋',
  		'4.2mm',
  		'7.0mm',
  		'14.0mm',
  		'4.0mm',
  		'3.2mm',
  		'2.0mm',
  		'6.4mm',
  		'8.0mm',
  		'2#',
  		'9.5mm',
  		'3.1mm',
  		'9.0mm',
  		'2.3mm',
  		'1.7mm',
  		'10mm',
  		'15mm',
  		'16mm',
  		'20mm',
  		'12mm',
  		'25.4mm',
  		'其他'
  		];
  	const material_c =[
  			'冷鋼',
  			'銅 錳銅...',
  			'鋁',
  			'純鐵製品',
  			'銀',
  			'鋼鐵',
  			'芯鐵板',
  			'塑膠鋼',
  			'角鋼 易削鋼 CRS',
  			'不鏽鋼 ',
  			'其他',
  			'Ni-Fe 鎳鐵合金'
  				];
  	const material_d =[


			'陽極處理，本色',
			'電鍍五彩 (Y)',
			'染  黑 (B)',
			'鍍 黑 鋅 (B-Zn)',
			'鍍白鋅',
			'(BLUE-Zn) (W)',
			  '鍍 鎳 (Ni-3)',
			  '鍍 鍚 (Sn)',
			  '烤 漆',
			  '鍍 銀',
			  '鍍 金 (AU)',
			  '鍍 鉻 (其 他)'
  						];


    return (
      <div> material_5
      	<div>
      		<input type="file" onChange={this.upload}/>
      		
      	</div>

      </div>
    );
  }
}


