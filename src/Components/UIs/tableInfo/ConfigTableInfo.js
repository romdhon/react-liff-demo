import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    height: '40vh'
  }
}));

export default class ConfigTableInfo {
  constructor() {
    this.rows = [
      {
        id: 1,
        lineName: 'someone1',
        email: 'someone1@gmail.com',
        lineId: 'someone1'
      },
      {
        id: 2,
        lineName: 'someone2',
        email: 'someone2@gmail.com',
        lineId: 'someone2'
      },
      {
        id: 3,
        lineName: 'someone3',
        email: 'someone3@gmail.com',
        lineId: 'someone3'
      },
      {
        id: 4,
        lineName: 'someone4',
        email: 'someone4@gmail.com',
        lineId: 'someone4'
      }
    ];
    this.columns = [
      { field: 'Id' },
      { field: 'Line Name' },
      { field: 'Email' },
      { field: 'Line ID' }
    ];
  }
}
