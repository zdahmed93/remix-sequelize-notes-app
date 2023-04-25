import type { ActionFunction, LinksFunction } from '@remix-run/node'
import CreateNote, { links as createNoteLinks } from '~/components/CreateNote'

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

        console.log({ noteData });
        
        return "ok"
    } catch (error) {
        console.log({ error });
    }
}