import React from 'react';

export default function Menu() {
  return (
    <div>
      <select>
        <option value="">Select a page</option>
        <option value="/about">About</option>
        <option value="/resume">Resume</option>
      </select>
    </div>
  );
}