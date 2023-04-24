import React from 'react';
import {describe, it, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import WorkloadPanel from './WorkloadPanel';

describe('WorkloadPanel', () => {
    it('renders expected components for valid state', () => {
        const onEndEditMock = vi.fn();
        render(<WorkloadPanel title={'title'} subTitle={'subTitle'} pending={false} onEndEdit={onEndEditMock} formElements={<div data-testid='test-workload-panel-content'>some content</div>}/>);

        expect(screen.getByTestId('main-header-content')).toBeInTheDocument();
        expect(screen.getByTestId('user-task-navigation-row')).toBeInTheDocument();
        expect(screen.getByTestId('test-workload-panel-content')).toBeInTheDocument();
        expect(screen.queryByTestId('cancel-button-workload-panel')).toBeFalsy();

    });

    it('renders expected components for error state', () => {
        const onEndEditMock = vi.fn();
        render(<WorkloadPanel title={'title'} subTitle={'subTitle'} pending={false} onEndEdit={onEndEditMock} error={'some error message'}/>);

        expect(screen.getByTestId('main-header-content')).toBeInTheDocument();
        expect(screen.queryByTestId('user-task-navigation-row')).toBeFalsy();
        expect(screen.queryByTestId('test-workload-panel-content')).toBeFalsy();
        expect(screen.getByTestId('cancel-button-workload-panel')).toBeInTheDocument();

    });
});