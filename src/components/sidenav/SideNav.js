import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNav.module.scss';
import navData from '../../assets/json/nav.json';

function SideNav({url}) {
    return (
        <div>
            <div>
                <ul style={{ listStyleType: "none", padding: 0 }}>

                    {
                        navData.map(item => (
                            <li className={styles.list_item} key={item.id}>
                                <Link to={`${url}/${item.path}`} >{item.text}</Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default SideNav
