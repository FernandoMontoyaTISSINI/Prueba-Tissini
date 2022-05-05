import {LeadI} from '../../interfaces/lead.interface';


class leadsApi {

private static leadsList:Array<LeadI> = [
  {
  _id:57457,
  firstname: "Alejandra",
  lastname: "Palacios Hernandez",
  },
  {
  _id:57457,
  firstname: "Alejandra",
  lastname: "Palacios Hernandez",
  },
  {
  _id:57457,
  firstname: "Alejandra",
  lastname: "Palacios Hernandez",
  },
  {
  _id:57457,
  firstname: "Alen ",
  lastname: "Rojas Perez",
  },
  {
  _id:57457,
  firstname: "Alba ",
  lastname: "Mercado Lucero",
  }
  ];
  constructor() {
  }

  static getAll(){
     return this.leadsList;
  }
  static findById(_id:any) : LeadI | undefined{
  return this.leadsList.find(item => item._id == _id);
  }

  }
  export default leadsApi;