export function scrollDownByPercentage(percentage:number) {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const totalHeight = document.body.clientHeight;

    // Calcula la nueva posición de desplazamiento
    const newScroll = currentScroll + (windowHeight * (percentage / 100));

    // Asegúrate de que no te desplaces más allá del final de la página
    const maxScroll = totalHeight - windowHeight;
    const finalScroll = Math.min(newScroll, maxScroll);

    // Desplaza la pantalla hacia abajo
    window.scrollTo({
      top: finalScroll,
      behavior: 'instant' // Puedes cambiar a 'auto' para un desplazamiento instantáneo
    });
  }

  