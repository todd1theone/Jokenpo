
import React from 'react';
import styles from './placar.module.css';

function placar({ placarJ, placarC, count }) {

  return (
    <>
      <section className={styles.sBar}>
        <div className={styles.sBarC}>
          <h1 className={styles.title}>Placar:</h1>
          <p className={styles.placar}>Jogador: {placarJ}</p>
          <p className={styles.placar}>Computador: {placarC}</p>
          <p className={styles.placar}>Empates: {count}</p>
        </div>
      </section>
    </>
  )
}

export default placar;