import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex my-3'>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text'>Male</span>
            <input type="checkbox" className='checkbox border-slate-900' />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
            <span className='label-text mx-2'>Female</span>
            <input type="checkbox" className='checkbox border-slate-900' />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox