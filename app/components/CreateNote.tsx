import type { LinksFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import styles from  './CreateNote.css'

function CreateNote() {
  return (
    <div>
        <Form method='post' className='create-note-form'>
            <input type="text" name='title' placeholder='Title ...' />
            <textarea name="content" cols={30} rows={10} placeholder='Content ...'></textarea>
            <button type='submit'>Add</button>
        </Form>
    </div>
  )
}

export default CreateNote

export const links: LinksFunction = () => {
    return [{rel: 'stylesheet', href: styles}]
}