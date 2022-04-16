import React, { useContext, createContext } from 'react';

//Context
export const AppContext = createContext("");

//Provider
export const AppContextProvider = ({ children }:{children:any}) => {
  const [variableState, setVariableState] = React.useState("");

  //ComponentDidMouunt
  React.useEffect(() => {

  }, []);

  //
  const values = React.useMemo(() => (
    { variableState,      // States que seran visibles en el contexto.
      setVariableState,   // Funciones que son exportadas para manejo externo.
    }), 
    [ 
      variableState ]);   // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

//
export function useAppContext() {
  const context = useContext(AppContext);

  if(!context){
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;