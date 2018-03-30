import React from "react";
import { Link } from "react-router";

import pkg from "../../package.json";

export default () => (
  <div id="header">
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          <td>
            <Link to={"/"}>{pkg.myData.title}</Link>
          </td>
          <td style={{ textAlign: "right" }}>
            <Link to={"/about/"}>About</Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
