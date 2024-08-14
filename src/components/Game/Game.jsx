import styles from './Game.module.css'
import React, { useState, useEffect } from 'react';
import Placar from '../placar/placar';

function Game() {

  const [escolha, setEscolha] = useState("");
  const [random, setRandom] = useState("");
  const [vitoria, setVitoria] = useState("");
  const [placar, setPlacar] = useState(0);
  const [placarJ, setPlacarJ] = useState(0);
  const [placarC, setPlacarC] = useState(0);
  const [count, setCount] = useState(0);
  
  const play = () => {
    setRandom(Math.floor(Math.random() * 3));
    if(random === 0 && escolha === "Papel"){
      setVitoria("Jogador")
      setPlacar(placar + 1)
      setPlacarJ(placarJ + 1)
    }
    else if(random === 0 && escolha === "Tesoura"){
      setVitoria("Computador")
      setPlacarC(placarC + 1)
    }
    else if(random === 1 && escolha === "Pedra"){
      setVitoria("Computador")
      setPlacarC(placarC + 1)
    }
    else if(random === 1 && escolha === "Tesoura"){
      setVitoria("Jogador")
      setPlacar(placar + 1)
      setPlacarJ(placarJ + 1)
    }
    else if(random === 2 && escolha === "Pedra"){
      setVitoria("Jogador")
      setPlacar(placar + 1)
      setPlacarJ(placarJ + 1)
    }
    else if(random === 2 && escolha === "Papel"){
      setVitoria("Computador")
      setPlacarC(placarC + 1)
    }
    else{
      setVitoria("Empate")
      setCount(count + 1)
    }
  }

  return (
    <>
      <section className={styles.homeSec}>
      <Placar
        count={count}
        placarC={placarC}
        placarJ={placarJ}
      />
        <section className={styles.secGame}>
          <h1 className={styles.title}>Selecione Um</h1>
          
          <div className={styles.secBtn}>
            <button className={styles.btn} onClick={() => setEscolha("Pedra")}>Pedra</button>
            <button className={styles.btn} onClick={() => setEscolha("Papel")}>Papel</button>
            <button className={styles.btn} onClick={() => setEscolha("Tesoura")}>Tesoura</button>
          </div>

          <div>
            <h2 className={styles.h2}>Escolha: {escolha}</h2>
            <button className={styles.btnJogar} onClick={play}>Jogar</button>
            <h2 className={styles.h2}>Vencedor:{vitoria}</h2>
          </div>
        </section>
      </section>
    </>
  )
}

export default Game
