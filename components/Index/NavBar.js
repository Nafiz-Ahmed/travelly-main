import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function NavBar() {
  const [user, setUser] = useState(false);

  return (
    <div>
      <div className={`container ml-auto mr-auto p-4`}>
        <nav
          className={`flex items-center justify-between w-full ${styles.nav}`}
        >
          <Link href="/">
            <div
              className={`logo text-4xl font-700 text-white cursor-pointer ${styles.logo}`}
            >
              TRAVELLY
            </div>
          </Link>

          {user && (
            <div className="header__links">
              <div>jhgcjhasc</div>
            </div>
          )}

          {!user && (
            <div className="header__login">
              <Link href="/">
                <a className={styles.experiences}>Experiences</a>
              </Link>
              <Link href="/">
                <a className={`${styles.sign__in__btn}`}>Sign in</a>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
