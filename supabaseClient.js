import { createClient } from '@supabase/supabase-js'
export const SUPABASE_URL = 'https://YOUR_SUPABASE_PROJECT.supabase.co'
export const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)