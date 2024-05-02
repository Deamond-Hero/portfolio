import ReactPlayer from "react-player";
import { Descripcion } from "./ModalGamestack";
import style from "../components/projects/projects.module.css";


interface Data {
    preview: string
    video: string
    description: string
    git: string
    title: string
}

export const VideoCard:React.FC<Data> = (props) => {
    const { preview, video, description, git, title } = props;
    return (
        <div className={style.player}>
            <ReactPlayer
                light={<img src={preview} alt="Thumbnail" />}
                url={video}
                height="100%"
                width="auto"
                controls={true}
                muted={true}
            />

            <div>
                <Descripcion texto={description} linkGit={git} title={title} />
            </div>

        </div>
    )
}



