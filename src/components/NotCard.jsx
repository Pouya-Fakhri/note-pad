function NoteCard({ title, body, id, setNotes }) {
  return (
    <div
      className="card w-[270px] h-[290px] bg-[#F9F3E5] rounded-3xl flex  flex-col  items-center  boxShadow border-4 border-[#33322E]"
      id={id}
    >
      <h2 className=" font-bold text-[30px]">{title}</h2>
      <div className="line w-full h-1 bg-[#33322E]"></div>
      <p className=" font-medium text-[16px]">{body}</p>
      <div className="buttonsContainer flex gap-1 self-end">
        <button
          className=" w-7 h-7 bg-[#8CD4CB] rounded-lg border-2 border-[#33322E] boxShadowButton"
          id="done"
        ></button>
        <button
          className=" w-7 h-7 bg-[#F6A89E] rounded-lg border-2 border-[#33322E] boxShadowButton"
          id="delet"
          onClick={(e) => {
            console.log(e.target.parentElement.parentElement.id);
            
          }}
        ></button>
      </div>
    </div>
  );
}

export default NoteCard;
