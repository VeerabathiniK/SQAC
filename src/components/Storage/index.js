import {useRef} from 'react'

import emailjs from '@emailjs/browser'

const Storage = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_juqnq17',
        'template_olo0p2j',
        form.current,
        'cLUGjxNKiLfceft4H',
      )
      .then(
        result => {
          console.log(result.text)
          console.log('message sent')
        },
        error => {
          console.log(error.text)
        },
      )
  }
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" />
      <label htmlFor="Email">Email</label>
      <input type="email" name="user_email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}

export default Storage
