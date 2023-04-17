"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
const calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");
  const [isNumber1, setIsNumber1] = useState(false);
  // const [isNumber2, setIsNumber2] = useState(false);

  function handleNumber(num) {
    if (!isNumber1) {
      setNumber1((number1) => number1 * 10 + num);
      setResult((result) => result * 10 + num);
    } else {
      setNumber2((number2) => number2 * 10 + num);
      setResult((result) => result * 10 + num);
      // setIsNumber2(true);
    }
  }

  function handleOperator(e) {
    setIsNumber1(true);
    setResult(0);
    setOperator(e.target.textContent);
    // if (isNumber2) {
    //   handleEqual();
    // }
  }

  function handleEqual() {
    let output;
    switch (operator) {
      case "+":
        output = number1 + number2;
        setResult(output);
        break;
      case "-":
        output = number1 - number2;
        setResult(output);
        break;
      case "x":
        output = number1 * number2;
        setResult(output);
        break;
      case "/":
        if (number2 === 0) {
          setResult("NaN");
          break;
        } else {
          output = number1 / number2;
          setResult(output);
          break;
        }
    }
  }

  function handleClear() {
    setNumber1(0);
    setNumber2(0);
    setOperator("");
    setIsNumber1(false);
    setResult(0);
  }

  return (
    <>
    <Link className={styles.link} href='./'>
      HOME
    </Link>
    <div className={styles.main}>
      
      <h1 className={styles.heading}>Simple Calculator</h1>
      <div className={styles.inputdiv}>
        <h1 className={styles.result}>{result}</h1>
        {/* // <input className={styles.inputbox} type="number" value={result} /> */}
      </div>
      <div className={styles.numberbox}>
      
        <div className="innernumberbox">
          <button className={styles.calcbutton} onClick={() => handleNumber(7)}>
            7
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(8)}>
            8
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(9)}>
            9
          </button>
          <button className={styles.calcbutton} onClick={handleOperator}>
            x
          </button>
        </div>
        <div className="innernumberbox">
          <button className={styles.calcbutton} onClick={() => handleNumber(4)}>
            4
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(5)}>
            5
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(6)}>
            6
          </button>
          <button className={styles.calcbutton} onClick={handleOperator}>
            /
          </button>
          
        </div>
        <div className="innernumberbox">
          <button className={styles.calcbutton} onClick={() => handleNumber(1)}>
            1
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(2)}>
            2
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(3)}>
            3
          </button>
          <button className={styles.calcbutton} onClick={handleOperator}>
            +
          </button>
        </div>
        <div className="innernumberbox">
          <button
            className={[styles.calcbutton, styles.clearbutton].join(" ")}
            onClick={handleClear}
          >
            Clear
          </button>
          <button className={styles.calcbutton} onClick={() => handleNumber(0)}>
            0
          </button>

          <button
            className={[styles.calcbutton, styles.equalbutton].join(" ")}
            onClick={handleEqual}
          >
            =
          </button>
          <button className={styles.calcbutton} onClick={handleOperator}>
            -
          </button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default calculator;
