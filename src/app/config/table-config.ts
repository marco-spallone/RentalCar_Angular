import {MyHeaders, MySearch, MyTableConfig} from "../users/users.component";

export const usersTableConfig: MyTableConfig = {
  headers: [
    new MyHeaders('Nome', 'name'),
    new MyHeaders('Cognome', 'surname'),
  ],
  search:new MySearch(['name', 'surname'])
}

export const carsTableConfig: MyTableConfig ={
  headers: [
    new MyHeaders('Marca', 'marca'),
    new MyHeaders('Modello', 'modello'),
    new MyHeaders('Anno', 'anno'),
    new MyHeaders('Prezzo', 'prezzo'),
    new MyHeaders('Targa', 'targa'),
  ],
  search:new MySearch(['marca', 'modello', 'anno', 'prezzo', 'targa'])
}
