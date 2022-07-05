import { useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Producto } from "../ts/producto.interface";
import { Api } from "../../pages/api/api";
import { PRODUCTOS } from "../utils/apiLinks";

function ConfirmationModal({
  open,
  setOpen,
  producto,
  setAlertDelete
}: {
  open: boolean;
  setOpen: VoidFunction;
  producto: Producto;
  setAlertDelete : VoidFunction;
}) {
  const cancelButtonRef = useRef(null);

  const handleDelete = async () => {
    setOpen();
    const response = await Api.deleteResource(PRODUCTOS, producto.id)
    if (response.status == 200) {
      setAlertDelete();
      setTimeout(setAlertDelete, 3000);
    }
  };

  return (
    <Dialog
      as="div"
      className="fixed z-20 inset-0 overflow-y-auto"
      open={open}
      initialFocus={cancelButtonRef}
      onClose={setOpen}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <i className="bx bx-error text-red-600 text-2xl"></i>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <Dialog.Title
                  as="h3"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Eliminar Producto
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    ¿Estás seguro de que quieres eliminar este producto?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={handleDelete}
            >
              Eliminar
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={setOpen}
              ref={cancelButtonRef}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default ConfirmationModal;
