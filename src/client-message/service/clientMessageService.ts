import {Flip, toast, ToastOptions} from 'react-toastify';

const baseOptions: ToastOptions = {
  position: 'bottom-right',
  hideProgressBar: false,
  closeOnClick: false,
  draggable: false,
  pauseOnFocusLoss: true,
  theme: 'colored',
  transition: Flip,
};

export const successOptionsDefault: ToastOptions = Object.freeze({
  ...baseOptions,
  autoClose: 5000,
  pauseOnHover: true,
});

export const warningOptionsDefault: ToastOptions = Object.freeze({
  ...baseOptions,
  autoClose: 7000,
  pauseOnHover: true,
});

export const errorOptionsDefault: ToastOptions = Object.freeze({
  ...baseOptions,
  autoClose: false,
});

export function withOptions(
  successOptions?: ToastOptions,
  warningOptions?: ToastOptions,
  errorOptions?: ToastOptions,
): {
  showSuccessMessage: (message: string) => void;
  showWarningMessage: (message: string) => void;
  showErrorMessage: (message: string) => void;
} {
  return {
    showSuccessMessage: (message: string) => showSuccessMessage(message, successOptions),
    showWarningMessage: (message: string) => showWarningMessage(message, warningOptions),
    showErrorMessage: (message: string) => showErrorMessage(message, errorOptions),
  };
}

/**
 * Zeigt existierende Toastr-Container mit Formatierung für Erfolgsmeldung an
 * @param message
 * @param options
 */
export function showSuccessMessage(message: string, options?: ToastOptions): void {
  toast.success(message, {...successOptionsDefault, ...options});
}

/**
 * Zeigt existierende Toastr-Container mit Formatierung für Warnungsmeldung an
 * @param message
 * @param options
 */
export function showWarningMessage(message: string, options?: ToastOptions): void {
  toast.warn(message, {...warningOptionsDefault, ...options});
}

/**
 * Zeigt existierende Toastr-Container mit Formatierung für Fehlermeldung an
 * @param message
 * @param options
 */
export function showErrorMessage(message: string, options?: ToastOptions): void {
  toast.error(message, {...errorOptionsDefault, ...options});
}

export const clientMessageService = withOptions({
    ...successOptionsDefault,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    closeButton: false,
    closeOnClick: true,
  },
  {
    ...warningOptionsDefault,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    closeButton: false,
    closeOnClick: true,
    autoClose: false,
  },
  {
    ...errorOptionsDefault,
    ...warningOptionsDefault,
    hideProgressBar: true,
    pauseOnFocusLoss: false,
    closeButton: false,
    closeOnClick: true,
    autoClose: false,
  });