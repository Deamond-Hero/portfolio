import { useState } from "react";
import ReactModal from "react-modal";
import style from "./ModalStyle.module.css";


interface DescripcionGameStackProps {
  texto :string;
}

export const Descripcion : React.FC<DescripcionGameStackProps> = ({texto}) => {
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
          <p style={{ color: "black" }}>{texto}</p>
        </div>
      </ReactModal>
    </div>
  );
};
