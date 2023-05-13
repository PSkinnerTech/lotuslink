import React, { useContext, useState } from "react";
import { StateContext } from "../context/state";

export default function Form() {
  const { name, setName } = useContext(StateContext);

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
            <textarea name="bio" id="bio" cols="30" rows="5" placeholder="Tell us something about yourself"></textarea>
          </article>
          <article>
            <label htmlFor="links">Links</label>
            <input type="text" name="link" id="link" placeholder="add your links to your socials" />
          </article>
        </form>
      </div>
      
    </>
  );
}
