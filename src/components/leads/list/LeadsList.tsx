import LeadsListItem from './LeadsListItem';
import { Alert } from '@mui/material';
import { Card } from '@mui/material';
import {LeadI} from '../../../core/interfaces/lead.interface';
import LeadsApi from '../../../core/api/mock/LeadsApi';
function LeadsList() {

let leadsList:Array<LeadI> = LeadsApi.getAll();


  const dataLength = (leadsList) ? leadsList.length : 0;

  return (
  <>
  <Card variant="outlined">
    {dataLength > 0 ? (


    leadsList.map((lead: LeadI) => (
    <LeadsListItem lead={lead} />
    ))


    ) : (
    <Alert variant="filled" severity="info">No se encontraron resultados — Realiza nueva búsqueda!</Alert>

    )}
</Card>
  </>
  );
  }

  export default LeadsList;