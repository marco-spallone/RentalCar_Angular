import {MyHeaders, MySearch, MyTableConfig} from "../table/table.component";

export const usersTableConfig: MyTableConfig = {
  whichTable:'users',
  headers: [
    new MyHeaders('Nome', 'name'),
    new MyHeaders('Cognome', 'surname'),
  ],
  search:new MySearch(['name', 'surname'])
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
  search:new MySearch(['marca', 'modello', 'anno', 'prezzo', 'targa'])
}
