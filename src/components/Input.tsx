

interface InputProps{
    placeholder:string;
    ref?:any;
}
export function Input({placeholder,reference}:InputProps){
    return(
        <input ref={reference} placeholder ={placeholder} type="text"  className="px-4 py-2"
        ></input>
    )
  }