export const QuelquesFilms = () => {
    document.title = "Quelques films"
    return(
        <div>
            <h1 className="text-center">Quelques films</h1>
            <section className="grid grid-cols-2 bg-[#660000] p-5">
                <h2 className="text-white text-center underline">A Silent voice</h2>
                <img src="a-silent-voice.jpg" className="row-span-2" alt="" />
                <p className="text-white">Essai</p>
            </section>
        </div>
    )
}