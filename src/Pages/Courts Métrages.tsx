import { Videos } from "../Utils/Videos"

export const CourtsMetrages = () => {
    document.title = "Courts métrages"
    return(
        <div>
            <p className="text-center">Sur cette page, vous y trouverez toute une floppée de courts métrages évoquant le harcèlement scolaire. Néanmoins, il vaut savoir qu'en raison du sujet qui est très délicat, certains d'entre eux finissent mal.</p>
            <section className="grid grid-cols-2">
                <Videos id="5Nxjwau7aEY" name="DANS NOS YEUX- Court métrage"/>
                <Videos id="UE6ZlMc4X48" name="Le jour de trop - Court-Métrage contre le Harcèlement"/>
                <Videos id="QcV-r8FpnyU" name="AGIS! Court-métrage contre le harcèlement"/>
                <Videos id="vpbe_Aoihjk" name="Un jeu soi-disant marrant - Court Métrage Harcèlement Collège Périers"/>
                <Videos id="PYLMLcVMXrQ" name="RESTER DEBOUT Harcèlement scolaire-Ciné-club du lycée des Métiers d'Aniche"/>
            </section>
            <section className="bg-[#1F2039] p-20">
                <div className="flex justify-center">
                    <section className="font-bold text-3xl m-10 text-[#a5b4fc]">Quelques reportages</section>
                </div>
                <div className="grid grid-cols-3">
                    <Videos id="M7RTYiXeNUg" name="HARCELÉS A L'ÉCOLE, ILS SORTENT DU SILENCE"/>
                    <Videos id="jnFAO8QmeXo" name="Encore une victime de harcèlement scolaire"/>
                </div>
            </section>
        </div>
    )
}