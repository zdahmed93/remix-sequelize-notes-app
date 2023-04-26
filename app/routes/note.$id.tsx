import { useLoaderData, type LoaderFunction } from 'react-router'
import Note from '~/models/Note'

function SingleNote() {
  const note = useLoaderData()
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  )
}

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const note = await Note.findOne({where: { id: params.id }});
    // const note = await Note.findByPk(params.id)
    return note;
  } catch (error) {
    console.log({ error });
  }
}

export default SingleNote