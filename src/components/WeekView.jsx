import { useState } from 'react';
import NewEntry from './NewEntry';

export default function WeekView() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>Woche 46</h1>
      <button onClick={()=>setOpen(true)}>Neuer Eintrag</button>
      {open && <NewEntry close={()=>setOpen(false)} />}
    </div>
  );
}