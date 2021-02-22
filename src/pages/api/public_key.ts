import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ data: process.env.SUPABASE_KEY_PUB })
}

export default handler
