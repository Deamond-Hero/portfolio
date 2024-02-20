import style from "./iconsBar.module.css"
import { onClickTo, NavbarProps } from "../../utils/functionSections"

export const IconBar: React.FC<NavbarProps> = ({contactRef}) => {


    return (
        <ul className={style.bar}>
            <li><a href="https://www.linkedin.com/in/leandro-brangi/" target="_blank" title="https://www.linkedin.com/in/leandro-brangi/"><img src="https://seeklogo.com/images/L/linkedin-icon-logo-32AA14A009-seeklogo.com.png"/></a></li>

            <li className={style.github}><a href="https://github.com/Deamond-Hero" target="_blank" title="https://github.com/Deamond-Hero"><img src="https://pngimg.com/d/github_PNG47.png"/></a></li>

            <li><a href='#' onClick={onClickTo(contactRef)} title="Contacto"><img src="https://i.pinimg.com/originals/bb/18/bd/bb18bdbbef437b2d50518db5a8292c94.png"/></a></li>
            
            <li><a href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D543513780700&e=AT1KYFZA4kCHTNyCOKkozewZC3dP_0ZvEIgnTpy5Mv0RzaFZHRRRC45MOW888duiezGD5m8htFV4M-qfHArtILT13bF_INvfHzSkoFp4sxhM5qXIfABh6A" target="_blank" title="Link a whatsApp"><img src="https://cdn.icon-icons.com/icons2/877/PNG/512/whatsapp-logo_icon-icons.com_68338.png"/></a></li>
        </ul>
    )
}