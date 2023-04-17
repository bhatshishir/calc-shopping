import styles from './page.module.css';
import Link from 'next/link';
const page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Welcome To The Assignment!</h1>
        <p>Choose any of the buttons to explore more... </p>
      </div>

      <div className={styles.buttondiv}>
        <Link href='/calculator'>
          <button className={styles.btn1} type="button">Calculator</button>
        </Link>
        <Link href='/shopping'>
          <button className={styles.btn2} type="button">Shopping</button>
        </Link>
        
        
          
      </div>
    </div>

  )
}

export default page