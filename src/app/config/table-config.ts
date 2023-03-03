import {
  MyHeaders,
  MyOrder,
  MyPagination,
  MySearch,
  MyTableAction,
  MyTableActionsEnum,
  MyTableConfig
} from "../table/table.component";
import {
  addButtonConfig,
  deleteButtonConfig,
  editButtonConfig,
  viewResButtonConfig
} from "../button/config/button-config";

export const usersTableConfig: MyTableConfig = {
  headers: [
    new MyHeaders('Nome', 'name'),
    new MyHeaders('Cognome', 'surname'),
  ],
  search: new MySearch(['name', 'surname']),
  actions: [
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.VIEW_RES, viewResButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ],
  pagination: new MyPagination(20, [10, 20, 50]),
  order: new MyOrder('name', 'desc'),
  topAction:[
    new MyTableAction(MyTableActionsEnum.NEW_ROW, addButtonConfig)
  ]
}

export const carsTableConfig: MyTableConfig = {
  headers: [
    new MyHeaders('Marca', 'marca'),
    new MyHeaders('Modello', 'modello'),
    new MyHeaders('Anno', 'anno'),
    new MyHeaders('Prezzo', 'prezzo'),
    new MyHeaders('Targa', 'targa'),
  ],
  search: new MySearch(['marca', 'modello', 'anno', 'prezzo', 'targa']),
  actions: [
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ],
  pagination: new MyPagination(20, [10, 20, 50]),
  order: new MyOrder('marca', 'desc'),
  topAction:[
    new MyTableAction(MyTableActionsEnum.NEW_ROW, addButtonConfig)
  ]
}

export const reservationsTableConfig: MyTableConfig = {
  headers: [
    new MyHeaders('Data Inizio', 'data_inizio'),
    new MyHeaders('Data Fine', 'data_fine'),
    new MyHeaders('Confermata', 'confermata'),
    new MyHeaders('Auto', 'id_auto')
  ],
  search: new MySearch(['data_inizio', 'data_fine', 'id_auto']),
  actions: [
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ],
  pagination: new MyPagination(10, [3, 5, 10]),
  order: new MyOrder('id_auto', 'desc'),
  topAction:[
    new MyTableAction(MyTableActionsEnum.NEW_ROW, addButtonConfig)
  ]
}
