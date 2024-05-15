import {ReactElement} from 'react';
import {FormControl} from 'react-bootstrap';
import {UsePaginationInstanceProps, UseRowSelectInstanceProps} from 'react-table';
export interface Props<RowDataType extends {}> {
  tableInstance: UseRowSelectInstanceProps<RowDataType> & UsePaginationInstanceProps<RowDataType>;
  pending: boolean;
}

const RowSelectHeader = <RowDataType extends {}>({tableInstance, pending}: Props<RowDataType>): ReactElement<Props<RowDataType>> => {
  return (
    <FormControl
      disabled={pending}
      data-testid='row-select-header'
      as='select'
      size='sm'
      value={''}
      onInput={e => {
        if (e.currentTarget.value === 'all') {
          tableInstance.toggleAllRowsSelected(true);
        }
        if (e.currentTarget.value === 'currentPage') {
          tableInstance.page.forEach(row => tableInstance.toggleRowSelected(row.id, true));
        }
        if (e.currentTarget.value === 'nothing') {
          tableInstance.toggleAllRowsSelected(false);
        }
      }}
    >
      {[
        {value: '', key: 'Auswahl...'},
        {value: 'all', key: 'Alles'},
        {value: 'currentPage', key: 'Aktuelle Seite'},
        {value: 'nothing', key: 'Keine'},
      ].map(option => (
        <option data-testid={'row-select-header-option-' + option.value} {...option}>
          {option.key}
        </option>
      ))}
    </FormControl>
  );
};
export default RowSelectHeader;
