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
    <div>
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
            maxHeight: "300px",
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
          <p style={{display:"flex", justifyContent: "center"}}><a href={linkGit}><GitHub/></a></p>
        </div>
      </ReactModal>
    </div>
  );
};
