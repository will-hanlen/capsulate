import dbConnect from '../../../utils/dbConnect'
import Entry from '../../../models/entry'

dbConnect()

export default async (req, res) => {

  const { method } = req;

  switch(method) {
    case 'GET':
      try {
        const entries = await Entry.find({})

        res.status(200).json({ success: true, data: entries })
      } catch (error) {
        res.status(400).json( {success: false} )
      }
      break;
    case 'POST':
      try {
        const entry = await Entry.create(req.body)

        res.status(201).json({ success: true, data: entry })
      } catch (error) {
        res.status(400).json( {success: false} )
      }
      break;
    default:
      res.status(400).json( {success: false} )
      break;
  }
}
