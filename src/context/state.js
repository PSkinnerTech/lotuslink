import { createContext, useState } from 'react';

export const StateContext = createContext();

export default function State({ children }) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [links, setLinks] = useState([]);
  const [link, setLink] = useState('');

  const context = {
    name,
    setName,
    bio,
    setBio,
    links,
    setLinks,
    link,
    setLink,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
}
