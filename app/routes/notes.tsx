import { type ActionFunction, type LinksFunction, redirect } from '@remix-run/node'
import CreateNote, { links as createNoteLinks } from '~/components/CreateNote'
import Note from '~/models/Note'

function Notes() {
  return (
    <div>
        <CreateNote />
    </div>
  )
}

export default Notes

export const links: LinksFunction = () => {
    console.log(createNoteLinks());
    return [...createNoteLinks()]
}

export const action: ActionFunction = async ({ request }) => {
    try {
        const formData = await request.formData()
        const title = formData.get('title')
        const content = formData.get('content')
        
        // const noteData = {
        //     title,
        //     content
        // }
        const noteData = Object.fromEntries(formData)

        const note = await Note.create(noteData)
        
        console.log({ noteData });
        
        return redirect("/notes")
    } catch (error) {
        console.log({ error });
    }
}