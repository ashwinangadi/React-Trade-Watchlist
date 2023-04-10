import {FaTimes} from "react-icons/fa"

const AutoComplete = () => {

  const clicked= () => {
    document.getElementById('input').value = ''
  }
  
  return(
    <div className="container my-2 flex justify-center">
      <input id="input" className="outline outline-blue-200 rounded-lg w-[50%] p-2 placeholder:italic placeholder:text-slate-400 " type="text" placeholder="Find your stock.."></input>
      <button className="z-10 ml-[-1.5rem] text-slate-400" onClick={clicked}><FaTimes /></button>
      
      
    </div>
  )
}
export default AutoComplete