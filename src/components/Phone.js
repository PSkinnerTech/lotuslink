import { StateContext } from '../context/state';
import React, { useContext } from 'react';

export default function Phone() {
  const { name } = useContext(StateContext);

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
          </article>
        </div>
      </div>
    </>
  );
}
