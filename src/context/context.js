import React, { useState } from 'react';

export const SiteContext = React.createContext();

function Settings(props) {

  const [display, setDisplay] = useState('Hide');
  const [items, setItems] = useState(5);
  const [sort, setSort] = useState('string');

  const state = {
    display,
    items,
    sort,
    setDisplay,
    setItems,
    setSort,
  };

  return (
    <SiteContext.Provider value={state}>{props.children}</SiteContext.Provider>
  );
}

export default Settings;