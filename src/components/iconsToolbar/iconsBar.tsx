import style from "./iconsBar.module.css"
import { icons } from "../../utils/icons"

export const IconBar = () => {
    return (
        <ul className={style.bar}>
            <li><a href="https://www.linkedin.com/in/leandro-brangi/" target="_blank"><icons.LinkedInIcon/></a></li>
            <li><a href="https://github.com/Deamond-Hero" target="_blank"><icons.GitHubIcon/></a></li>
            <li><a href="mailto:leandrobrangi@gmail.com" target="_blank"><icons.AlternateEmailIcon/></a></li>
            <li><a href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D543513780700&e=AT1KYFZA4kCHTNyCOKkozewZC3dP_0ZvEIgnTpy5Mv0RzaFZHRRRC45MOW888duiezGD5m8htFV4M-qfHArtILT13bF_INvfHzSkoFp4sxhM5qXIfABh6A" target="_blank"><icons.WhatsAppIcon/></a></li>
        </ul>
    )
}