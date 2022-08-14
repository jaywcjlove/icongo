import React from "react";

export interface CreateContext {
  query: string;
  results: string[];
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setResults: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Context = React.createContext<CreateContext>({
  query: "",
  setQuery: () => {},
  results: [],
  setResults: () => {}
});

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<string[]>([]);

  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        results,
        setResults,
      }}
    >
      {children}
    </Context.Provider>
  );
};