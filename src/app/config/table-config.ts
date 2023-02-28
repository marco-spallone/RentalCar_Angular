import {MyHeaders, MySearch, MyTableAction, MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {deleteButtonConfig, editButtonConfig, viewResButtonConfig} from "../button/config/button-config";

export const usersTableConfig: MyTableConfig = {
  headers: [
    new MyHeaders('Nome', 'name'),
    new MyHeaders('Cognome', 'surname'),
  ],
  search:new MySearch(['name', 'surname']),
  addHeaders:Array(3).fill(0).map((x,i)=>i),
  actions:[
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.VIEW_RES, viewResButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ]
}

export const carsTableConfig: MyTableConfig ={
  headers: [
    new MyHeaders('Marca', 'marca'),
    new MyHeaders('Modello', 'modello'),
    new MyHeaders('Anno', 'anno'),
    new MyHeaders('Prezzo', 'prezzo'),
    new MyHeaders('Targa', 'targa'),
  ],
  search:new MySearch(['marca', 'modello', 'anno', 'prezzo', 'targa']),
  addHeaders:Array(2).fill(0).map((x,i)=>i),
  actions:[
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ]
}
