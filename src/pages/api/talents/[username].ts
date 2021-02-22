import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).json({ name: 'John Doe' })
      break
    default:
      res.status(404).json({})
  }
}

export default handler
