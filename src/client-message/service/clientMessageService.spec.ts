import {Flip, toast, ToastOptions} from 'react-toastify';
import {clientMessageService, errorOptionsDefault, successOptionsDefault, warningOptionsDefault, withOptions} from './clientMessageService';

vi.mock('react-toastify');

describe('clientMessageService', () => {
  it('uses default values when no options passed', () => {
    withOptions().showSuccessMessage('msg');
    expect(toast.success).toHaveBeenCalledWith('msg', successOptionsDefault);

    withOptions().showWarningMessage('msg');
    expect(toast.warn).toHaveBeenCalledWith('msg', warningOptionsDefault);

    withOptions().showErrorMessage('msg');
    expect(toast.error).toHaveBeenCalledWith('msg', errorOptionsDefault);
  });

  it('decorates with options', () => {
    const opts1 = {autoClose: 1};
    const opts2 = {autoClose: 2};
    const opts3 = {autoClose: 3};

    withOptions(opts1).showSuccessMessage('msg');
    expect(toast.success).toHaveBeenCalledWith('msg', {...successOptionsDefault, ...opts1});

    withOptions(opts1, opts2).showWarningMessage('msg');
    expect(toast.warn).toHaveBeenCalledWith('msg', {...warningOptionsDefault, ...opts2});

    withOptions(opts1, opts2, opts3).showErrorMessage('msg');
    expect(toast.error).toHaveBeenCalledWith('msg', {...errorOptionsDefault, ...opts3});
  });

  it('has correct default options', () => {
    const baseOptions: ToastOptions = {
      position: 'bottom-right',
      hideProgressBar: false,
      closeOnClick: false,
      draggable: false,
      pauseOnFocusLoss: true,
      theme: 'colored',
      transition: Flip,
    };

    expect(successOptionsDefault).toEqual({
      ...baseOptions,
      autoClose: 5000,
      pauseOnHover: true,
    });

    expect(warningOptionsDefault).toEqual({
      ...baseOptions,
      autoClose: 7000,
      pauseOnHover: true,
    });

    expect(errorOptionsDefault).toEqual({
      ...baseOptions,
      autoClose: false,
    });
  });

  it('renders success message with options', () => {
    clientMessageService.showSuccessMessage('yeah!');
    expect(toast.success).toBeCalledWith('yeah!', {
      autoClose: 5000,
      closeButton: false,
      closeOnClick: true,
      draggable: false,
      hideProgressBar: true,
      pauseOnFocusLoss: false,
      pauseOnHover: true,
      position: 'bottom-right',
      theme: 'colored',
      transition: Flip,
    });
  });

  it('renders warning message with options', () => {
    clientMessageService.showWarningMessage('oh no!');
    expect(toast.warning).toBeCalledWith('oh no!', {
      autoClose: false,
      closeButton: false,
      closeOnClick: true,
      draggable: false,
      hideProgressBar: true,
      pauseOnFocusLoss: false,
      pauseOnHover: true,
      position: 'bottom-right',
      theme: 'colored',
      transition: Flip,
    });
  });

  it('renders error message with options', () => {
    clientMessageService.showErrorMessage('argh!');
    expect(toast.error).toBeCalledWith('argh!', {
      autoClose: false,
      closeButton: false,
      closeOnClick: true,
      draggable: false,
      hideProgressBar: true,
      pauseOnFocusLoss: false,
      pauseOnHover: true,
      position: 'bottom-right',
      theme: 'colored',
      transition: Flip,
    });
  });
});
