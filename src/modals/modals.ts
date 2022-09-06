import { toast, Flip } from "react-toastify";

export const succesModal = (message: string) =>
  toast.success(message, {
    position: "top-center",
    theme: "light",
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false,
    transition: Flip,
  });

export const errorModal = (message: string) =>
  toast.error(message, {
    position: "top-center",
    theme: "light",
    hideProgressBar: true,
    autoClose: 3000,
    closeButton: false,
    transition: Flip,
  });

export const goodbyeModal = (message: string) => {
  toast.info(message, {
    position: "top-center",
    theme: "light",
    hideProgressBar: true,
    closeButton: false,
    transition: Flip,
    autoClose: 3000,
  });
};
