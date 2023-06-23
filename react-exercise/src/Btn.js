import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Btn.module.css';

const Btn = ({btnName, onClick}) => {
    return (
        <button className={styles.tomatoBtn} onClick={onClick} >
            {btnName}
        </button>

    );
};

export default Btn;