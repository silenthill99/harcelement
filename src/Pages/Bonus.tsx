import { Videos } from "../Utils/Videos"

export const Bonus = () => {
    document.title = "Bonus"
    return(
        <div>
            <div className="flex flex-col items-center">
                <Videos id="utkuLf8mE6k" name="INFLUENCEUSE - Court Métrage"/>
                <p>J'aimerais partager avec vous ce petit court métrage qui n'a rien à voir avec le harcèlement,<br/>mais il reste très intéressant car il démontre bien le danger que peuvent représenter les réseaux sociaux</p>
            </div>
            <section>
                <h2>Sia - Breathe me</h2>
                <p>Voici un son résulièrement utilisé dans différents courts métrages parlant du harcèlement</p>
                <audio src="sons/Breathe me.mp3" controls></audio>
            </section>
        </div>
    )
}