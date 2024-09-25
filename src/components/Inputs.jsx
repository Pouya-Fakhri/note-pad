import { useState } from "react";

function Inputs({setNotes}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandeler = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      body,
      id: Date.now(),
      isFinished: false,
    };
    setTitle("");
    setBody("");
    if (newNote) {
      setNotes((haveNots)=>[...haveNots, newNote]);
      e.target.reset();
    }
  };

  return (
    <div className=" w-1/3 h-screen border-4 border-[#33322E] boxShadow rounded-3xl">
      <form
        action=""
        className="flex flex-col gap-4 justify-between p-5 "
        onSubmit={submitHandeler}
      >
        <input
          className=" border-2 border-[#33322E] w-full p-2 boxShadow rounded-3xl"
          type="text"
          id="title"
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className=" border-2 border-[#33322E] p-2 boxShadow rounded-3xl"
          type="text"
          id="note"
          placeholder="Enter your note"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <input
          type="submit"
          className="border-2 border-[#33322E] transition-colors hover:bg-black hover:text-white p-2 boxShadow rounded-3xl"
        />
      </form>
    </div>
  );
}

export default Inputs;
