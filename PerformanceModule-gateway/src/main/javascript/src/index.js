import React from 'react';
import App from './App.tsx';
// import * as bootstrap from 'bootstrap';
// import '../scss/styles.scss';
// import styles from  '../scss/styles.module.scss';
// return <div className={styles.appContainer}><App></App></div>

const MountableApp = class StatusPageApp extends React.Component {
    render() {
        return <App></App>
    }
}

export default MountableApp;