"use client";

import { createContext, useState } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

export const dialogContext = createContext({
  dialogState: false,
  setDialogState: (dialogState : boolean) => {!dialogState}
});

export default function Home() {

  const [dialogState, setDialogState] = useState(false);

  return (
    <dialogContext.Provider value={{dialogState, setDialogState}}>
      <Header />
      <Main />
      <Footer />
    </dialogContext.Provider>
  )
}
