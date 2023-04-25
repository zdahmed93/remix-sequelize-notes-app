import { DataTypes } from 'sequelize'
import { sequelize } from '../entry.server'

const Note = sequelize.define('Note', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'notes'
})

Note.sync()

export default Note