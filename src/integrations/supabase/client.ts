// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vjrbdmndqdgudvakrdno.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcmJkbW5kcWRndWR2YWtyZG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTcxOTQsImV4cCI6MjA1NTc5MzE5NH0.7jNpSZLaWIfIrXacTiypsdrMnbD_GWSqRp6mD_k_Pyw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);