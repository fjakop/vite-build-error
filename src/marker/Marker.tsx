import React from 'react';
import styled from 'styled-components';
import {Highlighter} from 'react-bootstrap-typeahead';
import {HighlighterProps} from 'react-bootstrap-typeahead/types/components/Highlighter';

const HighlightedDiv = styled.div`
  display: inline;
  & > mark {
    padding: 0;
  }
`;

export interface MarkerProps extends Omit<HighlighterProps, 'highlightClassName'> {}

/**
 * Ein Highlighter, der kein Padding um den hervorgehobenen Text erzeugt und immer mit der Farbe aus "--bs-highlight-bg"
 * hervorhebt.
 * @param props
 * @constructor
 */
const Marker = (props: MarkerProps) => {
  return (
    <HighlightedDiv>
      <Highlighter {...props} />
    </HighlightedDiv>
  );
};

export default Marker;
