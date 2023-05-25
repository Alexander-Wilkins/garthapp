import { supabase } from "$lib/supabaseClient";

export const load = async ({ params }) => {
  const { ticketId } = params;
  const { data: ticket, error } = await supabase
    .from("tickets")
    .select("title")
    .eq("id", ticketId)
    .single();

  if (error) {
    console.error(error);
    return {
      status: 404,
      error: `Ticket with id ${ticketId} not found`,
    };
  }

  const { title } = ticket;
  return { title };
};
