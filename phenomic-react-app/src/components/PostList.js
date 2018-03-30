import React from "react";
import { Link } from "react-router";

export default ({ posts }) => (
  <ul>
    {posts.map(({ id, title }) => (
      <li key={id}>
        <Link to={`posts/${id}`}>{title}</Link>
      </li>
    ))}
  </ul>
);
