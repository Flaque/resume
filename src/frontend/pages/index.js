/*
 _________________ 
< hello yes hello >
 ----------------- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
 */

import Link from "next/link";

export default () =>
  <div>
    <ul>
      <li>
        <Link href="/upload">
          <a>Upload</a>
        </Link>
      </li>
      <li>
        <Link href="/resumes">
          <a>Resumes</a>
        </Link>
      </li>
    </ul>
  </div>;
