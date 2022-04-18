import { Dialog, Disclosure, Menu } from "@headlessui/react";
import React, { ReactNode } from "react";
import { Filtros } from "../ts/filtros.Interface";
import { Ordenar } from "../ts/ordernar.interface";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

function CategoryFiltersComponent({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  handleSortItems,
  filtros,
  sortOptions,
  title,
  children,
}: {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: VoidFunction;
  handleSortItems: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, option: Ordenar) => void;
  filtros: Filtros[];
  sortOptions: Ordenar[];
  title:string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white">
      <div>
        <Dialog
          as="div"
          open={mobileFiltersOpen}
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />

          <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
            <div className="px-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Filtros</h3>
              <button
                type="button"
                className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                onClick={setMobileFiltersOpen}
              >
                <span className="sr-only">Cerrar menu</span>
                <i className="bx bx-x"></i>
              </button>
            </div>

            <form className="mt-4 border-t border-gray-200">
              <h4 className="sr-only">Categorías</h4>

              {filtros.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-t border-gray-200 px-4 py-6"
                >
                  {({ open }) => (
                    <>
                      <h4 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <i className="bx bx-minus text-base"></i>
                            ) : (
                              <i className="bx bx-plus text-base"></i>
                            )}
                          </span>
                        </Disclosure.Button>
                      </h4>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-6">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              <input
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                className="ml-3 min-w-0 flex-1 text-gray-500"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>
          </div>
        </Dialog>

        <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="relative z-10 flex flex-col sm:flex-row items-baseline justify-between pt-6 sm:pt-12 pb-6 border-b border-gray-200">
            <h2 className="text-xl w-full mb-2  sm:mb-0 text-center sm:text-left sm:text-4xl text-slate-800 font-bold tracking-tight">
              {title}
            </h2>

            <div className="flex items-center justify-end w-full">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Ordenar
                    <i
                      className="bx bx-chevron-down flex-shrink-0 -mr-1 ml-1 text-base text-gray-400 group-hover:text-gray-500 "
                      aria-hidden="true"
                    ></i>
                  </Menu.Button>
                </div>

                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <button
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm w-full text-left"
                            )}
                            onClick={(e) => handleSortItems(e, option)}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Menu>

              <button
                type="button"
                className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Ver tabla</span>
                <i className="bx bxs-grid-alt text-base" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                onClick={setMobileFiltersOpen}
              >
                <span className="sr-only">Filtros</span>
                <i className="bx bxs-filter-alt text-base"></i>
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h3 id="products-heading" className="sr-only">
              Productos
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
              <form className="hidden lg:block">
                <h4 className="sr-only">Categorías</h4>

                {filtros.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h4 className="-my-3 flow-root">
                          <Disclosure.Button className="py-3 bg-slate-50 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span
                              className="ml-6 flex items-center"
                              aria-hidden="true"
                            >
                              {open ? (
                                <i
                                  className="bx bx-minus text-base"
                                  aria-hidden="true"
                                ></i>
                              ) : (
                                <i
                                  className="bx bx-plus text-base"
                                  aria-hidden="true"
                                ></i>
                              )}
                            </span>
                          </Disclosure.Button>
                        </h4>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              <div className="lg:col-span-3">{children}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CategoryFiltersComponent;
