import { useState } from "react";
import ReactModal from "react-modal";
import style from "./ModalStyle.module.css";
import GitHub from "@mui/icons-material/GitHub";



interface DescripcionGameStackProps {
  texto: string;
  linkGit: string;
  title: string;
}


export const Descripcion: React.FC<DescripcionGameStackProps> = ({ texto, linkGit, title }) => {
  const [open, setOpen] = useState<boolean>(false);

  function modalVisible() {
    setOpen(!open);
  }

  return (
    <div className={style.modal}>
      <button
        onClick={() => {
          modalVisible();
        }}
      >
        Descripción
      </button>
      <ReactModal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        style={{
          overlay: {
            zIndex:"2",
            display: "flex",
            position: "fixed",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            margin: "auto",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambié el color de fondo a un tono más oscuro
          },
          content: {
            width: "60%",
            maxHeight: "400px",
            minHeight: "100px",
            margin: "auto",
            fontSize: "90%",
          },
        }}
      >
        <div>
          <div className={style.button}>
            <button
              onClick={() => {
                modalVisible();
              }}
            >
              X
            </button>
          </div>
          <h1 style={{ color: "black" }}>{title}</h1>
          <p style={{ color: "black" }}>{texto}</p>
          <div className={style.git}>
            <a title="Ir al repositorio" href={linkGit}><GitHub /></a><div />
            <p>Ir al repositorio</p>
          </div>
        </div>

      </ReactModal>
    </div>
  );
};
