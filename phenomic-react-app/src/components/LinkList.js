import React from "react";

export default ({ links }) => (
  <ul>
    {links.map((value, i) => (
      <li key={i}>
        <a href={value.url}>{value.title}</a>
      </li>
    ))}
  </ul>
);
