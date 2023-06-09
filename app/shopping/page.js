"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

const shopping = () => {
  const [items, setItems] = useState([{ id: 1, name: "Tomato", count: 1 }]);
  // const [count, setcount] = useState(0);
  const [name, setName] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  function handleInc(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      })
    );

    // const updatedItem =items.filter(item=> item.id == id?item.count++:item);
    // // updatedItem.count++;
    // console.log(updatedItem,"inc");
    // console.log(items,"newis");
    // setItems([...items]);
  }

  function handleDec(id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          if (item.count === 1) {
            handleDelete(id);
            return;
          }
          return {
            ...item,
            count: item.count - 1,
          };
        } else {
          return item;
        }
      })
    );
    // const updatedItem =items.filter(item=> item.id == id?item.count--:item);
    // console.log(updatedItem,"dec");
    // setItems([...items]);
  }

  function handleAdd(e) {
    if (name.length === 0) {
      setIsEmpty(true);
      return;
    }
    const newItem = { id: items.length + 1, name, count: 1 };
    setItems([...items, newItem]);
    setName("");
  }

  function handleDelete(id) {
    let updated = items.filter((item) => {
      if (item.id !== id) {
        return {
          ...item,
        };
      }
    });

    let newItems = updated.map((item, index) => ({ ...item, id: index + 1 }));

    setItems(newItems);
  }

  function handleInput(e) {
    setName(e.target.value);

    setIsEmpty(false);
  }
  // console.log(items);
  return (
    <div className="main">
      <Link className={styles.link} href="./">
        HOME
      </Link>
      <h1 style={{ textAlign: "center" }}>Shopping List</h1>

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
                placeholder="Add an Item..."
              />
            </div>

            <button className={styles.addbtn} onClick={handleAdd}>
              Add
            </button>
          </div>
          {isEmpty && (
            <span style={{ color: "red", padding: "0.5rem" }}>
              Input field cannot be Empty!
            </span>
          )}
        </div>
      </div>

      <div className={styles.itemList}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table}>#</th>
              <th className={styles.table}>ItemName</th>
              <th className={styles.table}>Count</th>
              <th className={styles.table}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className={styles.table}>{item?.id}</td>
                <td className={styles.table}>{item?.name}</td>
                <td className={styles.table}>
                  <div className={styles.btnlist}>
                    <button
                      className={styles.incdecbtn}
                      onClick={() => handleDec(item.id)}
                      disabled={item.count < 2}
                    >
                      -
                    </button>
                    <span>{item?.count}</span>
                    <button
                      className={styles.incdecbtn}
                      onClick={() => handleInc(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className={styles.table}>
                  <button
                    className={styles.deletebtn}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default shopping;
