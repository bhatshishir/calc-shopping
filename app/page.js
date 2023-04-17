import './page.module.css';
import Link from 'next/link';
const page = () => {
  return (
    <div className='page-div'>
      <div className="main-div">
        <h1>Welcome To The Assignment!</h1>
        <p>Choose any of the buttons to explore more... </p>
      </div>

      <div className="button-div">
        <Link href='/calculator'>
          <button type="button">Calculator</button>
        </Link>
        <Link href='/shopping'>
          <button type="button">Shopping</button>
        </Link>
        
        
          
      </div>
    </div>

  )
}

export default page