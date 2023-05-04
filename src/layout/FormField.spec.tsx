import React from 'react';
import {describe, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import FormField from './FormField';
describe('FormField', () => {
    it('renders expected components', () => {
        render(<FormField label={'test-label'} formControl={<div>some form control</div>}/>);
        expect(screen.getByText('test-label')).toBeInTheDocument();
        expect(screen.getByText('some form control')).toBeInTheDocument();
    });
});