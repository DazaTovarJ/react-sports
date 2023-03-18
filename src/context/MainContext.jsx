import React, {createContext, useState} from "react";
import data from "../data/data";

export const MainContext = createContext();

export const MainContextProvider = ({children}) => {
  const [sportsData, setSportsData] = useState(data);
  const originalSportsData = data;

  const addSport = (sport) => {
    data.push({
      ...sport,
      id: data.length + 1,
    });

    setSportsData([...data]);
  };

  return (
    <MainContext.Provider value={{data, addSport, sportsData, setSportsData}}>
      {children}
    </MainContext.Provider>
  );
};
