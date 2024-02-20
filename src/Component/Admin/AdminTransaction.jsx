import React from 'react'
import "./AdminTransaction.css"
import AdminHeader from './AdminHeader'

const AdminTransaction = () => {
  return (
    <>
    <AdminHeader></AdminHeader>
    <body>
        
    <div className='admintransaction-box'>
                <b className='admintransaction-tag'>Depoist</b>
                <p className='admintransaction-details'>adedigba deposited the some of $1000 to this account</p>

                <p className='admindate-time'>21/12/2035 <span>2:20</span></p>
        </div>
    </body>
    </>
  )
}

export default AdminTransaction