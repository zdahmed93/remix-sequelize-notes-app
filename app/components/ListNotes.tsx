import { LinksFunction } from "@remix-run/node"
import { type FunctionComponent } from "react"
import styles from './ListNotes.css'

type Note = {
    id: string
    title: string
    content: string
}

type ListNotesProps = {
    notes: Note[]
}

const ListNotes:FunctionComponent<ListNotesProps> = ({notes}) => {
  return (
    <div className="notes-container">
        {
            notes.map(note => (
                <div key={note.id} className="note">
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ListNotes

export const links: LinksFunction = () => [{rel: "stylesheet", href: styles}]