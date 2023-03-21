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
  addButtonConfig, approveReservation, declineReservation,
  deleteButtonConfig,
  editButtonConfig,
  viewResButtonConfig
} from "./button-config";

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

export const carsTableConfigForAdmin: MyTableConfig = {
  headers: [
    new MyHeaders('Marca', 'brand'),
    new MyHeaders('Modello', 'model'),
    new MyHeaders('Anno', 'year'),
    new MyHeaders('Prezzo', 'price'),
    new MyHeaders('Targa', 'plate'),
  ],
  search: new MySearch(['brand', 'model', 'year', 'price', 'plate']),
  actions: [
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ],
  pagination: new MyPagination(20, [10, 20, 50]),
  order: new MyOrder('brand', 'desc'),
  topAction:[
    new MyTableAction(MyTableActionsEnum.NEW_ROW, addButtonConfig)
  ]
}

export const carsTableConfigForCustomer: MyTableConfig = {
  headers: [
    new MyHeaders('Marca', 'brand'),
    new MyHeaders('Modello', 'model'),
    new MyHeaders('Anno', 'year'),
    new MyHeaders('Prezzo', 'price'),
    new MyHeaders('Targa', 'plate'),
  ],
  search: new MySearch(['brand', 'model', 'year', 'price', 'plate']),
  actions: [],
  pagination: new MyPagination(20, [10, 20, 50]),
  order: new MyOrder('brand', 'desc'),
  topAction:[]
}

export const reservationsTableConfigForAdmin: MyTableConfig = {
  headers: [
    new MyHeaders('Data Inizio', 'startDate'),
    new MyHeaders('Data Fine', 'endDate'),
    new MyHeaders('Confermata', 'confirmed'),
    new MyHeaders('Auto', 'carId')
  ],
  search: new MySearch(['data_inizio', 'data_fine', 'id_auto']),
  actions: [
    new MyTableAction(MyTableActionsEnum.APPROVE, approveReservation),
    new MyTableAction(MyTableActionsEnum.DECLINE, declineReservation)
  ],
  pagination: new MyPagination(10, [3, 5, 10]),
  order: new MyOrder('carId', 'desc'),
  topAction:[]
}

export const reservationsTableConfigForCustomer: MyTableConfig = {
  headers: [
    new MyHeaders('Data Inizio', 'startDate'),
    new MyHeaders('Data Fine', 'endDate'),
    new MyHeaders('Confermata', 'confirmed'),
    new MyHeaders('Auto', 'carId')
  ],
  search: new MySearch(['startDate', 'endDate', 'carId']),
  actions: [
    new MyTableAction(MyTableActionsEnum.EDIT, editButtonConfig),
    new MyTableAction(MyTableActionsEnum.DELETE, deleteButtonConfig)
  ],
  pagination: new MyPagination(10, [3, 5, 10]),
  order: new MyOrder('carId', 'desc'),
  topAction:[
    new MyTableAction(MyTableActionsEnum.NEW_ROW, addButtonConfig)
  ]
}
