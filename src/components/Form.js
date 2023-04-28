import { useEffect, useRef, useState } from "react";

export default function Form({ onSubmit }) {
  const formEl = useRef(null);

  return (
    <form
      ref={formEl}
      className="mx-auto my-4 w-60 flex flex-col gap-3 items-center"
      onSubmit={(e) => {
        onSubmit(e);
        formEl.current.reset();
      }}
    >
      <label>
        Quote{" "}
        <input
          name="quote"
          className="bg-gray-200 rounded-md text-gray-800 px-2 py-1"
          required
        ></input>
      </label>

      <label>
        Author
        <input
          name="author"
          className="bg-gray-200 rounded-md px-2 py-1"
        ></input>
      </label>
      <button
        type="submit"
        className="bg-green-800 text-white px-3 py-1 rounded-md hover:bg-green-950 transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}
