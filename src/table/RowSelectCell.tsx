import {ReactElement} from 'react';
import {UseRowSelectRowProps} from 'react-table';
import {Form} from 'react-bootstrap';

export interface Props<RowDataType extends {}> {
  row: UseRowSelectRowProps<RowDataType>;
  pending: boolean;
}

const RowSelectCell = <RowDataType extends {}>({row, pending}: Props<RowDataType>): ReactElement<Props<RowDataType>> => {
  const {indeterminate, ...rest} = row.getToggleRowSelectedProps();
  // alle Props außer indeterminate können direkt durchgereicht werden
  return <Form.Switch {...rest} disabled={pending} />;
};
export default RowSelectCell;
