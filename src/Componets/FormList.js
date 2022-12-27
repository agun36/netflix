import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { Button, InputGroup } from 'react-bootstrap'
import '../App.css'
const FormList = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      })
  }
  const findFormErrors = () => {
    const { email } = form
    const newErrors = {}
    // email errors
    if (!email || email === '') newErrors.email = 'cannot be blank!'
    else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'emial pattern is not valid'
    return newErrors
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // get our new errors
    const newErrors = findFormErrors()
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors)
    } else {
      // No errors! Put any logic here for the form submission!
      alert('Thank you for your feedback!')
    }
  }
  return (
    <div>
      <h5 className='header__sub-text--small' style={{ color: 'white' }}>
        Ready to watch? Enter your email to create or restart your membership
      </h5>
      <form className='form-data d-flex  align-items'>
        {' '}
        <InputGroup className='form-data'>
          <Form.Control
            className='w-75 '
            style={{ borderRadius: '0' }}
            type='text'
            onChange={(e) => setField('email', e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.email}
          </Form.Control.Feedback>
          <Button
            style={{ background: 'red', border: 'none', borderRadius: '0' }}
            type='submit'
            onClick={handleSubmit}
          >
            Email
          </Button>
        </InputGroup>
      </form>
    </div>
  )
}

export default FormList
