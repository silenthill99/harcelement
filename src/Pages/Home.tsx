export const Home = () => {
    document.title = "Page d'accueil"
    return(
        <div>
            <div className="flex justify-center">
                <h1 className="text-3xl font-extrabold m-10">Aide au harcèlement</h1>
            </div>
            <p>Bienvenue sur mon site d'aide contre le harcèlement scolaire. Vous pourrez y retrouver différents éléments qui évoquent le sujet, notamment des clips ainsi que des courts métrages.</p>
        </div>
    )
}