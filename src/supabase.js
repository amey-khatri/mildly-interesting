import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://exkkuxvhwivzunxkpdsp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4a2t1eHZod2l2enVueGtwZHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwMzc2NTksImV4cCI6MjA2NjYxMzY1OX0.zIqbBzDqTKjRjbnrw54kYckvzDoM3w4sEnVKaUZD4rA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
