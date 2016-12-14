import {BOM_IMPORT_EXCEL,BOM_ADD_DWN} from '../actions/bom';
export default function counter(state= [], action: Object) {
  switch (action.type) {
    case BOM_IMPORT_EXCEL:
      return [...state,{bom:action.bom}];
    case BOM_ADD_DWN:
      return state - 1;
    default:
      return state;
  }
}
