import  UtilisateurPage from "./UtilisateurPage";
import  { UtilisateurContext }  from "./UtilisateurContext";



export default function Utilisateur() {
    return (
        <UtilisateurContext>
             <UtilisateurPage></UtilisateurPage>
        </UtilisateurContext>
    )
}