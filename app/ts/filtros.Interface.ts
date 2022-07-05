interface Filtros {
  id: string;
  name: string;
  options: FiltrosOptions[];
}

interface FiltrosOptions {
  value: string;
  label: string;
  checked: boolean;
}

export type { Filtros, FiltrosOptions };
