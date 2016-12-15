// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router';
// import _ from 'lodash';
// import style from './Bom.css';
// import data_list from '../data/material_list';
// import Material_1 from './material/Material_1';
// import Material_2 from './material/Material_2';
// import Material_3 from './material/Material_3';
// import Material_4 from './material/Material_4';
// import Material_5 from './material/Material_5';
// import Material_6 from './material/Material_6';
// import Material_90 from './material/Material_90';


// export default class Bom extends React.Component {
//   static propTypes = {

//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//     number:0,
//   	list_title : false,
//   	material_1 : false,
//   	material_2 : false,
//   	material_3 : false,
//   	material_4 : false,
//   	material_5 : false,
//   	material_6 : false,
//   	material_7 : false,
//   	material_8 : false,
//   	material_9 : false,
//   	material_10: false
//   	}
// 	this.onChange = this.onChange.bind(this);
//     this.show = this.show.bind(this);
//   }
//   onChange_first(e){
//     e.preventDefault();
//     console.log(e.target);
//   	this.setState({list_first:{ chiness:e.targe.tvalue }});
//   }
//    onChange(e){
//     e.preventDefault();
//     console.log(e.target.value);
  	
//   }

//   show(e){



//    if(e.target.id == "material_1"){
  
//   	 this.setState({material_1 :!this.state.material_1 ,material_2:false,material_3:false});
//     }
    
//    if(e.target.id == "material_2"){

//      this.setState({material_2 :!this.state.material_2 ,material_1:false ,material_3:false});
//     }
//      if(e.target.id == "material_3"){

//      this.setState({material_3 :!this.state.material_3 ,material_1:false,material_2:false  });
//     }
//      if(e.target.id == "material_4"){

//      this.setState({material_4 :!this.state.material_4 ,material_1:false,material_2:false  });
//     }
//     if(e.target.id == "material_5"){

//      this.setState({material_5 :!this.state.material_5 ,material_1:false,material_2:false  });
//     }
//      if(e.target.id == "material_6"){

//      this.setState({material_6 :!this.state.material_6 ,material_1:false,material_2:false  });
//     }
//      if(e.target.id == "material_10"){

//      this.setState({material_10 :!this.state.material_10 ,material_1:false,material_2:false  });
//     }




  
//   }

//   render() {
//  	const header = _.map(data_list, (i ,value)=>{
//  		return <li id={`material_${value+1}`} className={style.btn} key={value} onClick={this.show}> {data_list[value].index}.{data_list[value].name} </li>
//  	});

//     return (
//     <div>
//       <div >
//      	 <Link to="/"> <i className="fa fa-arrow-left fa-3x" />  </Link>   
//          <i className="fa fa-arrow-circle-down fa-3x" aria-hidden="true" style={{"float":"right" , "marginRight":"20px"}}> <span style={{"color":"white"}}>{this.state.number?"0":"1"}</span></i>
//       </div >

//       <div >
//         <div className={style.rightcontainter}>
         
//      	   {header}

//       	</div>
//       	<div className={style.leftcontainer}>

 

//       		<div className={style.table_1}>{this.state.material_1?<Material_1/>:null}</div>
//       		<div className={style.table_1}>{this.state.material_2?<Material_2/>:null}</div>
//       		<div className={style.table_1}>{this.state.material_3?<Material_3/>:null}</div>

//           <div className={style.table_1}>{this.state.material_4?<Material_4/>:null}</div>
//       		<div className={style.table_1}>{this.state.material_5?<Material_5/>:null}</div>
//       		<div className={style.table_1}>{this.state.material_6?<Material_6/>:null}</div>
//       		<div className={style.table_1}>{this.state.material_7?material_A:null}</div>
//       		<div className={style.table_1}>{this.state.material_8?material_A:null}</div>

//           <div className={style.table_1}>{this.state.material_10?<Material_90/>:null}</div>

//       	</div>

     

//       </div>
//     </div>
//     );
//   }
// }



import React from 'react';
import style from './Bom.css';
import cx from 'classname';
import _ from 'lodash';
import color_2 from '../data/color';
import { Link } from 'react-router';
import Select from 'react-select';
import react_select_css from 'react-select/dist/react-select.css';
import XLSX from 'xlsx';


export default class Bom extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      index_type:"1",
      index_1: 1,
      index_2: 0,
      index_3: "0",
      index_4: "0",
      index_5: "0",
      index_6: "0",
      index_7: "0",
      index_8: "0",
      index_9: "0",
      index_0: "0"
    };
       this.onChange = this.onChange.bind(this);
       this.onClick = this.onClick.bind(this);
       this.upload = this.upload.bind(this);
       this.save = this.save.bind(this);
       this.local = this.local.bind(this);
       this.add = this.add.bind(this);
  }
upload(e){
      e.preventDefault();
      e.stopPropagation();
      const files = e.target.files;
      console.log(files.length);
     var i,f;
    for (i = 0, f = files[i]; i != files.length; ++i) {
    var reader = new FileReader();
    var name = f.name;
    reader.onload = function(e) {
      var data = e.target.result;
     
      const workbook = XLSX.read(data, {type: 'binary'});
    
        console.log(Object.assign(...workbook,workbook.Sheets.Sheet1.B3['v']= 'hi'));
        console.log(workbook);
        XLSX.writeFile(workbook, './app/excel/export/1.xlsx');

    
      /* DO SOMETHING WITH workbook HERE */
    };
    reader.readAsBinaryString(f);
    
  }



     // const file_save = XLSX.writeFile(workbook, 'out.xlsx');

    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    // document.saveAs(blob, "hello world.txt");
  }
local(){
 var blob = new Blob(['1','2'], {type: 'text/csv'});
 const a = document.createElement("a");
 a.href = "";
 a.setAttribute('download', 'das.csv');
 a.setAttribute('target', '_blank');
 a.click();
console.log(window.URL.createObjectURL(blob));
}
add(){
 
 this.props.add_bom(this.state.index_1+this.state.index_2+this.state.index_3+this.state.index_4+this.state.index_5+this.state.index_6+this.state.index_7+this.state.index_8+this.state.index_9);
 console.log("ok");

}


save(){
let header= `${this.state.index_1}${this.state.index_2}${this.state.index_3}`;
function datenum(v, date1904) {
  if(date1904) v+=1462;
  var epoch = Date.parse(v);
  return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
  var ws = {};
  var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
  for(var R = 0; R != data.length; ++R) {
    for(var C = 0; C != data[R].length; ++C) {
      if(range.s.r > R) range.s.r = R;
      if(range.s.c > C) range.s.c = C;
      if(range.e.r < R) range.e.r = R;
      if(range.e.c < C) range.e.c = C;
      var cell = {v: data[R][C] };
      if(cell.v == null) continue;
      var cell_ref = XLSX.utils.encode_cell({c:C,r:R});
      
      if(typeof cell.v === 'number') cell.t = 'n';
      else if(typeof cell.v === 'boolean') cell.t = 'b';
      else if(cell.v instanceof Date) {
        cell.t = 'n'; cell.z = XLSX.SSF._table[14];
        cell.v = datenum(cell.v);
      }
      else cell.t = 's';
      
      ws[cell_ref] = cell;
    }
  }
  if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}
function Workbook() {
  if(!(this instanceof Workbook)) return new Workbook();
  this.SheetNames = [];
  this.Sheets = {};
}
var data = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var ws_name = 'SheetJS';
var wb = new Workbook(), ws = sheet_from_array_of_arrays(data);
wb.SheetNames.push(ws_name);
wb.Sheets[ws_name] = ws;
 XLSX.writeFile(wb, `./app/excel/export/${header}.xlsx`);

window.open(`./app/excel/export/${header}.xlsx`, 'Download');

console.log(XLSX.writeFile(wb, 'test.xlsx'));
}

  onClick(e){

      if(e.target.value < 9 ){
          this.setState({index_1:e.target.value,index_2:0,index_type:1}); 
        }
      if(e.target.value == 9 ){
          this.setState({index_1:e.target.value ,index_2:2});
        }
      if(e.target.value == 10){
          this.setState({index_1:9,index_2:0,index_type:1});
        }
    

  }
 
  onChange(e){
 
    if(e.target.name == "index_type"){
      
            this.setState({index_type:e.target.value});
       
    }
    if(e.target.name == "index_1_color"){
      if (e.target.value){
      this.setState({ index_6:e.target.value.substring(0,1),index_7:e.target.value.substring(1,2)});
      }
    }
    if(e.target.name == "index_2"){
      if (e.target.value){
      this.setState({ index_3:e.target.value.substring(0,1),index_4:e.target.value.substring(1,2)});
      }
    }
   

  }

  render() {
    const material_header= _.map(["電線與電纜","漆包線與導線","絕緣材料","五金鐵材","塑膠化學","包裝與標示材料","電子元件","電子配件","半成品","成品"],(v,k)=>{
        return (<option value={k+1} key={k} className={style.option_1}> {v} </option>);
    });


    const material_header_li = _.map(["電線與電纜","漆包線與導線","絕緣材料","五金鐵材","塑膠化學","包裝與標示材料","電子元件","電子配件","半成品","成品"],(v,k)=>{
        return (<li  value={k+1} key={k} onClick={this.onClick}> {v} </li>);
    });
    const index_type =({ index_1 :['標準模式整卷','標準模式切斷'], 
                      index_2:['標準模式'],
                      index_3:['標準模式'],
                      index_4:['PT材料','PT配件','組立材料','鐵芯(素材)','鐵芯(裁切條料)'],
                      index_5:['標準模式'],
                      index_6:['標準模式'],
                      index_7:['標準模式','種類代號000,001'],
                      index_8:['標準模式'],
                      index_92:['標準模式(工程別)','標準模式(矽鋼片_條料)','標準模式(鐵芯,沖製品及未燒炖N品)','標準模式(鐵芯,沖製品及燒炖A品)','標準模式(CHRONOIII & PLR 機種)'],
                      index_90:['標準模式'],
                        })[this.state.index_1 > 8 ? `index_${this.state.index_1}${this.state.index_2}`:`index_${this.state.index_1}`] || '預設值';
    const index_type_index = _.map(index_type,(v,k)=>{
      return (<option value={k+1} key={k} > {v} </option>);

    });
    const index_b =({ index_10_1:['種類','號數','顏色(2碼)','流水編號(2碼)','檢查號'],
                      index_10_2:['種類','號數','流水編號(4碼)','檢查號'],
                      index_20_1:['種類','線徑','緣厚度與種類','顏色(1碼)','檢查號'],
                      index_30_1:['種類','型態','厚度或直徑','流水編號(3碼)','檢查號'],
                      index_40_1:['種類','鐵芯長','流水編號(3碼)','檢查號'],
                      index_40_2:['種類','規格','處理','流水編號(3碼)','檢查號'],
                      index_40_3:['種類','材質','處理','流水編號(3碼)','檢查號'],
                      index_40_4:['種類','矽鋼板(素材)','厚度','流水編號(3碼)','檢查號'],
                      index_40_5:['種類','矽鋼板(裁切條料)','厚度','流水編號(1碼)','檢查號'],
                      index_50_1:['種類','材質','流水編號(4碼)','檢查號'],
                      index_60_1:['種類','型式','流水編號(3碼)','檢查號'],
                      index_70_1:['種類','規格','流水編號(3碼)','檢查號'],
                      index_70_2:['種類','材質','流水編號(3碼)','檢查號'],
                      index_80_1:['種類','規格','流水編號(3碼)','檢查號'],
                      index_92_1:['工程別','機種簡稱','流水編號(4碼)','檢查號'],
                      index_92_2:['條料寬度','流水編號(2碼)','檢查號'],
                      index_92_3:['鐵芯長','流水編號(2碼)','檢查號'],
                      index_92_4:['鐵芯長','流水編號(4碼)','檢查號'],
                      index_92_5:['類別','流水編號(4碼)','檢查號'],
                      index_90_1:['類別','型式','流水編號(4碼)','檢查號']
                    })[`index_${this.state.index_1}${this.state.index_2}_${this.state.index_type}`] || [''];

    const index_c = ({index_1_1_1:['UL1007','UL1015','UL1430','UL1431','UL1509','UL1672','UL1061','UL1180','UL1617','UL1331','UL1095','UL1533','UL1332','UL2464','UL3239','UL1185','UL2547','UL20267','UL2651','UL2678','UL1180','UL1569','PVC','其 他'],
                      index_1_1_2:['UL1007','UL1015','UL1430','UL1431','UL1509','UL1672','UL1061','UL1180','UL1617','UL1331','UL1095','UL1533','UL1332','UL2464','UL3239','UL1185','UL2547','UL20267','UL2651','UL2678','UL1180','UL1569','PVC','其 他'],
                      index_2_1_1:['A.P.Tz WIRE/AIEIW-200','PEW(S.S) WIRE','UEW(D.D)WIRE','DD+NY WIRE','NEW(NYW) WIRE','SQ. WIRE','COPPER BRAIDED','TINNED WIRE','Ni-Cu WIRE','PVF','Ni-Cr WIRE','鍍錫銅包鋼線','NOMEX COPPER WIRE/LITZ','TRIPLE INSULATED WIRE','SUPERCONDUCTING WIRE','BRAIDED COPPER CABLE','O.F.C WIRE 無氧銅線','WIRE UEW','WIRE DD-F','SSF-NY','WIRE AL'],
                      index_3_1_1:['POLYESTER FILM TAPE (M-T)','PAPER TAPE (560F, 560S)','POLYIMIDE FILM TAPE','EPOXY TAPE (3M#10)','ACETATE CLOTH TAPE (3M#11,ACAT)','GLASS CLOTH TAPE (3M#27)(TUCK#51)','PROFORMED BUTYL TAPE','DOUBLE SURFACE TAPE','ADHESIVE & SEMI ADHESIVE TAPE','PROTECT TAPE','SINGLE COATED WITH FOAM TAPE','COMPOUND ADHESIVE TAPE','ALUMINUM FOIL TAPE (3M#)/COPPER TAPE','REINFORCED PET INSULATION TAPE','TAPE VINY ELECTRICAL','PTFE FILM TAPE','NOMEX PAPER','KRAFT PAPER, PAPER BB ','MYLAR','WHITE WAX PAPER','FIBER','UL TUBE','UN-UL TUBE','GLASS TUBE','WAX TUBE、INSUL. TUBE','HEAT SHRINKABLE TUBE','KRAFT TUBE','TEFLON TUBE','SILICON BARRIER','COTTON TAPE','NON-WOVEN FABRIC','SILICON RUBBER','SILICON TUBE','SILICON RUBBER COATED FIBERGLASS SLEEVING','SILICON VARNISHED GLASS SLEEVING','BEN-HAR ACRYL SLEEVING','END CHEEK','CLOTH','SUPER INSULATION','AL FOIL 鋁箔','PET 擴充編織'],
                      index_4_1_1:['矽鋼鐵芯','鎳鐵合金鐵芯','亞鐵鐵粉芯','鐵帶','鐵底','鐵蓋','鐵腳','鐵芯','銅圈','壓板','矽鋼'],
                      index_4_1_2:['SCREW','NUT','WASHER','RIVET(鉚釘)','止輪(扣環)','STUD','FORMER','CHAIN','其他','牙條 六角板手'],
                      index_4_1_3:['組立面板', '電源箱把手鉸鏈','固定板(棒)支架端子管E型扣環','接線板','散熱器','純鐵製品','繞線銅板銅板','SPRING PIN插銷','SPRING STUD BOLT 心軸','接點接片接頭開關襯套墊片金屬軟管SHIELDCOVER(隔離罩/片)','組立框','FOIL TAPE ','鍍鋅板,鋁板,普通板','旋鈕(KNOB)','矽鋼板(素材)','矽鋼板(裁切條料)','IRON BOX 鐵盒耗材','其他'],
                      index_4_1_4:['預設值(64)'],
                      index_4_1_5:['預設值(65)'],
                      index_5_1_1:['塑膠粒、色母','普通式BB(COMMON)','分隔式BB(APART)','普通式BB-PCB','分隔式BB-PCB','普通式BB-KSP','分隔式BB-KSP','盒子式BOBBIN','盒子式COVER','抽式BOBBIN','抽式COVER','尼龍套、絕緣墊片','蓋子(網蓋、PT保護蓋)','支架、CHASSIS、CASE、底座、DOOR) 、間隔柱、銘板、腳墊','搖桿、滾子、插梢、輪','電源開關箱、輸入座','夾線槽、束線帶','護線環、固定扣(座)、櫬套、線材標示牌','端子板、補償片','把手、按鈕、開關','內外層式BB-內層P','內外層式BB-外層S','裝飾板、條、框、帶','KEYBOARD OVERLAY','LENS 透鏡','防水塞、滑槽,RING','其他(三通、由任)','雜項BOBBIN','SHEET PVC','MIRROR 鏡子','FORMER 玻璃纖維線軸','DAMPER 緩衝器','毛氈','球網、織布扣合','乒乓球','圍布','水槽','固定用','稀釋用','硬化促進用','清潔用','塗裝用','散熱用','助焊用','COATING用','乾燥劑、防潮用','捺印用','防水/散熱','填充','營養液','其他'],
                      index_6_1_1:['包裝紙類','PS發泡成型類','木板類','PE袋、PE布','包裝膠帶','貼標(含膠)','數字貼標','銘板','說明書、警告單(不含膠)','真空成型類','打包鐵材類','PP打包帶','PU發泡','PE發泡','牛皮紙袋','橡皮圈、訂書針…','PVC包裝盒類','PET包裝盒類','其它','碳帶 CARBON BRING'],
                      index_7_1_1:['DIODE、TVS、SCR、DIAC、TRIAC、RECTIFIER','IC、PHOTO COUPLER','TRANSISTOR','LED','VARISTOR、V.R(VARIABLE)','RECTIFIER (改使用002)','TRANSFORMER、INDUCTOR','IFT','L.C.D','EMI/LC FILTER','OSCILLATOR CRYSTAL','INTER MEDIATE FREQUENCY','其他歸至8089','ABSORBER','SENSOR'],
                      index_7_1_2:['CAPACITOR','RESISTOR、THERMISTOR、TRIMMER'],
                      index_8_1_1:['TERMINAL ','(TER.& SCREW ASS’Y)','TERMINAL BLOCK','HOUSING 合 併 用(004)','CONNECTOR 合併用 (004)','CONNECTOR','P.C BOARD','CIRCUIT BREAKER','FUSE','FUSE HOLDER & FUSE CLIP','RELAY','','METER','SWITCH','RECEPTACLES','BANANA CONNECTOR','ELECTRICAL LEAD WIRE','SOLDERING','MICA INSULATOR','GHOST TIE 魔 帶','JUMPER WIRE','TERMINAL BOARD','PIN  TAPE','','WINDING ASS’Y','PVC & LEAD WIRE & TERM. & HOUS. ASS’Y','FLAT CABLE (ASS’Y)','MAGNIFER/FILTER','FAN ( FAN NUT )','TEST POINT','SHIELD WIRE ASS’Y','BATTERY','CONNECTOR-LCD','CONNECTOR-COVER','KEY','TERM. BOARD & LEAD WIRE ASS’Y','電子配件 SUB ( 直接外購)','五金鐵材..組立(直接外購)'],
                      index_9_1_1:['無機種區分統一歸於(05)','無機種區分統一歸於(05)','無機種區分統一歸於(05)','無機種區分統一歸於(05)','線座帶與端子(引線)加工','繞線工程','配線工程','鐵芯工程','含浸工程','PCB (CHS), (INS) SUB','DOOR SUB, X SUB,CASE SUB, (“X”BOX SUB)','(BOBBIN/X) SUB, ASS’Y,LEAD WIRE & LEAD TAPE & (X) ASS’Y','WIRE ASS’Y','五金鐵材……組立SIDE,FRONT,REAR(X),WELLPLATE SUB','電子元件SUB(LED, LCD, NEON LAMP) SUB','電子配件SUB(RUBBER MATERIAL) & (X) SUB','PACKING ASS’Y','IC PROGRAMED','X’FMR ASS’Y & X…','CABLE ASS’Y','消耗材料半成品A/R MATERIAL SUB','X’ASS’Y & (X) ASS’Y','裝配附件','PACKING ASS’Y & XXX','電腦週邊零件組立','塑膠成型類','零件(單出)','音響類','裁切工程','韌體版次(FIRMWARE)','塑膠加工LCD半成品組立','測試','環型鐵芯','其他']

                     })[`index_${this.state.index_1}_1_${this.state.index_type}`] || ['1'];



    const index_c_index = _.map(index_c,(v,k)=>{
      return ( <option value={k+1} key={k} className={style.option}> {v}</option>);
       } );
    const color_2_index = _.map(color_2,(v,k)=>{
        return (<option value={color_2[k].index} key={k} > {color_2[k].color}</option>);
           });
    const width_2_index = _.map(['零號線','一種線','兩種線','三種線','HEAVY','COTTON','無','無','其他','裸線'],(v,k)=>{
            return(<option value={k} key={k}> {v} </option>);
                        } );
    const color_1_index = _.map(['BLK (黑)','BWN (棕)','RED (紅)','ORG (橙「金」)','YEL (黃)','GRN (率)','BLU (藍)','VIO (紫)','GRY/SIL(灰「銀)','WHT (白)'],(v,k)=>{
                  return (<option value={k} key={k}> {v} </option>);
                    });

    const index_material_spec = ({  index_70_1_000:['AWF','CER','CHIP','CHIP ARRAY','CHIP CER','P A C','CHIP FILM','CHIP NETWORK','CHIP VAR','CONDUCTIVE POLYMER','DISC CER','ELEC.','ELEC. (BR)','ELEC. (NP)','FILM','MEF/MER','MKP','MKT','MOMO CER','MON CER','MONO','MONO CER','MPE/MPP','MPF','MPR','MPT','MPTE','PEI','PEN','POLTPROPYLENE','PP','PPN','PS','PT','SMD ELEC.','SMD ELEC.(NP)','SMD TAN','TAN','THOR CER','VAR','X1','X1/Y1','X1/Y2','X2','X2 MP','X2 MPE','Y','Y1','Y2','EMI FILTER','DISC CER CAP','DISC MPE','FFB','9PIN'],
                                    index_70_1_001:['TRIMMER','HIGH RANGE V.R','MID RANGE V.R','VR','VR ROTARY','VR SMD','VR TRIMMER ','VR TRIMMER SMD','THERMISTOR','THERMISTOR CHIP NTC','THERMISTOR NTC','THERMISTOR POWER','THERMISTOR PTC','THERMISTOR SMD NTC ','MF RS','RS CEMENT','RS CF','RD CHIP 0402','RD CHIP 0603','RD CHIP 0805','RS CHIP 1206/1210','RD CHIP 2512','RD CHIP other','RD CHIP NETWORK','RS CMF','','RS FCC','RS FCR','RS FUSE','RS HV','RS MF','RS MILLI-OHM','RS MOF','RS NETWORK','RS PF','RS PW','RS THERMAL SENSITIVE','RS WW','ACITOR','RS CMP','','','5PIN','TR IMMER','8PIN','7PIN','2,6PIN','9PIN10PIN','16PIN','THERMISTER','14PIN'],
                                    index_70_1_002:['P','1N','SKR','SKN','MUR','FE','UF','MR','2N','R','','RUR','GZA','GP','MPT','UES','BYW','18','','KBPC','MBR','BZX','RS','S','','A','B','C','D','0','1','2','3','4','5','6','7','8','9','E','F','G','H','I','J','K','L','M','N','O','Q','T','U','V','W','X','Y','Z'],
                                    index_70_1_003:['MC','REF','AN','TL','1N','MA&uA','LC','CANCELL','ICTM','DS&DM','SN','CANCEL LT/LM','ULN','CANCEL M','CANCEL D','CANCEL 74LS','6N','CANCEL 94','COP','ICM','0','1(1N)','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M(MC)','N','O','P','Q','R(\REF)','S','T','U','V','W','X','Y','Z'],
                                    index_70_1_004:['2N&4N','TIP','MPS','MTP','MJE','PN','1RF','A5T','2','MJ','VN','MTM','RFM','J','D','B','Y','C','S','M','T','K','N','F','H','Z','R','U','I','X','L','P','A','G'],
                                    index_70_1_005:['RED','YELLOW','GREEN','AMBER','RED&GREEN','BLUE','ORANGE','YELLOW&GREEN','WHITE','WARM','WHITE','RED/GREEN/BLUE','I.R ','ASS"Y','BUSHING','LOCK'],
                                    index_70_1_006:['V.S','E','R','K','G','J','Z','1','M','S','ST','TI','T','C','V','P','2','H','F','B','3'],
                                    index_70_1_007:['10A','8A','25A','1A'],
                                    index_80_1_00: ['INSUL.','UNINSUL.','TER. SCREW ASS"Y','PUSH','CHECK','GND'],
                                    index_80_1_01:['4P','1P','2P','3P',' ','5P','6P','7P','8P','9P','10P','整排'],
                                    index_80_1_04:['0P','1P','2P','3P','4P','5P','6P','7P','8P','9P','10P','11P ','12P','13P','14P','15P','16P','17P','18P','以下類推'],
                                    index_80_1_05:['1.6t','2.3t','ass"y','1.0t','1.2t','0.8t','2.4t','3.2t ','0.6t','1.5t','6.3t ','2.0t','0.15t ','1.7t ','1.65t','1.2t'],   
                                    index_80_1_06:['3A','4A','5A','7A','8A','10A','12A','15A','18A','20A','30A','35A','45A','65A','25A','1.5A','7.5A','1.2A','9A','3.5A','4.5A','50A'],
                                    index_80_1_07:['GLASS BODY FUSE'],
                                    index_80_1_08:['FUSE HOLDER','FUSE CLIP','FUSE BLOCK'],
                                    index_80_1_09:['2P','3P','4P','6P','1P','5P','8P','10P', 'REED','RELAY'],
                                    index_80_1_11:['DC','AC'],
                                    index_80_1_12:['WAVE SWITCH ','POWER SWITCH','THERMOSTAT','KEYBOARD SWITCH PUSH BOTTN','DIP-SWITCH(ROTATE/PIANO/ROTARY)','PUSH SWITCH (CAP)','MEMBRANE SWITCH','SLIDE SWITCH','POWER SEE-SAW SWITCH','SELECT SWITCH','TACT SWITCH','ROCKER SWITCH','KEY SWITCH','URGENTS SWITCH','MAGNETIC SWITCH'],
                                    index_80_1_13:['DUPLEX OUTLET','INLET SOCKET','BNC','RELAY SOCKET','IC DIP SOCKET','BANANA SOCKET','EXTEND SOCKET','其他'],
                                    index_80_1_14:['BANANA CONNECTOR',' BATTERY CLIP','BATTERY PLUG'],
                                    index_80_1_16:['BLACK','GRAY','WHITE'],
                                    index_80_1_17:['SOLDER BAR','SOLDER WIRE','SOLDER PASTE'],
                                    index_80_1_18:['0.15t','0.20t'],
                                    index_80_1_19:['00'],
                                    index_80_1_20:['0.8mm','0.6mm','1.0mm','2.2mm','1.6mm','其他'],
                                    index_80_1_21:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_80_1_22:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_80_1_23:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_80_1_24:['....','EI-28','EI-35','EI-41','EI-48','EI-54','EI-60','EI-66','EI-76','EI-57'],
                                    index_80_1_25:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_80_1_26:['10PIN','14PIN','16PIN','20PIN','26PIN','34PIN','40PIN','以此類推'],
                                    index_80_1_27:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_80_1_33:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_92_5_00:['220491', '220583', '220596', '220593', '221008', '220538', '220595', '220597', '220598', '220926', '221086', '221149', '220584', '221009', '221010', '480-1500', '203509', '203578', '206197', '206307', '206308', '206320','SPS7243-100A', '32001207', '32001205', '32001236', '32001234', '32001230', '32001202', '32001203', '209171', '32001206', '32001235', '32001231', '32001212', '32001233', '3200T85L', '32001204', '32001241', '32001232', '32001237', '32001209', '32001243', '32001240', '32001212', '32001213', '32001214', '32001238','32001210', '32001242', '32001218', '32001245', '32001222', '32001250', '32003143', '32003222', '32003490', '32003321', '32006119/207001MICRO', '207000MICRO', '32005733','32005552', '32005992', '32005995', '32005555', '32005996', '50001219', '50003825'],
                                    index_90_1_01:['SWITCHING','LINEAR','FERRO RESONANT','AC SOURCE','PLUG-IN','COOVERTER','INVERTER'],
                                    index_90_1_02:['POWER','AUDIO','C.V.T.','CHOKE','CURRENT ','INDUCTOR ','PULSE','FLYBACK'],
                                    index_90_1_03:['POWER','CONTROL','TRANSMISSION','LOG','ANALOG','AUDIO','其他'],
                                    index_90_1_04:['統ㄧ編於此'],
                                    index_90_1_08:['COMPUTER'],
                                    index_90_1_09:['AC/DC','AC/AC'],
                                    index_90_1_12:['組立完成品','零件'],
                                    index_90_1_23:['緊急ＥＸ','避難EB']
                                    



                                    




                                    

                                    

                                    })['index_80_1_21'] || ['12'];


    const map_index = _.map(index_b, (v,k)=> {   
            if (v == '流水號碼(1碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} maxLength="1" min="0" max="9"/> </div>);
            }
            if (v == '流水編號(2碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} maxLength="2" min="0" max="99"/> </div>);
            }if (v == '流水編號(3碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} maxLength="3" min="0" max="999"/> </div>);
            }if (v == '流水編號(4碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} maxLength="4" min="0" max="99"/> </div>);
            }
            if (v == '號數' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" min="1" max="99" key={k}/> </div>);
            }
            if (v == '檢查號' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} value="0" min="0" max="9"/> </div>);
            }if(v == '種類' ){
              return (<div>{v} <select name="index_2" id="" onChange={this.onChange} className={style.select} key={k}> {index_c_index} </select> </div>);
            }if(v == '工程別' ){
              return (<div>{v} <select name="index_2" id="" onChange={this.onChange} key={k}> {index_c_index} </select> </div>);
            }if(v == '工程簡稱' ){
              return (<div>{v} <select name="index_2" id="" onChange={this.onChange} key={k}> {index_c_index} </select> </div>);
            }if(v == '顏色(2碼)' ){
              return (<div className={style.select}>{v} <select name="index_1_color" id=""  onChange={this.onChange} key={k}  > {color_2_index} </select> </div>);
            }if(v == '顏色(1碼)' ){
              return (<div>{v} <select name="index_1_color" id="" onChange={this.onChange} key={k}> {color_1_index} </select> </div>);
            }if(v == '線徑' ){
              return (<div><label> {v} </label> <input className={style.input_1} type="number" min="0" max="9999" key={k}/></div>);
            }if(v == '緣厚度與種類' ){
              return (<div><label> {v} </label> <select name="" id=""> {width_2_index} </select></div>);
            }if(v == '型態' ){
              return (<div><label> {v} </label> <select name="" id=""> {_.map( ['整卷','整卷沖孔','切斷','切斷衝製'],(v,k)=>{ return (<option value={k} key={k}>{v}</option>)})} </select></div>);
            }if(v == '厚度或直徑' ){
              return (<div><label> {v} <select name="" ><option value="">厚度</option><option value="">直徑</option> </select>  </label></div>);
            }



            else{

                    return (<div><label style={{"textAlign":"center"}}> {v} </label><select name="" id="" onChange={this.onChange}>  {material_header}  </select> </div> );
              }
            });

    var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two', clearableValue: false }
];  


    console.log(this);
    return (
      <div>
        <div >
         <Link to="/"> <i className="fa fa-arrow-left fa-3x" /> &nbsp; <i className="fa fa-home fa-3x" aria-hidden="true"></i> </Link>   

         <label className={style.label_1}> 材料編號準則 </label> 
          <i className="fa fa-arrow-circle-down fa-3x" aria-hidden="true" style={{"float":"right" , "marginRight":"20px"}}> <span style={{"color":"white"}}>{this.props.bom.length }</span></i>
        </div>

        <div className={style.div_left}>
          
          {material_header_li}
        

        </div>
         <div className={style.div_right}>

          <div> 

          

             
            
           
           <select name="index_type" id="" onChange={this.onChange} className={style.select} > {index_type_index}</select>
           
          </div>

          <div>
          
              {map_index}
            
            
          </div>
          <input type="file" onChange={this.upload}/>
          <button className={style.btn_save} onClick={this.add}> ADD </button>
          <button className={style.btn_save} onClick={this.local}> start </button>
          <button className={style.btn_save} onClick={this.save}> Save </button>
        {this.state.index_1}{this.state.index_2}{this.state.index_3}{this.state.index_4}{this.state.index_5}{this.state.index_6}{this.state.index_7}{this.state.index_8}{this.state.index_9}{this.state.index_0}
      </div>
      </div>

    );
  }
}




