import React from 'react';
import style from './Material.css';
import cx from 'classname';
import _ from 'lodash';



export default class Material_6 extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      index_a:"material_b_1",
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
     if(e.target.name == "index_a"){
        this.setState({index_a:`material_b_${e.target.value}`});
    }


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
  	const material_a_1 = ['包裝紙類','PS發泡成型類','木板類','PE袋、PE布','包裝膠帶','貼標(含膠)','數字貼標','銘板','說明書、警告單(不含膠)','真空成型類','打包鐵材類','PP打包帶','PU發泡','PE發泡','牛皮紙袋','橡皮圈、訂書針…','PVC包裝盒類','PET包裝盒類','其它','碳帶 CARBON BRING'];

  	const material_b = ({
        material_b_1:['A型CARTON(編號已滿)','B型 UNIT PACK','C型紙箱','UNIT LOAD TUBE','E型 U/D COVER','F型紙箱','G型紙箱','雜項紙箱','腳紙CORNER BOARD','襯板 PLATE BOARD','格板 BLOCK BOARD','方紙管','A型CARTON'],
        material_b_2:[ '平板式','單片模成型','兩片模成型','角狀類','條狀類'],
        material_b_3:['A型棧板','B型棧板','C型棧板','雜項棧板','鎖緊板','木條箱'],
        material_b_4:['普通式PE袋','加底式PE袋','靜電式PE袋','透明PE布','抗靜電PE布/氣泡帶','耐高溫PE袋','PE氣泡袋','PE發泡袋','PE SHEET','耐高溫PP袋','抗靜電PE氣泡袋'],
        material_b_5:['PP棕色膠帶','PP透明膠帶','玻璃紙膠帶','GT棕色膠帶','自黏性'],
        material_b_6:['白色底貼標','金色底貼標','紅色底貼標','銀色底貼標','黃色底貼標','透明貼標','黑色底貼標','綠色底貼標','彩色底貼標','其他底貼標','白色底貼標(已滿)','白色底貼標'],
        material_b_7:['系列號碼貼標','配線貼標'],
        material_b_8:['黑底印白字','白底印黑字','黑底白字+白底黑字','白底鋼印','K金色底','烤漆','其它'],
        material_b_9:['說明書','警告單','使用手冊','安裝說明書','保證卡','維修卡','標示卡','說明單 修正單'],
        material_b_10:['角狀類'],
        material_b_11:['鐵皮','鐵扣','PALLET棧板','FRAME 鐵框'],
        material_b_12:['PP打包帶'],
        material_b_13:['角狀類','長方形']
      })[this.state.index_a] || ['尚無資料'];

    const material_a_b = _.map(material_a_1,(v,k)=>{
          return (<option value={k+1} key={k}>{v}</option>);
      });
     const material_b_1 = _.map(material_b,(v,k)=>{
          return (<option value={v} key={k}>{v}</option>);
      });







    return (
      <div> material_6
      	<div>
        <select name="index_a" id="" onChange={this.onChange} >
          {material_a_b}  
        </select> <br/>
        <select name="" id="">
          {material_b_1}
        </select>

      	</div>

      </div>
    );
  }
}


