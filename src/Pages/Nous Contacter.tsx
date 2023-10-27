export const NousContacter = () => {
    document.title = "Nous contacter"
    return(
        <section className="m-20">
            <h1>Contacts</h1>
            <form>
                <input type="text" className="border block" placeholder="Quel est le sujet ?"/>
                <input type="email"className="border block" name="email" id="email" placeholder="Votre email"/>
                <textarea name="" rows={5} cols={22} placeholder="Votre message" className="border resize-none"></textarea>
            </form>
        </section>
    )
}