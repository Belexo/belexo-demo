export default function NewEntry({close}) {
  return (
    <div style={{background:'#eee', padding:20}}>
      <h2>Neuer Eintrag</h2>
      <input placeholder="Mitarbeiter"/><br/>
      <input placeholder="Objekt"/><br/>
      <input placeholder="Arbeit"/><br/>
      <button onClick={close}>Schließen</button>
    </div>
  );
}