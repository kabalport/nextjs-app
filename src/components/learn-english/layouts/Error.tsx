import React from 'react';
import styles from './error.module.css';

const Error = ({ message }) => {
    return <strong className={styles.error}>{message}</strong>;
};

export default Error;
