import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from 'next/router'
import Home from "./home";
import Link from 'next/link'

export default function Document() {
  return (
    <>
      <Html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head />
        <body>
          <title>My CMS APP</title>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 m-4">
                <nav className="navbar bg-light sticky-top navbar-light">
                  <li>
                    <Link href="/home">Home</Link>
                  </li>
                  <li>
                    <Link href="/cms">CMSAPP</Link>
                  </li>
                  <li>
                    <Link href="/inbox">Inbox</Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>


          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
