import { Videos } from "../Utils/Videos"

export const CourtsMetrages = () => {
    document.title = "Courts métrages"
    return(
        <div>
            <h1 className="text-center p-10">Quelques courts métrages</h1>
            <p className="text-center">Sur cette page, vous y trouverez toute une floppée de courts métrages évoquant le harcèlement scolaire. Néanmoins, il vaut savoir qu'en raison du sujet qui est très délicat, certains d'entre eux finissent mal.</p>
            <section className="grid grid-cols-2 gap-2 mb-20">
                <Videos id="5Nxjwau7aEY" name="DANS NOS YEUX- Court métrage"/>
                <Videos id="UE6ZlMc4X48" name="Le jour de trop - Court-Métrage contre le Harcèlement"/>
                <Videos id="QcV-r8FpnyU" name="AGIS! Court-métrage contre le harcèlement"/>
                <Videos id="vpbe_Aoihjk" name="Un jeu soi-disant marrant - Court Métrage Harcèlement Collège Périers"/>
                <Videos id="PYLMLcVMXrQ" name="RESTER DEBOUT Harcèlement scolaire-Ciné-club du lycée des Métiers d'Aniche"/>
                <Videos id="LZNuM_AMNQc" name="PUZZLE - COURT-MÉTRAGE 2021 (harcèlement scolaire)"/>
                <Videos id="6FMoiGghce4" name="GRAVE ! (Harcèlement scolaire)"/>
                <Videos id="UCLHuEYHlBA" name="Option AIS - Couleur alcool - Court Métrage contre le harcèlement scolaire"/>
                <Videos id="NekbISTowB0" name="SAVONNETTE - Court Métrage Harcèlement Scolaire"/>
                <Videos id="sQhBRcNxayw" name="Film sur le harcelement scolaire - Lisa"/>
                <div className="col-span-2">
                    <Videos id="4mx8KIU0xyY" name="HARCÈLEMENT Court-métrage film complet 01700 OUF collège adolescence jugement"/>
                </div>
                <Videos id="LNecBrnE9TA" name="Harcèlement Ado collège"/>
                <Videos id="rcJf-tgknsY" name="Parle. - Court-métrage sur le harcèlement scolaire [ENG/SPA/DEU sub] [School bullying/Acoso escolar]"/>
                <div className="row-span-2">
                    <Videos id ="lq_rIomTOoA" name="Même pas en rêve ! Lycée Ernest Ferroul - Non au Harcèlement"/>
                </div>
            </section>
            <section className="bg-[#1F2039] pb-10">
                <p className="font-bold text-3xl m-10 text-[#a5b4fc] text-center">Quelques reportages</p>
                <div className="grid grid-cols-2 text-[white] gap-11">
                    <Videos id="M7RTYiXeNUg" name="HARCELÉS A L'ÉCOLE, ILS SORTENT DU SILENCE"/>
                    <Videos id="jnFAO8QmeXo" name="Encore une victime de harcèlement scolaire"/>
                </div>
            </section>
        </div>
    )
}