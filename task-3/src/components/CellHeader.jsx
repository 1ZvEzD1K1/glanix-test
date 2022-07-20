import React from 'react'

const CellHeader = () => {
  return (
    <div className="cells">
      <div className="cell index">№</div>
      <div className="cell">Sh</div>
      <div className="cell country">Country</div>
      <div className="cell name">Name</div>
      <div className="cell url">Links</div>
      <div className="cell domain">Domains</div>
      <div className="cell check">Save in my list?</div>
    </div>
  )
}

export default CellHeader