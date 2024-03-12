import React from 'react';
import {render, waitFor, screen} from '@testing-library/react';
import ClientMessage from './ClientMessage';
import {showErrorMessage, showSuccessMessage, showWarningMessage} from './service/clientMessageService';

describe('ClientMessage', () => {
  it('renders as expected', async () => {
    const elem = (
      <ClientMessage />
    );
    render(elem);

    showWarningMessage('Warnung!');
    await waitFor(() => {
      screen.getByText('Warnung!');
    });

    showSuccessMessage('Erfolgreich!');
    await waitFor(() => {
      screen.getByText('Erfolgreich!');
    });

    showErrorMessage('Fehlermeldung!');
    await waitFor(() => {
      screen.getByText('Fehlermeldung!');
    });
  });
});
