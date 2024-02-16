import style from "./iconsBar.module.css"
import { icons } from "../../utils/icons"

export const IconBar = () => {


    return (
        <ul className={style.bar}>
            <li><a href="https://www.linkedin.com/in/leandro-brangi/" target="_blank"><img src="https://seeklogo.com/images/L/linkedin-icon-logo-32AA14A009-seeklogo.com.png"/></a></li>
            <li className={style.github}><a href="https://github.com/Deamond-Hero" target="_blank"><img src="https://pngimg.com/d/github_PNG47.png"/></a></li>
            <li><a href="mailto:leandrobrangi@gmail.com" target="_blank"><icons.AlternateEmailIcon /></a></li>
            <li><a href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D543513780700&e=AT1KYFZA4kCHTNyCOKkozewZC3dP_0ZvEIgnTpy5Mv0RzaFZHRRRC45MOW888duiezGD5m8htFV4M-qfHArtILT13bF_INvfHzSkoFp4sxhM5qXIfABh6A" target="_blank"><img src="https://cdn.icon-icons.com/icons2/877/PNG/512/whatsapp-logo_icon-icons.com_68338.png"/></a></li>
        </ul>
    )
}