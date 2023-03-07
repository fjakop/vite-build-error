import React from 'react';
import Marker from './Marker';

const MarkerMenuItem = ({searchText, label, details}: {searchText: string; label: string; details?: string}) => {
  return (
    <>
      <Marker search={searchText}>{label}</Marker>
      {details && (
        <div>
          <small>
            <Marker search={searchText}>{details}</Marker>
          </small>
        </div>
      )}
    </>
  );
};
export default MarkerMenuItem;
