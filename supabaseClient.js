import { createClient } from '@supabase/supabase-js'
export const SUPABASE_URL = 'https://lrpdetggbtqcdfaquype.supabase.co'
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycGRldGdnYnRxY2RmYXF1eXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNjM1MTYsImV4cCI6MjA3NDgzOTUxNn0.Cnlteg7bgj2q9ONGEMd4vX2Wkv0SNQ5gHslW2uIayLg'
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
