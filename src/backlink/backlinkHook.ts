import {useEffect} from 'react';
import {SetURLSearchParams} from 'react-router-dom';

const setBacklink = (id: string, backlink: string) => {
  sessionStorage.setItem('backlink-' + id, backlink);
};

const getBacklink = (id: string) => {
  return sessionStorage.getItem('backlink-' + id) ?? undefined;
};

export interface BacklinkProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  /** ID des Backlink-Parameters im Session Storage */
  id: string;
}

/**
 * Ein Rücksprung-Link auf eine URL. Wenn in der aufgerufenen URL im Fragment ein Parameter 'backlink' vorhanden ist,
 * wird der Wert des Parameters im Session Storage abgelegt und ein Button mit diesem Ziel erzeugt.
 */
const useBacklink = (props: BacklinkProps) => {
  const backlinkParam = 'backlink';

  const backlinkFromSearchParams = props.searchParams.get(backlinkParam) ?? undefined;
  if (backlinkFromSearchParams) {
    setBacklink(props.id, backlinkFromSearchParams);
  }
  const backlink = getBacklink(props.id);

  useEffect(() => {
    if (backlinkFromSearchParams) {
      props.searchParams.delete(backlinkParam);
      props.setSearchParams(props.searchParams);
    }
  }, [backlinkFromSearchParams, backlink, props]);

  return backlink;
};

export default useBacklink;
