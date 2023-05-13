import { StateContext } from '@/context/state';
import React, { useContext } from 'react';

export default function Links() {
  const { links, setLinks, link, setLink } = useContext(StateContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (link) {
      const newItem = {
        id: new Date().getTime().toString(),
        title: link,
      };
      setLinks([newItem, ...links]);
    } else {
      alert('Please add a link');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="links">Links</label>
        <input
          type="text"
          name="link"
          id="link"
          placeholder="add your links to your socials"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </form>

      <ul className="mt-3">
        {links.map((link, index) => (
          <li
            key={index}
            className="mb-2 py-3 px-2 bg-slate-700 rounded shadow text-white font-bold"
          >
            {link.title}
          </li>
        ))}
      </ul>
    </>
  );
}
