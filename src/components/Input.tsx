interface InputProps{
    placeholder:string;
    ref?:any;
}
export function Input({placeholder,reference}:InputProps){
    return(
        <input  ref={reference} placeholder ={placeholder} type="text" 
        
        className="block w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"

        ></input>
    )
  }