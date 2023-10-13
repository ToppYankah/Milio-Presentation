"use client";
import React, { useState } from 'react';

export const SidebarContext = React.createContext();

export function SidebarContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </SidebarContext.Provider>
  );
}

