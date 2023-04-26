import { type ActionFunction, type LinksFunction, redirect, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import CreateNote, { links as createNoteLinks } from '~/components/CreateNote'
import ListNotes, { links as listNotesLinks } from '~/components/ListNotes'
import Note from '~/models/Note'

function Notes() {
    const notes = useLoaderData()
    
  return (
    <div>
        <CreateNote />
        <ListNotes notes={notes} />
    </div>
  )
}

export default Notes

export const links: LinksFunction = () => {
    return [...createNoteLinks(), ...listNotesLinks()]
}

export const action: ActionFunction = async ({ request }) => {
    try {
        const formData = await request.formData()
        const title = formData.get('title')
        const content = formData.get('content')
        
        // TODO: Add validation

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

export const loader: LoaderFunction = async () => {
    try {
        const notes = await Note.findAll() 
        return notes.map(n => n.toJSON())
    } catch (error) {
        console.log(error);
        
    }
}