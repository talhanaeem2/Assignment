import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addField } from '../features/products/productSlice'
import { v4 as uuidv4 } from 'uuid'

const Form = () => {
  const dispatch = useDispatch()
  const { inputFields } = useSelector((store) => store.products)

  const addFieldToState = (e) => {
    e.preventDefault()

    dispatch(
      addField({
        id: uuidv4(),
        value: e.target.value,
      })
    )
  }

  return (
    <form className='form'>
      <label>
        Enter your name:
        <input type='text' />
      </label>
      <textarea />
      <select>
        <option value='Ford'>test</option>
        <option value='Volvo'>test</option>
        <option value='Fiat'>test</option>
      </select>
      <button type='button' onClick={addFieldToState}>
        Add
      </button>
      {inputFields.map((field) => {
        return <input id={field.id} />
      })}
    </form>
  )
}

export default Form
