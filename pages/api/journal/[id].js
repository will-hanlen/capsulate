import dbConnect from '../../../utils/dbConnect'
import Entry from '../../../models/entry'

dbConnect()

export default async (req, res) => {

  const {
    query: { id },
    method
  } = req

  switch(method) {
    case 'GET':
      try {
        const entry = await Entry.findById(id)

        if (!entry) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: entry })

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'PUT':
      try {
        const entry = await Entry.findByIdAndUpdate(id, req.body, {new: true, runValidators: true} )

        if (!entry) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: entry })

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'DELETE':
      try {
        const deletedEntry = await Entry.deleteOne({ _id: id });

        if (!deletedEntry) {
          return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: {} })

      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
      
