import {MyHeaders, MySearch, MyTableActionsEnum, MyTableConfig} from "../table/table.component";

export const usersTableConfig: MyTableConfig = {
  whichTable:'users',
  headers: [
    new MyHeaders('Nome', 'name'),
    new MyHeaders('Cognome', 'surname'),
  ],
  search:new MySearch(['name', 'surname']),
  addHeaders:Array(3).fill(0).map((x,i)=>i),
  actions:[MyTableActionsEnum.NEW_ROW, MyTableActionsEnum.EDIT, MyTableActionsEnum.DELETE]
}

export const carsTableConfig: MyTableConfig ={
  whichTable:'cars',
  headers: [
    new MyHeaders('Marca', 'marca'),
    new MyHeaders('Modello', 'modello'),
    new MyHeaders('Anno', 'anno'),
    new MyHeaders('Prezzo', 'prezzo'),
    new MyHeaders('Targa', 'targa'),
  ],
  search:new MySearch(['marca', 'modello', 'anno', 'prezzo', 'targa']),
  addHeaders:Array(2).fill(0).map((x,i)=>i),
  actions:[MyTableActionsEnum.NEW_ROW, MyTableActionsEnum.EDIT, MyTableActionsEnum.DELETE]
}
