import { TextField } from "@mui/material"

type propstype={
    label:string
    variant:any
    onchange?:any
    type:string
    fullwidth?:any
    required? : any

}

export default function WInput (props:propstype){
    const {label,variant,onchange,type,fullwidth,required}=props
    return <>
    <TextField id={label} label={label} variant={variant} onChange={onchange} type={type} fullWidth={fullwidth} required={required}/>
    </>
}