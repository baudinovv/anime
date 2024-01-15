
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ldahgxxxusdsrhazsodi.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkYWhneHh4dXNkc3JoYXpzb2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyNDI0NDIsImV4cCI6MjAyMDgxODQ0Mn0.XPCstsg8dMKAvxom7VtH29jTns1Znq7P506d_XXpRl0
const supabase = createClient(supabaseUrl, supabaseKey)


let { data, error } = await supabase.auth.signUp({
    email: 'someone@email.com',
    password: 'ZsRamyeEWIruqEgqEKkA'
})
  