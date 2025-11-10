import { useState, useCallback, useEffect} from "react";
import "./App.css";

function App() {
  // const [length, setLength] = useState(8);

  // const [numberAllow, setNumberAllowed] = useState(false);
  // const [charAllow, setCharAllowed] = useState(false);
  // const [password, setPassword] = useState("");

  // const generatePassword = useCallback(() => {
  //   let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //   if (numberAllow) charset += "0123456789";
  //   if (charAllow) charset += "!@#$%^&*()_+{}|:<>?-=[];',./`~";

  //   let pass = "";

  //   for (let i = 0; i < length; i++) {
  //     let randomIndex = Math.floor(Math.random() * charset.length);
  //     pass += charset[randomIndex];
  //   }

  //   setPassword(pass);
  // }, [length, numberAllow, charAllow]);

  const [length,setLength] = useState(8);
  const [numberAllow,setNumberAllowed]=useState(false)
  const[charAllow,setCharAllowed]=useState(false);
  const [password,setPassword]=useState(" ")

  const [copy,isCopied] = useState(false);

  const copyToClipboard= useCallback(()=>{
    navigator.clipboard.writeText(password)
    isCopied(true);
    setTimeout(()=>{
      isCopied(false)
    },2000)
  },[password]);
   

  const generatePassword=useCallback(()=>{
    let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllow) charset +="0123456789";
    if(charAllow) charset +="!@#$%^&*()_+{}|:<>?-=[];',./`~";

    let pass=" ";
    for(let i=0;i<length;i++){
      let randomIndex = Math.floor(Math.random()*charset.length);
      pass += charset[randomIndex];
    }
    setPassword(pass);
  },[length,numberAllow,charAllow]
  )

  useEffect(()=>{
    generatePassword();
  },[length,numberAllow,charAllow,generatePassword])

    
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-96 p-6 bg-yellow-500 rounded-xl shadow-lg flex flex-col items-center gap-3">
          <input
            type="text"
            readOnly
            value={password}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Generated Password"
          />

          <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={copyToClipboard}>
            {copy ? "Copied!" : "Copy to Clipboard"}
          </button>

          {/* Length Slider */}
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
          <span>Password Length: {length}</span>

          {/* Checkboxes */}
          <label>
            <input type="checkbox" checked={numberAllow} onChange={() => setNumberAllowed(!numberAllow)} /> Allow Numbers
          </label>

          <label>
            <input type="checkbox" checked={charAllow} onChange={() => setCharAllowed(!charAllow)} /> Allow Special
            Characters
          </label>

          <button
            onClick={generatePassword}
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
