import React from 'react';
import style from './Material.css';
import cx from 'classname';
import _ from 'lodash';


export default class Material_5 extends React.Component {

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

  	const material_a_1 = ['塑膠粒、色母','普通式BB(COMMON)','分隔式BB(APART)','普通式BB-PCB','分隔式BB-PCB','普通式BB-KSP','分隔式BB-KSP','盒子式BOBBIN','盒子式COVER','抽式BOBBIN','抽式COVER','尼龍套、絕緣墊片','蓋子(網蓋、PT保護蓋)','支架、CHASSIS、CASE、底座、DOOR) 、間隔柱、銘板、腳墊','搖桿、滾子、插梢、輪','電源開關箱、輸入座','夾線槽、束線帶','護線環、固定扣(座)、櫬套、線材標示牌','端子板、補償片','把手、按鈕、開關','內外層式BB-內層P','內外層式BB-外層S','裝飾板、條、框、帶','KEYBOARD OVERLAY','LENS 透鏡','防水塞、滑槽,RING','其他(三通、由任)','雜項BOBBIN','SHEET PVC','MIRROR 鏡子','FORMER 玻璃纖維線軸','DAMPER 緩衝器','毛氈','球網、織布扣合','乒乓球','圍布','水槽'
];
  	const material_a_2 = ['固定用','稀釋用','硬化促進用','清潔用','塗裝用','散熱用','助焊用','COATING用','乾燥劑、防潮用','捺印用','防水/散熱','填充','營養液','其他'];
  	const material_b_1 = [
          'ZYTEL NYLON RESIN 101L(N66)',
          'ZYTEL 70G33L, 6410G5, 6210G6',
          'FR-PET',
          'VALOX THERMOPLASTIC',
          'POPLYESTER (DR-48)',
          'LEXAN POLYCARBONATE RESIN',
          '(P.C)',
          'NORYL RESIN (N190J-7002)',
          '            (CFN3J-8007)',
          'POLYCARBONATE MAKROLON',
          'NO.6870',
          'PHENLOIC MOLDING POWDER',
          '(電木)',
          'P.V.C',
          'POLYPHENYLENE SULFIDE',
          '(HW搖桿)',
          'ABS',
          'ACRYLICX, STYRENE-METHYL',
          'METHACRYLATE',
          'POLYDROPYLENE(聚丙稀)',
          'RUBBER, EVA',
          'DURACON(塑膠鋼)、POM',
          '其他,P.B.T',
          'FLAME RETARDANT',
          'POLYPROPYLENE SHEET',
          'FRPP 301-18(FORMEX-18)',
          'NORYL PPHOX SE-100 (F), AS',
          'SPONGE(泡棉)',
          'PP2654',
          'MG-0033N',
          'CM3001G-30',
          'GFRP/CFRP',
          'TEFLON',
          'HPS',
          'PC/ABS',
          'VALOX M7002'
  		        ];
  	const material_b_2 =[
              '凡立水、腊、樹脂',
              '固定劑、熱溶膠、膠粉',
              '稀釋劑',
              '硬化促進劑',
              '甲苯、汽油、香蕉水',
              '剝離劑',
              '凡士林、離形劑',
              '隔離膠、靜電劑',
              '潤滑油、防銹油',
              '油漆、噴漆、烤漆',
              '矽油膏',
              '助焊劑',
              '氣體 ',
              '防焊劑、',
              'MTL CONATHANE',
              'REDUCER (催化劑)',
              'SILICA GEL (乾燥劑)',
              '墨水',
              '碳',
              '牛油',
              '其他',
              '營養液/肥料',
              '其他'
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


