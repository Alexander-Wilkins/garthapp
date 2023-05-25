import { supabase } from "$lib/supabaseClient";

export const load = async () => {
  const { data } = await supabase.from("tickets").select("*");
  return { tickets: data ?? [] };
};
