export const Home = () => {
    document.title = "Page d'accueil"
    return(
        <div>
            <div className="flex justify-center">
                <h1 className="m-10">Aide au harcèlement</h1>
            </div>
            <p>Bienvenue sur mon site d'aide contre le harcèlement scolaire. Vous pourrez y retrouver différents éléments qui évoquent le sujet, notamment des clips ainsi que des courts métrages.</p>
            <section className="grid grid-cols-2 gap-3">
                <p className="bg-[red] text-[white]">
                    Le harcèlement scolaire touche près d'1 personne sur 10.<br/>
                    Vous êtes témoin ? Victime ? Parlez-en autour de vous.<br/>
                    Le harcèlement est puni par la loi.
                </p>
            </section>
        </div>
    )
}