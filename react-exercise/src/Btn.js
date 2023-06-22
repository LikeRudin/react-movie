import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Btn.module.css';

const Btn = ({btnName}) => {
    return (
        <button className={styles.tomatoBtn} >
            {btnName}
        </button>

    );
};

export default Btn;