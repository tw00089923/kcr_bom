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

import react_select_css from 'react-select/dist/react-select.css';
import XLSX from 'xlsx';
import Tip from './Tip';
import Select from './Select_option';



export default class Bom extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      index_type:"1",
      index_3_1:0,
      index_1: 1,
      index_2: 0,
      index_3: 0,
      index_4: 0,
      index_5: 0,
      index_6: 0,
      index_7: 0,
      index_8: 0,
      index_9: 0,
      index_0: 0,
      error:{}
    };
       this.onChange = this.onChange.bind(this);
       this.onClick = this.onClick.bind(this);
   
       this.save = this.save.bind(this);
      
       this.onChange_index_4 = this.onChange_index_4.bind(this);
       this.onChange_index_5 = this.onChange_index_5.bind(this);
       this.onChange_index_6 = this.onChange_index_6.bind(this);
       this.onChange_index_7 = this.onChange_index_7.bind(this);
       this.onChange_index_8 = this.onChange_index_8.bind(this);
       this.onChange_index_92 = this.onChange_index_92.bind(this);
       this.onChange_index_90 = this.onChange_index_90.bind(this);   
       this.onChange_number = this.onChange_number.bind(this);
  }


read(){

  const readdir = (url) =>{
      let fs = require('fs');
      let path = require('path');
      let files = fs.readdirSync(url);
      let fullname =[];
      let local = window.location.pathname;
      let localurl = local.substring(0,local.lastIndexOf('/')+1)+url.substring(6,url.length);
      console.log(localurl);
      files.forEach(function (filename) {
       fullname.push(path.join(url,filename));
      });

      return fullname;
  }
  
   const url = readdir(`./app/excel/export/${this.state.index_1}`);


  console.log(url);


  //  const a = document.createElement("a");
  //  a.href = url[0];
  //  a.setAttribute('download', url[0].substring(url[0].lastIndexOf('/')+1));
  //  a.setAttribute('target', '_blank');
  //  a.click();


   
    var oReq = new XMLHttpRequest();
    oReq.open("GET",'excel/export/1/DOC052-1 料號申請單-電線電纜類-OK.xls', true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
      var arraybuffer = oReq.response;

      /* convert data to binary string */
      var data = new Uint8Array(arraybuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");

      /* Call XLSX */
      var workbook = XLSX.read(bstr, {type:"binary"});
      console.log(workbook);
      /* DO SOMETHING WITH workbook HERE */
    }

    oReq.send();
 


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
    let  a = e.target.value;
    let b ={};
    for (var i = 3; i <= 9; i++) {
    
      b[`index_${i}`] = 0;   
    }
    let c =  Object.assign(b,{index_0:0});

      if(a < 9 ){
          // this.setState({index_1:a,index_2:0,index_type:1 ,index_3:0,index_4:0}); 
          this.setState(Object.assign({index_1:a,index_2:0,index_type:1}, c)) ;
        }
      if(a == 9 ){
          // this.setState({index_1:a ,index_2:2});
          this.setState(Object.assign({index_1:a,index_2:2}, c)) ;
        }
      if(a == 10){

          // this.setState({index_1:9,index_2:0,index_type:1});

           this.setState(Object.assign({index_1:9,index_2:0,index_type:1}, c)) ;
        }
    

  }
 
  onChange(e){
    let a = e.target.value;

    if(e.target.name == "index_type"){  
      
     
        this.setState({index_type:a});
    
     
       
    }
    if(e.target.name == "index_1_color"){
      if (e.target.value>9){
      this.setState({ index_6:e.target.value.substring(0,1),index_7:e.target.value.substring(1,2)});
      }else{
        this.setState({inde_6:0,index_7:a.substring(1,2)});
      }
    }
    if(e.target.name == "index_2_color"){
      if (e.target.value < 10){
      this.setState({ index_9 : a });
      }
    }


    if(e.target.name == "index_2"){
       
      if ( a < 9){

           this.setState({ index_2:0,index_3:a});
   
        }
     
      }if( a > 10 ){
        this.setState({ index_2:e.target.value.substring(0,1),index_3:e.target.value.substring(1,2) });
      }if( a == 23){
        this.setState({ index_2:7,index_3:0});
      }if (a == 24) { 
        this.setState({index_2:9,index_3:9});
      }
    
    if( e.target.name == "index_1_number"){
      if (a < 100 ) {
     
        this.setState({ index_4: parseInt(a/10) , index_5 : a%10 });
      }

    }

    //  （2) 線徑
    if( e.target.name == "wire_thin_4"){

      if(parseInt(a)<10000){
     this.setState({ index_4: parseInt(a/1000),index_5: parseInt(a%1000/100),index_6:parseInt(a%1000%100/10),index_7:parseInt(a%10) })
        }else{
          this.setState({index_4:0,index_5:0,index_6:0,index_7:0});
        }
    }
    if( e.target.name == "index_2_thin"){
      this.setState({index_8 : a });
    }
    // (3)
   if( e.target.name == "index_3_title"){
    this.setState({index_3_1 : parseInt(a) });
   }
   if(e.target.name == "index_3_56"){
    this.setState({index_5: parseInt(a/10),index_6:a%10 });
   }
   if( e.target.name =="index_3_4"){
            this.setState({ index_4:a });
          }




  }

  onChange_index_4(e){

     let a = e.target.value;
    if(e.target.name == "index_4_3"){
      this.setState({ index_4 : parseInt(a%1000/100),index_5:parseInt(a%100/10),index_6:parseInt(a%10) });
    }if(e.target.name == "index_4_4"){
      this.setState({ index_4 : parseInt(a%10) });
    }

    if(e.target.name == "index_464"){
      this.setState({ index_2 : parseInt(a%100/10), index_3:parseInt(a%10)});
    
    }if(e.target.name == "index_465"){
      this.setState({ index_2 : parseInt(a%100/10), index_3:parseInt(a%10)});
    }if(e.target.name == "index_4_4_material"){
      this.setState({ index_7 : parseInt(a%100/10), index_8:parseInt(a%10)});
    }if(e.target.name == "index_4_6"){

      if (a < 100) {
        this.setState({index_4:parseInt(a/10),index_5:parseInt(a%10)});
      }

    }

     if(e.target.name == "index_4_7"){
      this.setState({index_6:parseInt(a)});
    }
    if(e.target.name == "index_4_1_456"){  
    if(a < 1000){
    this.setState({ index_4 : parseInt(a%1000/100),index_5:parseInt(a%100/10),index_6:parseInt(a%10) });
        }else{
    this.setState({ index_4 : 0,index_5:0,index_6:0 });
        }
  }
  if(e.target.name == "index_4_45"){
   if(a<100){
      this.setState({ index_4:parseInt(a/10) ,index_5:parseInt(a%10) });
    }
    }



  }

  onChange_index_5(e){
     let a = e.target.value;
     let b = e.target.name;
     let c  = Number(a)+60 ;
    

     if ( b == "index_5_1") {

        if(this.state.index_type == 1){
          this.setState({index_2 :parseInt((a)/10) ,index_3 :parseInt((a)%10) }); 
        }else{
          this.setState({index_2 :parseInt(c/10) ,index_3 :parseInt(c%10) }); 
        }

       
     }if( b == "index_5_material"){
        this.setState({index_4:parseInt((a)/10),index_5:parseInt((a)%10)});


     }



     else{
        this.setState({index_2 :parseInt(a/10) ,index_3 :parseInt(a%10) }); 
     }


       }

  onChange_index_6(e){ 
     let b = e.target.name;
     let a = e.target.value;

     if (b == 'index_6') {
      this.setState({index_4:parseInt(a/100) ,index_5 :parseInt(a%100/10),index_6:parseInt(a%10) }); 
       }else{
        this.setState({index_4:0,index_5:0,index_6:0});
       }
     }

  onChange_index_7(e){
    let b = e.target.name;
    let a = e.target.value;
  
      if (b == 'index_7_1') {
      this.setState({index_2 :parseInt(a/100),index_3:parseInt(a%100/10) ,index_4:parseInt(a%10)}); 
      }

     if (b == 'index_7') {

      if (this.state.index_4 == 1) {
           this.setState({index_5 :parseInt(a/10),index_6:parseInt(a%10) }); 

           console.log("ok");
      }
       
    
        

       }else{
        this.setState({index_5:0,index_6:0});
       }
    }
    onChange_index_8(e){
      let b = e.target.name;
      let a = e.target.value;
      if (b == 'index_8_1') {

         this.setState({index_2 :parseInt(a/100),index_3:parseInt(a%100/10) ,index_4:parseInt(a%10)}); 

      } if (b == 'index_8_2') {

         this.setState({index_5 :parseInt(a/10),index_6:parseInt(a%10)}); 

      }else{
        this.setState({index_5 :0,index_6:0}); 

      }


    }

  onChange_index_92(e){
    let b = e.target.name;
    let a = e.target.value;
    if (b == 'index_92_1') {
         this.setState({index_3 :parseInt(a/10),index_4:parseInt(a%10) }); 

    }if (b == 'index_92_2') {
         this.setState({index_5 :parseInt(a%10+1) }); 

    }if (b == 'index_92_3') {
         this.setState({index_5 :parseInt(a/100),index_6:parseInt(a%100/10) ,index_7:parseInt(a%10) }); 

    }if (b == 'index_92_4') {
         this.setState({index_3 :3,index_4:5 }); 

    }if (b == 'index_92_5') {
         this.setState({index_3 :3,index_4:7 }); 

    }if (b == 'index_92_6') {
         this.setState({index_3 :4,index_4:0 }); 

    }if (b == 'index_92_7') {
         this.setState({index_5 :parseInt(a/100),index_6:parseInt(a%100/10) ,index_7: parseInt(a%10)  }); 

    }if (b == 'index_92_8') {
         this.setState({index_5 :parseInt(a/10),index_6: parseInt(a%10) }); 

    }if (b == 'index_92_9') {
         this.setState({index_3 :9 , index_4: 9}); 

    }

  }

  onChange_index_90(e){
    let b = e.target.name;
    let a = e.target.value;
    if (b == 'index_90_1') {
      if (a < 27) {
          this.setState({index_3 :parseInt(a/10) , index_4: parseInt(a%10) , index_5 :0 ,index_6:0 ,index_7 :0 , index_8: 0 ,index_9:0 }); 
         }else{
          this.setState({index_3 :4 , index_4:0  ,index_5 : 0 ,index_6 :0 ,index_7 :0 , index_8: 0 ,index_9:0 }); 
         }
        

    }if ( b == 'index_90_2') {
      if (true) {
        this.setState({index_5 : parseInt(a/10) , index_6: parseInt(a%10)});
      }else{
        this.setState({ index_5 : 0 , index_6 : 0});

      }

        
    }
      


  }


  onChange_number(e){

    let a = e.target.value;
   if( e.target.name == "one_number"){
      if(parseInt(a) < 10 ){
       this.setState({ index_9: parseInt(a)%10});
      }else{

        this.setState({ index_9: 0});
      }
    }
     if(e.target.name== "three_number"){
      if(parseInt(a)<1000 ){

        this.setState({ index_7:parseInt(a/100),index_8:parseInt(a%100/10),index_9:parseInt(a%10)});
      }else{
        this.setState({index_7:0,index_8:0,index_9:0});
      }
    }
    if( e.target.name == "four_number"){

      if(parseInt(a)<10000){
        this.setState({ index_6: parseInt(a/1000),index_7: parseInt(a%1000/100),index_8:parseInt(a%1000%100/10),index_9:parseInt(a%10) })
      }else{
        this.setState({ index_6:0,index_7: 0,index_8:0,index_9:0})
      }
    }
        if(e.target.name == "two_number"){
      if(parseInt(a) < 100 ){

       this.setState({ index_8 : parseInt(a/10),index_9: parseInt(a)%10});
      }else{
       this.setState({ index_8 : 0,index_9: 0 });
      }
    }
   }

  render() {
    const material_header= _.map(["電線與電纜","漆包線與導線","絕緣材料","五金鐵材","塑膠化學","包裝與標示材料","電子元件","電子配件","半成品","成品"],(v,k)=>{
        return (<option value={k+1} key={k} className={style.option_1}> {v} </option>);
    });

    const material_header_show = ({ index_1 :"電線與電纜", 
                      index_2:"漆包線與導線",
                      index_3:"絕緣材料",
                      index_4:"五金鐵材",
                      index_5:"塑膠化學",
                      index_6:"包裝與標示材料",
                      index_7:"電子元件",
                      index_8:"電子配件",
                      index_92:"半成品",
                      index_90:"成品"
                        })[this.state.index_1 > 8 ? `index_${this.state.index_1}${this.state.index_2}`:`index_${this.state.index_1}`] || '預設值';


    const material_header_li = _.map(["電線與電纜","漆包線與導線","絕緣材料","五金鐵材","塑膠化學","包裝與標示材料","電子元件","電子配件","半成品","成品"],(v,k)=>{
        return (<li  value={k+1} key={k} onClick={this.onClick}> {v} </li>);
           });
    const index_type =({ index_1 :['標準模式整卷','標準模式切斷'], 
                      index_2:['標準模式'],
                      index_3:['標準模式'],
                      index_4:['PT材料','PT配件','組立材料','鐵芯(素材)','鐵芯(裁切條料)'],
                      index_5:['標準模式[塑膠]', '標準模式[化學]'],
                      index_6:['標準模式'],
                      index_7:['標準模式'],
                      index_8:['標準模式'],
                      index_92:['標準模式(工程別)','標準模式(矽鋼片_條料)','標準模式(鐵芯,沖製品及未燒炖N品)','標準模式(鐵芯,沖製品及燒炖A品)','標準模式(CHRONOIII & PLR 機種)'],
                      index_90:['標準模式'],
                        })[this.state.index_1 > 8 ? `index_${this.state.index_1}${this.state.index_2}`:`index_${this.state.index_1}`] || '預設值';
    const index_type_index = _.map(index_type,(v,k)=>{
      return (<option value={k+1} key={k} > {v} </option>);

    });
    const index_b =({ index_1_1:['種類','號數','顏色(2碼)','流水編號(2碼)','檢查號'],
                      index_1_2:['種類','號數','流水編號(4碼)','檢查號'],
                      index_2_1:['種類','線徑','緣厚度與種類','顏色(1碼)','檢查號'],
                      index_3_1:['種類','型態','厚度或直徑','流水編號(3碼)','檢查號'],
                      index_4_1:['種類','鐵芯長','流水編號(3碼)','檢查號'],
                      index_4_2:['種類','規格(4)','處理','流水編號(3碼)','檢查號'],
                      index_4_3:['種類','材質','處理','流水編號(3碼)','檢查號'],
                      index_4_4:['鐵芯(素材)','矽鋼板(素材)厚度','矽鋼片材質','流水編號(1碼)','檢查號'],
                      index_4_5:['鐵芯(裁切條料)','矽鋼板(裁切條料)厚度','寬度','流水編號(1碼)','檢查號'],
                      index_5_1:['種類[塑膠化學]','材質[塑膠化學]','流水編號(4碼)','檢查號'],
                      index_5_2:['種類[塑膠化學]','材質[塑膠化學]','流水編號(4碼)','檢查號'],
                      index_6_1:['種類','包材型式','流水編號(3碼)','檢查號'],
                      index_7_1:['電子種類','電子元件材質','流水編號(3碼)','檢查號'],
                  
                      index_8_1:['電子配件種類','電子配件規格','流水編號(3碼)','檢查號'],
                      index_92_1:['工程別','機種簡稱','流水編號(4碼)','檢查號'],
                      index_92_2:['矽鋼片(條料)','條料寬度','流水編號(2碼)','檢查號'],
                      index_92_3:['鐵芯(沖製品及未燒炖N品)','(92)鐵芯長','流水編號(2碼)','檢查號'],
                      index_92_4:['EI鐵芯(沖製品及燒炖A品)','(92)鐵芯長','流水編號(2碼)','檢查號'],
                      index_92_5:['CHRONOIII','CHRONOIII類別','流水編號(3碼)','檢查號'],
                      index_90_1:['成品類別','成品型式','流水編號(3碼)','檢查號']
                    })[this.state.index_1 > 8 ? `index_${this.state.index_1}${this.state.index_2}_${this.state.index_type}` : `index_${this.state.index_1}_${this.state.index_type}`] || [''];

    const index_c = ({index_1_1_1:['UL1007','UL1015','UL1430','UL1431','UL1509','UL1672','UL1061','UL1180','UL1617','UL1331','UL1095','UL1533','UL1332','UL2464','UL3239','UL1185','UL2547','UL20267','UL2651','UL2678','UL1180','UL1569','UL3135','PVC','其 他'],
                      index_1_1_2:['UL1007','UL1015','UL1430','UL1431','UL1509','UL1672','UL1061','UL1180','UL1617','UL1331','UL1095','UL1533','UL1332','UL2464','UL3239','UL1185','UL2547','UL20267','UL2651','UL2678','UL1180','UL1569','UL3135','PVC','其 他'],
                      index_2_1_1:['A.P.Tz WIRE/AIEIW-200','PEW(S.S) WIRE','UEW(D.D)WIRE','DD+NY WIRE','NEW(NYW) WIRE','SQ. WIRE','COPPER BRAIDED','TINNED WIRE','Ni-Cu WIRE','PVF','Ni-Cr WIRE','鍍錫銅包鋼線','NOMEX COPPER WIRE/LITZ','TRIPLE INSULATED WIRE','SUPERCONDUCTING WIRE','BRAIDED COPPER CABLE','O.F.C WIRE 無氧銅線','WIRE UEW','WIRE DD-F','SSF-NY','WIRE AL'],
                      index_3_1_1:['POLYESTER FILM TAPE (M-T)','PAPER TAPE (560F, 560S)','POLYIMIDE FILM TAPE','EPOXY TAPE (3M#10)','ACETATE CLOTH TAPE (3M#11,ACAT)','GLASS CLOTH TAPE (3M#27)(TUCK#51)','PROFORMED BUTYL TAPE','DOUBLE SURFACE TAPE','ADHESIVE & SEMI ADHESIVE TAPE','PROTECT TAPE','SINGLE COATED WITH FOAM TAPE','COMPOUND ADHESIVE TAPE','ALUMINUM FOIL TAPE (3M#)/COPPER TAPE','REINFORCED PET INSULATION TAPE','TAPE VINY ELECTRICAL','PTFE FILM TAPE','NOMEX PAPER','KRAFT PAPER, PAPER BB ','MYLAR','WHITE WAX PAPER','FIBER','UL TUBE','UN-UL TUBE','GLASS TUBE','WAX TUBE、INSUL. TUBE','HEAT SHRINKABLE TUBE','KRAFT TUBE','TEFLON TUBE','SILICON BARRIER','COTTON TAPE','NON-WOVEN FABRIC','SILICON RUBBER','SILICON TUBE','SILICON RUBBER COATED FIBERGLASS SLEEVING','SILICON VARNISHED GLASS SLEEVING','BEN-HAR ACRYL SLEEVING','END CHEEK','CLOTH','SUPER INSULATION','AL FOIL 鋁箔','PET 擴充編織'],
                      index_4_1_1:['矽鋼鐵芯','鎳鐵合金鐵芯','亞鐵鐵粉芯','鐵帶','鐵底','鐵蓋','鐵腳','鐵芯','銅圈','壓板','矽鋼'],
                      index_4_1_2:['SCREW','NUT','WASHER','RIVET(鉚釘)','止輪(扣環)','STUD','FORMER','CHAIN','其他','牙條 六角板手'],
                      index_4_1_3:['組立面板', '電源箱把手鉸鏈','固定板(棒)支架端子管E型扣環','接線板','散熱器','純鐵製品','繞線銅板銅板','SPRING PIN插銷','SPRING STUD BOLT 心軸','接點接片接頭開關襯套墊片金屬軟管SHIELDCOVER(隔離罩/片)','組立框','FOIL TAPE ','鍍鋅板,鋁板,普通板','旋鈕(KNOB)','矽鋼板(素材)','矽鋼板(裁切條料)','IRON BOX 鐵盒耗材','其他'],
                      index_4_1_4:['預設值(64)'],
                      index_4_1_5:['預設值(65)'],
                      index_5_1_1:['塑膠粒、色母','普通式BB(COMMON)','分隔式BB(APART)','普通式BB-PCB','分隔式BB-PCB','普通式BB-KSP','分隔式BB-KSP','盒子式BOBBIN','盒子式COVER','抽式BOBBIN','抽式COVER','尼龍套、絕緣墊片','蓋子(網蓋、PT保護蓋)','支架、CHASSIS、CASE、底座、DOOR) 、間隔柱、銘板、腳墊','搖桿、滾子、插梢、輪','電源開關箱、輸入座','夾線槽、束線帶','護線環、固定扣(座)、櫬套、線材標示牌','端子板、補償片','把手、按鈕、開關','內外層式BB-內層P','內外層式BB-外層S','裝飾板、條、框、帶','KEYBOARD OVERLAY','LENS 透鏡','防水塞、滑槽,RING','其他(三通、由任)','雜項BOBBIN','SHEET PVC','MIRROR 鏡子','FORMER 玻璃纖維線軸','DAMPER 緩衝器','毛氈','球網、織布扣合','乒乓球','圍布','水槽','固定用','稀釋用','硬化促進用','清潔用','塗裝用','散熱用','助焊用','COATING用','乾燥劑、防潮用','捺印用','防水/散熱','填充','營養液','其他'],
                      index_6_1_1:['包裝紙類','PS發泡成型類','木板類','PE袋、PE布','包裝膠帶','貼標(含膠)','數字貼標','銘板','說明書、警告單(不含膠)','真空成型類','打包鐵材類','PP打包帶','PU發泡','PE發泡','牛皮紙袋','橡皮圈、訂書針…','PVC包裝盒類','PET包裝盒類','其它','碳帶 CARBON BRING'],
                      index_7_1_1:['CAPACITOR','RESISTOR、THERMISTOR、TRIMMER','DIODE、TVS、SCR、DIAC、TRIAC、RECTIFIER','IC、PHOTO COUPLER','TRANSISTOR','LED','VARISTOR、V.R(VARIABLE)','RECTIFIER (改使用002)','TRANSFORMER、INDUCTOR','IFT','L.C.D','EMI/LC FILTER','OSCILLATOR CRYSTAL','INTER MEDIATE FREQUENCY','其他歸至8089','ABSORBER','SENSOR'],
                     
                      index_8_1_1:['TERMINAL(TER.& SCREW ASS’Y)','TERMINAL BLOCK','HOUSING 合 併 用(004)','CONNECTOR 合併用 (004)','CONNECTOR','P.C BOARD','CIRCUIT BREAKER','FUSE','FUSE HOLDER & FUSE CLIP','RELAY','','METER','SWITCH','RECEPTACLES','BANANA CONNECTOR','ELECTRICAL LEAD WIRE','SOLDERING','MICA INSULATOR','GHOST TIE 魔 帶','JUMPER WIRE','TERMINAL BOARD','PIN  TAPE','','WINDING ASS’Y','PVC & LEAD WIRE & TERM. & HOUS. ASS’Y','FLAT CABLE (ASS’Y)','MAGNIFER/FILTER','FAN ( FAN NUT )','TEST POINT','SHIELD WIRE ASS’Y','BATTERY','CONNECTOR-LCD','CONNECTOR-COVER','KEY','TERM. BOARD & LEAD WIRE ASS’Y','電子配件 SUB ( 直接外購)','五金鐵材..組立(直接外購)'],
                      index_9_1_1:['無機種區分統一歸於(05)','無機種區分統一歸於(05)','無機種區分統一歸於(05)','無機種區分統一歸於(05)','線座帶與端子(引線)加工','繞線工程','配線工程','鐵芯工程','含浸工程','PCB (CHS), (INS) SUB','DOOR SUB, X SUB,CASE SUB, (“X”BOX SUB)','(BOBBIN/X) SUB, ASS’Y,LEAD WIRE & LEAD TAPE & (X) ASS’Y','WIRE ASS’Y','五金鐵材……組立SIDE,FRONT,REAR(X),WELLPLATE SUB','電子元件SUB(LED, LCD, NEON LAMP) SUB','電子配件SUB(RUBBER MATERIAL) & (X) SUB','PACKING ASS’Y','IC PROGRAMED','X’FMR ASS’Y & X…','CABLE ASS’Y','消耗材料半成品A/R MATERIAL SUB','X’ASS’Y & (X) ASS’Y','裝配附件','PACKING ASS’Y & XXX','電腦週邊零件組立','塑膠成型類','零件(單出)','音響類','裁切工程','韌體版次(FIRMWARE)','塑膠加工LCD半成品組立','測試','環型鐵芯','其他']

                     })[`index_${this.state.index_1}_1_${this.state.index_type}`] || ['1'];

    const index_3_56 = ({ index_0:['1mil(0.025mm)','2mil(0.05mm)','3mil(0.08mm)','4mil(0.10mm)','5mil(0.13mm)','6mil(0.15mm)','7mil(0.18mm)','8mil(0.20mm)','9mil(0.23mm)','10mil(0.25mm)','11mil(0.28mm)','12mil(0.3mm)','以此類推','其他'],
                          index_1:['0.4mm','0.5mm','0.8mm','0.85mm','1.0mm','1.5mm','2.0mm','2.5mm','3.0mm','3.5mm','3.7mm','4.0mm','5.0mm','5.2mm','6.0mm','6.5mm','8.2mm','9.5mm','10.0mm','12.5mm','18.0mm','19.0mm','7.0mm','1.35mm','6.35mm','6.20mm','X/8mm','X/16mm','8.0mm','15.0mm','12.0mm','0.1-0.99mm','1.01-1.999mm','12.7mm','2.69mm','14mm','25.4mm','11mm','13.5mm','38.1mm','35mm','16mm','20mm','50.8mm','63.5mm','30mm','17mm','70mm','1.6mm','其他mm']

      })[`index_${this.state.index_3_1}`] || [1,2];
    const index_3_56_head = _.map(index_3_56 ,(v,k)=>{

        return (<option value={k} key={k}>{v}</option> );
    });
    const index_c_index = _.map(index_c,(v,k)=>{
      return ( <option value={k} key={k} className={style.option}> {v}</option>);
       });

    const index_4_1_456 = ['2.5mm','2.6mm','3.0mm','3.5mm','4.0mm','5.0mm','6.0mm','6#','8#','10#','1/4"','4.5mm','4#','英吋','4.20mm','7.0mm','14.0mm','4.0mm','3.2mm','2.0mm','6.4mm','8.0mm','2#','9.5mm','3.1mm','9.0mm','2.3mm','1.7mm','10mm','15mm','16mm','20mm','12mm','25.4mm','其他'];
    const index_4_1_456_header = _.map( index_4_1_456,(v,k)=>{
      return (<option value={k} key={k}>{v}</option>);

    });
        
    const color_2_index = _.map(color_2,(v,k)=>{
        return (<option value={color_2[k].index} key={k} > {color_2[k].color}</option>);
           });
    const width_2_index = _.map(['零號線','一種線','兩種線','三種線','HEAVY','COTTON','無','無','其他','裸線'],(v,k)=>{
            return(<option value={k} key={k}> {v} </option>);
                        } );
    const color_1_index = _.map(['BLK (黑)','BWN (棕)','RED (紅)','ORG (橙「金」)','YEL (黃)','GRN (率)','BLU (藍)','VIO (紫)','GRY/SIL(灰「銀)','WHT (白)'],(v,k)=>{
                  return (<option value={k} key={k}> {v} </option>);
                    });
    const index_4_6_header = ['冷鋼(SPCC,CRS)','銅、錳 銅 ...','鋁(ALUMINUM)','純鐵(PURE IRON)','銀(SILVER)','鋼鐵(STEEL)','鋅 鐵 板(SECC,SPGC)','塑膠鋼','角鋼、易削鋼、CRS','不銹鋼','其他(材質不清)','Ni-Fe(鎳鐵合金)'];
    const index_4_6 = _.map(['冷鋼(SPCC,CRS)','銅、錳 銅 ...','鋁(ALUMINUM)','純鐵(PURE IRON)','銀(SILVER)','鋼鐵(STEEL)','鋅 鐵 板(SECC,SPGC)','塑膠鋼','角鋼、易削鋼、CRS','不銹鋼','其他(材質不清)','Ni-Fe(鎳鐵合金)'],(v,k)=>{
            return (<option value={k} key={k}> {v} </option>);
    });
     const index_4_7 = _.map([ '陽極處理 本色','電鍍五彩(Y)','染黑(B) 鍍黑鋅(B-Zn)','鍍白鋅(BLUE-Zn)(W)','鍍鎳Ni-3','鍍錫(Sn)','烤漆','鍍銀','鍍金(AU)','鍍鉻(本色)'],(v,k)=>{
            return (<option value={k} key={k}> {v} </option>);
    });
     const index_5 = ({
        index_5_1: ['塑膠粒、色母','普通式BB(COMMON)','分隔式BB(APART)','普通式BB-PCB','分隔式BB-PCB','普通式BB-KSP','分隔式BB-KSP','盒子式BOBBIN','盒子式COVER','抽式BOBBIN','抽式COVER','尼龍套、絕緣墊片','蓋子(網蓋、PT保護蓋)','支架、CHASSIS、CASE、底座、DOOR) 、間隔柱、銘板、腳墊','搖桿、滾子、插梢、輪','電源開關箱、輸入座','夾線槽、束線帶','護線環、固定扣(座)、櫬套、線材標示牌','端子板、補償片','把手、按鈕、開關','內外層式BB-內層P','內外層式BB-外層S','裝飾板、條、框、帶','KEYBOARD OVERLAY','LENS 透鏡','防水塞、滑槽,RING','其他(三通、由任)','雜項BOBBIN','SHEET PVC','MIRROR 鏡子','FORMER 玻璃纖維線軸','DAMPER 緩衝器','毛氈','球網、織布扣合','乒乓球','圍布','水槽'],
        index_5_2:['固定用','稀釋用','硬化促進用','清潔用','塗裝用','散熱用','助焊用','COATING用','乾燥劑、防潮用','捺印用','防水/散熱','填充','營養液','其他'],
     })[`index_${this.state.index_1}_${this.state.index_type}`] || [1];
     const index_5_material = ({
        index_5_1:['ZYTEL NYLON RESIN 101L(N66)','ZYTEL 70G33L,6410G5,6210G6','FR-PET','VALOX THERMOPLASTIC POPLYESTER(DR-48)','LEXAN POLYCARBONATE RESIN (P.C)','NORYL RESIN (N190J-7002)(CFN3J-8007)','POLYCARBONATE MARKOLON NO.6870','PHENLOIC MOLDING POWER (電木)','P.V.C','POLYPHENYLENE SULFIDE (HW 遙桿)','ABS','ACRYLICX, STYRENE-METHYL,METHACRYLATE','POLYDROPYLENE(聚丙烯)','RUBBER,EVA','DURACON(塑膠鋼),POM','其他,P.B.T','FLAME RETARDANT POLYPHENYLENE SHEET FRPP 301-18(FORMEX-18)','NORYL PPHOX SE-100(F),AS','SPONGE(泡棉)','PP2654','MG-0033N','CM3001G-30','GFRP/CFRP','TEFLON','HPS','PC/ABSORBER','VALOX M7002'],
        index_5_2:['凡立水,腊,樹脂','固定劑,熱融膠,膠粉','稀釋劑','硬化促進劑','甲苯,汽油,香蕉水','剝離劑','凡士林,離形劑','隔離劑,靜電劑','潤滑油,防鏽油','油漆,噴漆,烤漆','矽油膏','助焊劑','氣體','防焊劑','MTL CONATHANE','REDUCER(催化劑)','SILICA GEL(乾燥劑)','墨水','碳','牛油','其他']
     })[`index_${this.state.index_1}_${this.state.index_type}`] || ['預設值'];
    const index_6 = ({
              index_6_0_0:[ 'A型CARTON(編號已滿改至012)','B型 UNIT PACK','C型紙箱','UNIT LOAD TUBE','E型 U/D COVER','F型紙箱','G型紙箱','雜項紙箱','腳紙CORNER BOARD','襯板 PLATE BOARD','格板 BLOCK BOARD','方紙管','A型CARTON'],
              index_6_0_1:['平板式','單片模成型','兩片模成型','角狀類','條狀類'],
              index_6_0_2:['A型棧板','B型棧板','C型棧板','雜項棧板','鎖緊板','木條箱','嘜頭示板','其它類'],
              index_6_0_3:['普通式PE袋','加底式PE袋','靜電式PE袋','透明PE布','抗靜電PE布/氣泡帶','耐高溫PE袋','PE氣泡袋','PE發泡袋','PE SHEET','耐高溫PP袋','抗靜電PE氣泡袋','夾鏈帶','黑色抗靜電帶','鋁薄帶','收縮膜帶'],
              index_6_0_4:['PP棕色膠帶','PP透明膠帶','玻璃紙膠帶','GT棕色膠帶','自黏性'],
              index_6_0_5:['白色底貼標','金色底貼標','紅色底貼標','銀色底貼標','黃色底貼標','透明貼標','黑色底貼標','綠色底貼標','彩色底貼標','其他底貼標','白色底貼標(此編號已滿改至011)','白色底貼標'],
              index_6_0_6:['系列號碼貼標','配線貼標'],
              index_6_0_7:['黑底印白字','白底印黑字','黑底白字+白底黑字','白底鋼印','K金色底','烤漆','其它'],
              index_6_0_8:['說明書','警告單','使用手冊','安裝說明書','保證卡','維修卡','標示卡','說明單 修正單'],              
              index_6_0_9:['長方形'],
              index_6_1_0:['鐵皮','鐵扣','PALLET棧板','FRAME 鐵框'],
              index_6_1_1:['pp打包帶'],
              index_6_1_2:['角狀類','','','長方形']
    })[`index_${this.state.index_1}_${this.state.index_2}_${this.state.index_3}`]||['預設值'];


    const index_7 =({
                                    index_7_0_0:['6.3V','10V','15V','16V','20V','25V','35V','40V','50V','100V','125V','660V','700V','','440V','500V','400V','7.5V','30V','450V','200V','250V','150V','300V','630V','1.5KV','1KV','2KV','63V','430V','2KV以上V','60V','75V','160V','1600V','80V','275V','5.5V','1.2KV','16V','350V','','550V','4V','50V','425V','AWF','CER','CHIP','CHIP ARRAY','CHIP CER','P A C','CHIP FILM','CHIP NETWORK','CHIP VAR','CONDUCTIVE POLYMER','DISC CER','ELEC.','ELEC. (BR)','ELEC. (NP)','FILM','MEF/MER','MKP','MKT','MOMO CER','MON CER','MONO','MONO CER','MPE/MPP','MPF','MPR','MPT','MPTE','PEI','PEN','POLTPROPYLENE','PP','PPN','PS','PT','SMD ELEC.','SMD ELEC.(NP)','SMD TAN','TAN','THOR CER','VAR','X1','X1/Y1','X1/Y2','X2','X2 MP','X2 MPE','Y','Y1','Y2','EMI FILTER','DISC CER CAP','DISC MPE','FFB','9PIN'],
                                    index_7_0_1:['0.20W','0.25W','0.50W','1W','2W','6W','20W','50W','5W','3W','25W','0.15W','TSA','10W','0.125W','0.17W','7W','4W','15W','0.1W','TRIMMER','HIGH RANGE V.R','MID RANGE V.R','VR','VR ROTARY','VR SMD','VR TRIMMER ','VR TRIMMER SMD','THERMISTOR','THERMISTOR CHIP NTC','THERMISTOR NTC','THERMISTOR POWER','THERMISTOR PTC','THERMISTOR SMD NTC ','MF RS','RS CEMENT','RS CF','RD CHIP 0402','RD CHIP 0603','RD CHIP 0805','RS CHIP 1206/1210','RD CHIP 2512','RD CHIP other','RD CHIP NETWORK','RS CMF','','RS FCC','RS FCR','RS FUSE','RS HV','RS MF','RS MILLI-OHM','RS MOF','RS NETWORK','RS PF','RS PW','RS THERMAL SENSITIVE','RS WW','ACITOR','RS CMP','','','5PIN','TR IMMER','8PIN','7PIN','2,6PIN','9PIN10PIN','16PIN','THERMISTER','14PIN'],
                                    index_7_0_2:['P','1N','SKR','SKN','MUR','FE','UF','MR','2N','R','','RUR','GZA','GP','MPT','UES','BYW','18','','KBPC','MBR','BZX','RS','S','','A','B','C','D','0','1','2','3','4','5','6','7','8','9','E','F','G','H','I','J','K','L','M','N','O','Q','T','U','V','W','X','Y','Z'],
                                    index_7_0_3:['MC','REF','AN','TL','1N','MA&uA','LC','CANCELL','ICTM','DS&DM','SN','CANCEL LT/LM','ULN','CANCEL M','CANCEL D','CANCEL 74LS','6N','CANCEL 94','COP','ICM','0','1(1N)','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M(MC)','N','O','P','Q','R(\REF)','S','T','U','V','W','X','Y','Z'],
                                    index_7_0_4:['2N&4N','TIP','MPS','MTP','MJE','PN','1RF','A5T','2','MJ','VN','MTM','RFM','J','D','B','Y','C','S','M','T','K','N','F','H','Z','R','U','I','X','L','P','A','G'],
                                    index_7_0_5:['RED','YELLOW','GREEN','AMBER','RED&GREEN','BLUE','ORANGE','YELLOW&GREEN','WHITE','WARM','WHITE','RED/GREEN/BLUE','I.R ','ASS"Y','BUSHING','LOCK'],
                                    index_7_0_6:['V.S','E','R','K','G','J','Z','1','M','S','ST','TI','T','C','V','P','2','H','F','B','3'],
                                    index_7_0_7:['10A','8A','25A','1A'],
                                    index_7_0_8:['P.T','AUDIO','C.V.T','CHOKE','CURRENT','INDUCTOR','PLUSE','FLYBACK','ADAPTOR','WINDING SUB']



      })[`index_${this.state.index_1}_${this.state.index_3}_${this.state.index_4}`] ||['預設值'];

      const index_7_1 = ['CAPACITOR','RESISTOR、THERMISTOR、TRIMMER','DIODE、TVS、SCR、DIAC、TRIAC、RECTIFIER','IC、PHOTO COUPLER','TRANSISTOR','LED','VARISTOR、V.R(VARIABLE)','RECTIFIER (改使用002)','TRANSFORMER、INDUCTOR','IFT','L.C.D','EMI/LC FILTER','OSCILLATOR CRYSTAL','INTER MEDIATE FREQUENCY','其他歸至8089','ABSORBER','SENSOR'];

      const index_8_header = ['TERMINAL(TER.& SCREW ASS’Y)','TERMINAL BLOCK','HOUSING 合 併 用(004)','CONNECTOR 合併用 (004)','CONNECTOR','P.C BOARD','CIRCUIT BREAKER','FUSE','FUSE HOLDER & FUSE CLIP','RELAY','','METER','SWITCH','RECEPTACLES','BANANA CONNECTOR',' ','ELECTRICAL LEAD WIRE','SOLDERING','MICA INSULATOR','GHOST TIE 魔 帶','JUMPER WIRE','TERMINAL BOARD','PIN  TAPE','','WINDING ASS’Y','PVC & LEAD WIRE & TERM. & HOUS. ASS’Y','FLAT CABLE (ASS’Y)','MAGNIFER/FILTER','FAN ( FAN NUT )','TEST POINT','SHIELD WIRE ASS’Y','BATTERY','CONNECTOR-LCD','CONNECTOR-COVER','KEY','TERM. BOARD & LEAD WIRE ASS’Y','電子配件 SUB ( 直接外購)','五金鐵材..組立(直接外購)'];
      const index_8_1 =({

                                    index_8_0_00: ['INSUL.','UNINSUL.','TER. SCREW ASS"Y','PUSH','CHECK','GND'],
                                    index_8_0_01:['4P','1P','2P','3P',' ','5P','6P','7P','8P','9P','10P','整排'],
                                    index_8_0_04:['0P','1P','2P','3P','4P','5P','6P','7P','8P','9P','10P','11P ','12P','13P','14P','15P','16P','17P','18P','以下類推'],
                                    index_8_0_05:['1.6t','2.3t','ass"y','1.0t','1.2t','0.8t','2.4t','3.2t ','0.6t','1.5t','6.3t ','2.0t','0.15t ','1.7t ','1.65t','1.2t'],   
                                    index_8_0_06:['3A','4A','5A','7A','8A','10A','12A','15A','18A','20A','30A','35A','45A','65A','25A','1.5A','7.5A','1.2A','9A','3.5A','4.5A','50A'],
                                    index_8_0_07:['GLASS BODY FUSE'],
                                    index_8_0_08:['FUSE HOLDER','FUSE CLIP','FUSE BLOCK'],
                                    index_8_0_09:['2P','3P','4P','6P','1P','5P','8P','10P', 'REED','RELAY'],
                                    index_8_0_11:['DC','AC'],
                                    index_8_0_12:['WAVE SWITCH ','POWER SWITCH','THERMOSTAT','KEYBOARD SWITCH PUSH BOTTN','DIP-SWITCH(ROTATE/PIANO/ROTARY)','PUSH SWITCH (CAP)','MEMBRANE SWITCH','SLIDE SWITCH','POWER SEE-SAW SWITCH','SELECT SWITCH','TACT SWITCH','ROCKER SWITCH','KEY SWITCH','URGENTS SWITCH','MAGNETIC SWITCH'],
                                    index_8_0_13:['DUPLEX OUTLET','INLET SOCKET','BNC','RELAY SOCKET','IC DIP SOCKET','BANANA SOCKET','EXTEND SOCKET','其他'],
                                    index_8_0_14:['BANANA CONNECTOR',' BATTERY CLIP','BATTERY PLUG'],
                                    index_8_0_16:['BLACK','GRAY','WHITE'],
                                    index_8_0_17:['SOLDER BAR','SOLDER WIRE','SOLDER PASTE'],
                                    index_8_0_18:['0.15t','0.20t'],
                                    index_8_0_19:['00'],
                                    index_8_0_20:['0.8mm','0.6mm','1.0mm','2.2mm','1.6mm','其他'],
                                    index_8_0_21:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_8_0_22:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_8_0_23:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_8_0_24:['....','EI-28','EI-35','EI-41','EI-48','EI-54','EI-60','EI-66','EI-76','EI-57'],
                                    index_8_0_25:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_8_0_26:['10PIN','14PIN','16PIN','20PIN','26PIN','34PIN','40PIN','以此類推'],
                                    index_8_0_27:['....', '1P','2P','3P','4P','5P','6P','以此類推'],
                                    index_8_0_33:['....', '1P','2P','3P','4P','5P','6P','以此類推'],


      })[`index_${this.state.index_1}_${this.state.index_2}_${this.state.index_3}${this.state.index_4}`] ||['預設值'];

    const index_92_2 = [ '0,1,2,3','4,5,6,7','8,9,A,B','C,D,E,F','G,H,I,J','K,L,M,N','O,P,Q,R','S,T,U,V','W,X,Y,Z'];
    const index_92_4 =['預設值','矽鋼片_條料'];
    const index_92_5 =['預設值','鐵芯(沖製品及未燒炖N品)'];
    const index_92_6 =['預設值','鐵芯(沖製品及燒炖N品)'];
    const index_92_III = ['預設值','CHRONOIII & PLR 機種'];
    const index_92_8 =['220491', '220583', '220596', '220593', '221008', '220538', '220595', '220597', '220598', '220926', '221086', '221149', '220584', '221009', '221010', '480-1500', '203509', '203578', '206197', '206307', '206308', '206320','SPS7243-100A', '32001207', '32001205', '32001236', '32001234', '32001230', '32001202', '32001203', '209171', '32001206', '32001235', '32001231', '32001212', '32001233', '3200T85L', '32001204', '32001241', '32001232', '32001237', '32001209', '32001243', '32001240', '32001212', '32001213', '32001214', '32001238','32001210', '32001242', '32001218', '32001245', '32001222', '32001250', '32003143', '32003222', '32003490', '32003321', '32006119/207001MICRO', '207000MICRO', '32005733','32005552', '32005992', '32005995', '32005555', '32005996', '50001219', '50003825'];
    const index_90_1 =['預設值','POWER SUPPLY 電源供應器','TRANSFORMER 變壓器','PCB ASS’Y 電路板','PROGRAMMABLE THERMOSTAT 可程式溫度控制器','COIL 線圈','BATTERY CHARGER 充電器','ELECTRICAL MAGNET 電磁鐵','Rework Serial','ADAPTOR 整流器','A.V.R. 穩壓器','U.P.S. 不斷電電源供應器','NUCLEAR MAGNETIC RESONANCE 磁化核電子共振儀及零組件','MICROSCOPY 顯微鏡','AUDIO 視聽器材','CONTROLLER 控制器','THREE DIMENSION GLASSES 三度空間眼鏡','DSL SPLITTER/FILTER  濾波器','ELECTRONICS BALLAST 電子式安定器','其他產品','RADIO RECEIVERS 接收機 呼叫器','MACHINE 縫紉機','代工','EXIT DIRECTION LIGHT 出口標示燈','MP3 MODULE MP3播放模組','DIGITAL PHOTO DISPLAY 數位相框','WIRELESS DISPLAY 無線液晶顯示器','S.S CORE 矽鋼'];
    const index_90_2 = ({
                                    index_90_01:['預設值','SWITCHING','LINEAR','FERRO RESONANT','AC SOURCE','PLUG-IN','COOVERTER','INVERTER'],
                                    index_90_02:['預設值','POWER','AUDIO','C.V.T.','CHOKE','CURRENT ','INDUCTOR ','PULSE','FLYBACK'],
                                    index_90_03:['預設值','POWER','CONTROL','TRANSMISSION','LOG','ANALOG','AUDIO','其他'],
                                    index_90_04:['預設值','統ㄧ編於此'],
                                    index_90_08:['預設值','COMPUTER'],
                                    index_90_09:['預設值','AC/DC','AC/AC'],
                                    index_90_12:['預設值','組立完成品','零件'],
                                    index_90_23:['預設值','緊急ＥＸ','避難EB']  


    })[`index_${this.state.index_1}${this.state.index_2}_${this.state.index_3}${this.state.index_4}`]||['預設值'];




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
            if (v == '流水編號(1碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} name="one_number" onChange={this.onChange_number} maxLength="1" min="0" max="9"/> </div>);
            }
            if (v == '流水編號(2碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" name="two_number"  key={k} maxLength="2" min="0" max="99" onChange={this.onChange_number} /> </div>);
            }if (v == '流水編號(3碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" name="three_number" onChange={this.onChange_number} key={k} maxLength="3" min="0" max="999"/> </div>);
            }if (v == '流水編號(4碼)' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" name="four_number" key={k} maxLength="4" min="0" onChange={this.onChange_number} max="9999"/> </div>);
            }
            if (v == '號數' ) {
                   return (<div key={k}><label> {v} </label> <input name="index_1_number" onChange={this.onChange} type="number" min="1" max="99" key={k}/> </div>);
            }
            if (v == '檢查號' ) {
                   return (<div key={k}><label> {v} </label> <input type="number" key={k} value="0" min="0" max="9"/> </div>);
            }if(v == '種類' ){
              return (<div>{v} <select name="index_2" id="" onChange={this.onChange} className={style.select} key={k}> {index_c_index} </select> </div>);
            }if(v == '工程別' ){
              return (<div>{v} <select name="index_92_1" id="" onChange={this.onChange_index_92} key={k}> {index_c_index} </select> </div>);
            }if(v == '顏色(2碼)' ){
              return (<div className={style.select}>{v} <select name="index_1_color" id=""  onChange={this.onChange} key={k}  > {color_2_index} </select> </div>);
            }if(v == '顏色(1碼)' ){
              return (<div>{v} <select name="index_2_color" id="" onChange={this.onChange} key={k}> {color_1_index} </select> </div>);
            }if(v == '線徑' ){
              return (<div><label> {v} </label> <input name="wire_thin_4" type="number" min="1" max="9999" maxLength="4" onChange={this.onChange} key={k}/></div>);
            }if(v == '鐵芯長'){
              return (<div><label> {v} </label> <input name="index_4_1_456" type="number" min="1" max="999" maxLength="3" onChange={this.onChange_index_4} key={k}/></div>);
            }



            if(v == '緣厚度與種類' ){
              return (<div><label> {v} </label> <select name="index_2_thin" id="" onChange={this.onChange}> {width_2_index} </select></div>);
            }if(v == '型態' ){
              return (<div><label> {v} </label> <select onChange={this.onChange} name="index_3_4" id=""> {_.map( ['整卷','整卷沖孔','切斷','切斷衝製'],(v,k)=>{ return (<option value={k} key={k}>{v}</option>)})} </select></div>);
            }if(v == '厚度或直徑' ){
              return (<div><label> {v} <select name="index_3_title" onChange={this.onChange} ><option value="0">厚度(適用膠帶,綠板,綠紙)</option><option value="1">直徑(適用套管)</option> </select>  </label>

                <div> <select name="index_3_56" id="" onChange={this.onChange}> {index_3_56_head}</select></div>
                </div>);
            }if(v == '規格(4)'){
               return (<div> <label> {v} </label> <select name="index_4_45" id="" onChange={this.onChange_index_4}> {index_4_1_456_header} </select> </div>);
            }if(v == '材質'){
             return (<div>{v} <select name="index_4_6" id="" onChange={this.onChange_index_4} key={k}>{index_4_6} </select> </div>);
            }if(v == '處理'){
             return (<div>{v} <select name="index_4_7" id="" onChange={this.onChange_index_4} key={k}>{index_4_7} </select> </div>);
            } if (v == '鐵芯(素材)') {
            return (<div>{v} <select name="index_464" id="" onChange={this.onChange_index_4} key={k}>  <option value="00"> 選擇 </option>  <option value="64"> 鐵芯(預設值:64) </option></select> </div>);

            }if (v == '鐵芯(裁切條料)') {
            return (<div>{v} <select name="index_465" id="" onChange={this.onChange_index_4} key={k}>  <option value="00" > 選擇 </option>  <option value="65"> 鐵芯(預設值:65) </option></select> </div>);

            }



            if (v == '矽鋼板(素材)厚度') {
            return (<div>{v}<input name="index_4_3" type="number" min="1" max="999" maxLength="3" onChange={this.onChange_index_4} key={k}/> </div>);
            }if (v == '矽鋼板(裁切條料)厚度') {

            return (<div>{v}<input name="index_4_4" type="number" min="1" max="9" maxLength="2" onChange={this.onChange_index_4} key={k}/> </div>);
            }
            
            if (v == '矽鋼片材質') {
            // return (<div>{v} <select name="index_4_4_material" id="" onChange={this.onChange_index_4} key={k}>{index_4_6} </select> </div>);
              return ( <Select options={index_4_6_header} processes={v} name="index_4_4_material" onChange={this.onChange_index_4} />);
            }
            if (v == '種類[塑膠化學]') {

            return (<Select options={index_5} processes={v} name="index_5_1" onChange={this.onChange_index_5} />);
            }
            if(v == '材質[塑膠化學]'){
              return (<Select options={index_5_material} processes={v} name="index_5_material" onChange={this.onChange_index_5} />);
            }if(v == '包材型式'){
              return (<Select options={index_6} processes={v} name="index_6" onChange={this.onChange_index_6} />);
            }if(v == '電子元件材質'){
              return (<Select options={index_7} processes={v} name="index_7" onChange={this.onChange_index_7} />);
            }if(v == '電子種類'){
              return (<Select options={index_7_1} processes={v} name="index_7_1" onChange={this.onChange_index_7} />);
            }if(v == '電子配件種類'){
              return (<Select options={index_8_header} processes={v} name="index_8_1" onChange={this.onChange_index_8} />);
            }

            if (v == '電子配件規格') {
              return (<Select options={index_8_1} processes={v} name="index_8_2" onChange={this.onChange_index_8} />);
            }if(v == '機種簡稱' ){
              return (<Select options={index_92_2} processes={v} name="index_92_2" onChange={this.onChange_index_92} />);

            }if(v == '機種簡稱' ){
              return (<Select options={index_92_2} processes={v} name="index_92_2" onChange={this.onChange_index_92} />);

            }if(v == '條料寬度'){
              return (<div><label> {v} </label> <input name="index_92_3" type="number" min="1" max="999" maxLength="3" onChange={this.onChange_index_92} key={k} /></div>);
            }if(v == '矽鋼片(條料)'){
              return (<Select options={index_92_4} processes={v} name="index_92_4" onChange={this.onChange_index_92} />);
            }if(v == '鐵芯(沖製品及未燒炖N品)'){
              return (<Select options={index_92_5} processes={v} name="index_92_5" onChange={this.onChange_index_92} />);
            }if(v == 'EI鐵芯(沖製品及燒炖A品)'){
              return (<Select options={index_92_6} processes={v} name="index_92_6" onChange={this.onChange_index_92} />);
            }if(v == '(92)鐵芯長'){
              return (<div><label> {v} </label> <input name="index_92_7" type="number" min="1" max="999" maxLength="3" onChange={this.onChange_index_92} key={k} /></div>);
            }if(v == 'CHRONOIII類別'){
              return (<Select options={index_92_8} processes={v} name="index_92_8" onChange={this.onChange_index_92} />);
            }if(v == 'CHRONOIII'){
              return (<Select options={index_92_III} processes={v} name="index_92_9" onChange={this.onChange_index_92} />);
            }if(v == '成品類別'){
              return (<Select options={index_90_1} processes={v} name="index_90_1" onChange={this.onChange_index_90} />);
            }if(v == '成品型式'){
              return (<Select options={index_90_2} processes={v} name="index_90_2" onChange={this.onChange_index_90} />);
            }





            else{

                    return (<div><label style={{"textAlign":"center"}}> {v} </label><select name="" id="" onChange={this.onChange}>  {material_header}  </select> </div> );
              }
            });




    
    return (
      <div>
        <div >
         <Link to="/"> <i className="fa fa-arrow-left fa-3x" /> &nbsp; <i className="fa fa-home fa-3x" aria-hidden="true"></i> </Link>   

         <label className={style.label_1}> 材料編號準則 </label> 
          
        </div>

        <div className={style.div_left}>
          
          {material_header_li}
        

        </div>
         <div className={style.div_right}>

          <div> 

          

           <div className={style.material_header}>  {material_header_show} &nbsp; &nbsp; 
            
           
           <select name="index_type" id="" onChange={this.onChange} className={style.select} > {index_type_index}</select>
           </div> 
          </div>

          <div>
            
              {map_index}
            
            
          </div>
         
          
          <button className={style.btn_save} onClick={this.read.bind(this)}> Read </button>
          <button className={style.btn_save} onClick={this.local}> 點擊取得[.xlsx]</button>
          <button className={style.btn_save} onClick={this.save}> Save </button>
        {this.state.index_1}{this.state.index_2}{this.state.index_3}{this.state.index_4}{this.state.index_5}{this.state.index_6}{this.state.index_7}{this.state.index_8}{this.state.index_9}{this.state.index_0}
      
        <div className={style.foot_tip}> 
          <label> 編料提示: </label> 
          <Tip content={this.state.index_1.toString()+this.state.index_2.toString()} />

        </div>
      </div>
      
      </div>

    );
  }
}


