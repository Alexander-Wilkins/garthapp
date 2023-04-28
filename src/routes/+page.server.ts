import { supabase } from '$lib/supabaseClient';
import { setContext } from 'svelte';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { data } = await supabase.from('tickets').select();
  return { tickets: data ?? [] };
};
