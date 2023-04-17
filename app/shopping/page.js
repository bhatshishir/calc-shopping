"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
// const items = [
//   { name: "Tomato", count: 1 },
//   { name: "Tomapo", count: 2 },
//   { name: "omato", count: 3 },
// ];

const shopping = () => {
  const [items, setItems] = useState([]);
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");

  function handleInc() {
    setcount((count) => count + 1);
  }

  function handleDec() {
    setcount((count) => count - 1);
  }

  function handleAdd(e) {
    const newItem = { id:items.length+1,name, count };
    setItems([...items, newItem]);
    setName("");
    setcount(0);
  }

  function handleInput(e) {
    setName(e.target.value);
  }
  return (
    <div className="main">
      <Link className={styles.link} href="./">
        HOME
      </Link>
      <h1 style={{ textAlign: "center" }}>Shopping List</h1>

      {/* <div className={styles.itemList}>
        <ul>
          {items.map((item, index) => (
            <div key={index}>
              <span>{item.name}</span>
              <span>{item.count}</span>
            </div>
          ))}
        </ul>
      </div> */}

      <div className={styles.itemList}> 
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>ItemName</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
           
         {items.map(item=>{
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
          </tr>
         })}
          </tbody>
        </table>
      </div>

      <div className={styles.mainitemdiv}>
        <div className={styles.newItemDiv}>
          <div className={styles.itemheader}>
            <h2>Add a new item</h2>
          </div>
          <div className={styles.inputitemsdiv}>
            <div className={styles.inputdiv}>
              <input
                className={styles.input}
                type="text"
                onChange={handleInput}
                value={name}
              />
            </div>

            <div className={styles.btnlist}>
              <button className={styles.incdecbtn} onClick={handleInc}>
                +
              </button>
              <span>{count}</span>
              <button className={styles.incdecbtn} onClick={handleDec}>
                -
              </button>
            </div>
            <button className={styles.addbtn} onClick={handleAdd}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shopping;
