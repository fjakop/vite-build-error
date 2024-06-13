import {useMemo} from 'react';
import {formatDateAndTime} from './index';

const ISODateTimeDisplay = ({isoDateTimeString, displayValueForUndefined = ''}:{isoDateTimeString: string | undefined, displayValueForUndefined?: string}) => {
  const localizedDateTimeString = useMemo(() => {
    if(isoDateTimeString){
      return formatDateAndTime(new Date(isoDateTimeString));
    }
    return displayValueForUndefined ?? '';
  }, [displayValueForUndefined, isoDateTimeString]);

  return <span className='text-nowrap'>{localizedDateTimeString}</span>
}

export default ISODateTimeDisplay;