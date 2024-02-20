export interface NavbarProps{
    homeRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}

export const onClickTo = (ref: React.RefObject<HTMLElement>) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }