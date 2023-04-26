import React, {ReactNode} from 'react';
import {InfoIconMitTooltip} from './index';

const FormField = ({label, tooltip, formControl}: {label: string; tooltip?: string | ReactNode; formControl: ReactNode}) => {
    return (
      <div className='p-2'>
          <small className='text-muted text-nowrap'>{label}</small>
          {tooltip && <InfoIconMitTooltip text={tooltip} />}
          {formControl}
      </div>
    );
};
export default FormField;