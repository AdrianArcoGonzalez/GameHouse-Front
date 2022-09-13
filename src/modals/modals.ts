import { toast, Zoom } from "react-toastify";

export const succesModal = (message: string) =>
  toast.success(message, {
    position: "top-center",
    theme: "light",
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false,
    transition: Zoom,
  });

export const errorModal = (message: string) =>
  toast.error(message, {
    position: "top-center",
    theme: "light",
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false,
    transition: Zoom,
  });

export const infoModal = (message: string) => {
  toast.info(message, {
    position: "top-center",
    theme: "light",
    hideProgressBar: true,
    closeButton: false,
    transition: Zoom,
    autoClose: 3000,
  });
};
