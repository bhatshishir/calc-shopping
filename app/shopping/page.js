"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";


const shopping = () => {
  const [items, setItems] = useState([{ id: 1, name: "Tomato", count: 1 }]);
  // const [count, setcount] = useState(0);
  const [name, setName] = useState("");
  const [isEmpty,setIsEmpty]=useState(false);

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
    if(name.length===0){
      setIsEmpty(true);
      return;
    }
    const newItem = { id: items.length + 1, name, count: 1 };
    setItems([...items, newItem]);
    setName("");
    
  }

  function handleDelete(id){
    setItems(
      items.filter((item) => {
        if (item.id !== id) {
          return {
            ...item,
          };
        } 
      })
    );
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
          {isEmpty && <span style={{color:'light-red'}}>Input field cannot be Empty!</span>}
        </div>
      </div>

     

      <div className={styles.itemList}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>ItemName</th>
              <th>Count</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <div className={styles.btnlist}>
                    <button
                      className={styles.incdecbtn}
                      onClick={() => handleDec(item.id)}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className={styles.incdecbtn}
                      onClick={() => handleInc(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>
                  <button className={styles.deletebtn} onClick={()=>handleDelete(item.id)}>Delete</button>
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
