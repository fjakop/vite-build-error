import React from 'react';
import styled from 'styled-components';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast--error {
    background-color: #bd362f;
  }

  .Toastify__toast--warning {
    background-color: #f89406;
  }

  .Toastify__toast--success {
    background-color: #51a351;
  }
`;

/**
 * Container für Toaster-Meldungen. Zur tatsächlichen Anzeige werden die Funktionen aus ClientMessage benötigt.
 */
const ClientMessage: React.FC = () => {
  return <StyledToastContainer newestOnTop />;
};

export default ClientMessage;
