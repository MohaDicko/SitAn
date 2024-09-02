import  CotisationPage from "./CotisationPage";
import  { CotisationContext }  from "./CotisationContext";



export default function Cotisation() {
    return (
        <CotisationContext>
             <CotisationPage></CotisationPage>
        </CotisationContext>
    )
}