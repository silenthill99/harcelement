export const QuelquesFilms = () => {
    document.title = "Quelques films"
    return(
        <div>
            <h1 className="text-center">Quelques films</h1>
            <section className="grid grid-cols-2 bg-[#660000] p-5 gap-2">
                <h2 className="text-white text-center underline">A Silent voice</h2>
                <img src="a-silent-voice.jpg" className="row-span-2" alt="" />
                <p className="text-white text-justify">Shoya Ishida était autrefois un jeune garçon reconnu comme étant la terreur de son école. Tout va basculer lors de l'arrivée de Shoko Nishimiya dans sa classe, une jeune fille sourde. Tout le monde se prends d'affection pour Shoko, sauf Shoyan qui va se mettre à la harceler, à tel point que Sho,ko se voit contrainte de changer d'école. C'est alors que tout le monde se retourne contre Shoya.<br/>
                5 ans plus tard, lors de son entrée au lycée, Il a donc bien changé et est passé du status de chef de file à victime, ayant très mauvaise réputation, à cause du harcèlement qu'il a causé à la jeune fille, se retrouvant ainsi sans amis. Il n'as alors plus qu'une idée en tête, retrouver Shoko afin de pouvoir lui demander pardon.</p>
            </section>
        </div>
    )
}