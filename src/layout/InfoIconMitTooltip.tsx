import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import React, {ReactNode} from 'react';
import {FaInfoCircle} from 'react-icons/fa';
import styled from 'styled-components';
import {Placement} from 'react-bootstrap/types';

export interface Props {
  /**
   * HTML-ID des Info-Icons
   */
  id?: string;

  /**
   * Position des Overlays, default: rechts vom Icon
   */
  placement?: Placement;

  /**
   * Text im Tooltip
   */
  text: string | ReactNode;

  /**
   * Größe des Icons
   */
  size?: string;
}

export default (props: Props) => {
  return (
    <OverlayTrigger placement={props.placement || 'right'} overlay={<Tooltip className='tooltip-info'>{props.text}</Tooltip>}>
      <i className='text-muted' id={props.id || ''}>
        <StyledFaInfoCircle size={props.size || '1.1em'} />
      </i>
    </OverlayTrigger>
  );
};

const StyledFaInfoCircle = styled(FaInfoCircle)`
  vertical-align: middle;
  margin-left: 3px;
  margin-bottom: 3px;
`;
