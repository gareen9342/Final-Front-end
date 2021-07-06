import React from "react";
import "../Payment.css";

export const TailwindInput = ({ id, title, content, onchange, readonly = false }) => {
  return (
    <>
      <div className="">
        <label htmlFor={id} className="text-md text-gray-600">
          {title}
        </label>
      </div>
      <div className="">
        <input
          type="text"
          value={content}
          onChange={!!onchange ? onchange : undefined}
          readOnly={readonly}
          id={id}
          name={id}
          autoComplete="off"
          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
          placeholder="Example. John Doe"
        />
      </div>
    </>
  );
};
