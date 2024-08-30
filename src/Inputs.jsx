import { useState } from "react";

function Inputs({setNots}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandeler = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      body,
      id: Date.now(),
      isfinished: false,
    };
    setNots((haveNots) => [...haveNots, newNote]);
    setTitle("");
    setBody("");
  };

  return (
    <div className=" w-1/3 h-full border-2 border-black">
      <form
        action=""
        className="flex flex-col gap-4 justify-between p-4"
        onSubmit={submitHandeler}
      >
        <input
          className=" border-2 border-black w-full"
          type="text"
          id="title"
          placeholder="Enter your title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className=" border-2 border-black"
          type="text"
          id="note"
          placeholder="Enter your note"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
        <input
          type="submit"
          className="border-2 border-black transition-colors hover:bg-black hover:text-white"
        />
      </form>
    </div>
  );
}

export default Inputs;
