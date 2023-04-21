export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const testText = 'test text!LOLOLO';
  const response = await fetch('http://localhost:4000/tickets');
  const tickets = await response.json();
  return { testText, tickets };
};
