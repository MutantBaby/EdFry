// src/services/sweetalertService.js
import Swal from 'sweetalert2';

const SweetAlertService = {
  success: (title, text) => {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  },
  error: (title, text) => {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    });
  },
  warning: (title, text) => {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
    });
  },
  info: (title, text) => {
    return Swal.fire({
      icon: 'info',
      title: title,
      text: text,
    });
  },
  confirm: (title, text, confirmButtonText, cancelButtonText) => {
    return Swal.fire({
      icon: 'question',
      title: title,
      text: text,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    });
  },
};

export default SweetAlertService;
