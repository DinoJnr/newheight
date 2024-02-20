import React from 'react'
import "./Transaction.css"
import Header from '../Screen/Header'
const Transaction = () => {
  return (
    <>
       <Header></Header>
    <body>
        <div className='transaction-box'>
                <b className='transaction-tag'>Depoist</b>
                <p className='transaction-details'>adedigba deposited the some of $1000 to this account</p>

                <p className='date-time'>21/12/2035 <span>2:20</span></p>
        </div>
    </body>
    </>


  )
}

export default Transaction