import React from 'react';
import  styles from './Header.module.scss';

function Header() {
    return (
        <div className={styles.headerwrapper}>
            <h2 className={styles.logo}>Reusable Components</h2>
            <div className={styles.navbar}>
                <ul className={styles.nav_list}>
                    <li className={styles.list_item}>
                        <a href="#" onClick={(e) => e.preventDefault()}>Login</a>
                    </li>
                    <li className={styles.list_item}>
                        <a href="#" onClick={(e) => e.preventDefault()}>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
