import { useState, useEffect } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import NoteCard from "./components/NotCard";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const storedValue = localStorage.getItem("myNotes");
    return storedValue ? JSON.parse(storedValue) : [];
  });
  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  const removeNote = (id) => {
    setNotes(notes.filter(item => item.id !== id));
  };

  const markAsFinished = (id) => {
    setNotes(notes.map(item => 
      item.id === id ? { ...item, isFinished: !item.isFinished } : item
    ));
  };
  

  console.log(notes);
  return (
    <main className=" p-3 overflow-hidden h-screen flex flex-col  gap-2   ">
      <Header />
      <div className="flex gap-4">
        <Inputs setNotes={setNotes} />
        <div className="cardsContainer w-2/3 h-screen flex justify-around gap-5 flex-wrap hide-scroll-bar overflow-y-scroll">
          {notes.map(({ title, body, id , isFinished }) => (
            <NoteCard title={title} isFinished={isFinished} body={body} id={id} remove={()=>removeNote(id)} done={()=>markAsFinished(id)} key={id} />
          ))}
        </div>
      </div>
    </main>
  );
}
