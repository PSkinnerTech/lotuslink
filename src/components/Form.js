import React, { useContext, useState } from 'react';
import { StateContext } from '../context/state';
import Links from './Links';

export default function Form() {
  const { name, setName, bio, setBio } = useContext(StateContext);

  return (
    <>
      <div>
        {/* Image Uploader */}

        <form className="flex flex-col gap-3">
          <article>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </article>
          <article>
            <label htmlFor="bio">Bio</label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="5"
              placeholder="Tell us something about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </article>
        </form>
        <article className="mt-3">
          <Links />
        </article>
      </div>
    </>
  );
}
