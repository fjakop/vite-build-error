import {FaQuestionCircle} from 'react-icons/fa';
import {ReactNode} from 'react';

const InfoPanel = ({message, details}: {message: string; details?: string | ReactNode}) => {
  return (
    <div className='d-flex m-2'>
      <i>
        <FaQuestionCircle className='text-info me-2 mb-1' size={'1.1em'} />
      </i>
      <div>
        <strong>{message}</strong>
        {details && <div>{details}</div>}
      </div>
    </div>
  );
};

export default InfoPanel;
