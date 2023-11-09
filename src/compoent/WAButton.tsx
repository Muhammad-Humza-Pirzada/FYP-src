
type typeprops ={
    
    className:string
    Text:String
    onClick?:any
}
export default function (props:typeprops){
    let {className,Text,onClick}=props
    return <>
    <button  className={className} onClick={onClick}>{Text}</button>
    </>
}