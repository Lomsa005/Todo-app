import { useState } from "react";

const Todo = () => {
  const [todovalue, settodovalue] = useState("");

  const [error, seterror] = useState("")
  const [todolist, settodolist] = useState([
  ]);

  const handel = (e) => {
    settodovalue(e.target.value);
  };

  const handleradd = () => {
    let value = [...todovalue];
    if (value.length === 0) {
      seterror('please enter something')
      ;
    } else {
      settodolist((prev) => [...prev, todovalue]);
      settodovalue("");
      seterror('')
    }
  };

  const handlerdelete = (index) => {
    const newlist = [...todolist];
    newlist.splice(index, 1);
    settodolist(newlist);
  };

  return (
    <div>
      <h1 className="my-4 text-red-500 font-bold text-center text-lg ssm:text-2xl">{error}</h1>
      <div className="flex flex-row justify-center ssm:flex-row ssm:w-530">
        <input
          onChange={(e) => handel(e)}
          value={todovalue}
          type="text"
          className="shadow appearance-none border border-red-500 rounded w-full px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline leading-8 ssm:leading-tight p-1" placeholder="Type here..."
        />
        <button>
          <i className="fa fa-plus ml-3 text-green-600 hover:text-green-200 font-bold px-2 rounded mb-3 text-2xl ssm:text-6xl"
          onClick={handleradd}></i>
        </button>
        
        
        
      </div>
      <ul className="flex flex-col-reverse ssm:w-520">
        {todolist.map((todo, index) => {
          return (
            <li key={index} className="border-b-2 border-indigo-500 m-1 p-4 hover:bg-cyan-800 shadow-lg shadow-cyan-300/50 rounded-md hover:rounded-lg	hover:text-amber-400 text-yellow-300 my-3 flex flex-row items-center">
              <input type="checkbox" className="mr-2 w-16 h-8 accent-indigo-400 focus:accent-indigo-700 cursor-pointer"/>
              <span className=" cursor-default text-lg break-all">
                {todo}
              </span>
              <div className="ml-auto">
              <span>
              <i className="fa fa-trash ml-3 cursor-pointer hover:text-red-300 text-red-500 transition-all delay-75 text-2xl"
                onClick={() => handlerdelete(index)}> </i>
              </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
