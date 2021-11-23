import * as supa from '@supabase/supabase-js'

const secret = !!process?.env?.SUPABASE_SECRET // check if it exists at all!
	? process.env.SUPABASE_SECRET
	: process.env.SUPABASE_KEY_PUB

export const supabase = supa.createClient(process.env.SUPABASE_URL, secret)
