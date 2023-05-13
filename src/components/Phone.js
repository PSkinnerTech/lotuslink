import { StateContext } from '../context/state';
import React, { useContext } from 'react';

export default function Phone() {
  const { name, bio, links } = useContext(StateContext);

  return (
    <>
      <div
        style={{
          height: 725,
          borderRadius: 45,
        }}
        className="border-8 border-black w-full sm:w-96 sm:mx-auto scale-90 md:fixed md:right-8 lg:right-20 xl:right-40 2xl:right-60"
      >
        <div className="p-8">
          <article>
            <h1 className="text-center text-xl font-bold text-slate-300">
              {name}
            </h1>
            <p className="mt-4 text-center text-sm text-slate-400">{bio}</p>
          </article>

          <ul className="mt-8 text-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="mb-4 py-3 px-2 bg-slate-700 rounded shadow text-white font-bold cursor-pointer pop"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
