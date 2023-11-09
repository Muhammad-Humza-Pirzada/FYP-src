import WAButton from "../compoent/WAButton";
import WInput from "../compoent/WInput";

export default  function CardForm (){
return <>
<WInput variant={"outlined"} type="text" label="abc"/>
<WInput variant={"outlined"} type="text" label="abc"/>
<WInput variant={"outlined"} type="text" label="abc"/>
<WInput variant={"outlined"} type="text" label="abc"/>
<WInput variant={"outlined"} type="text" label="abc"/>
<WInput variant={"outlined"} type="text" label="abc"/>
<WAButton Text={"Submit"} className="btn-info"/>
</>
} 