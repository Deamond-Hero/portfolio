
export interface ScrollDetectorProps {
    homeRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    setActiveRef: React.Dispatch<React.SetStateAction<string | null>>;
    activeRef: string | null;
}




export const ScrollDetector = (props: ScrollDetectorProps) => {
    const { homeRef, skillsRef, projectsRef, aboutRef, contactRef, setActiveRef } = props;


    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        const getBoundingBox = (ref: React.RefObject<HTMLElement>) => {
            if (ref.current) {
                return ref.current.getBoundingClientRect();
            }
            return null;
        };

        if (
            getBoundingBox(homeRef)?.top! <= scrollPosition &&
            getBoundingBox(homeRef)?.bottom! >= scrollPosition
            
        ) {
            setActiveRef("navHome");
        } else if (
            getBoundingBox(skillsRef)?.top! <= scrollPosition &&
            getBoundingBox(skillsRef)?.bottom! >= scrollPosition
        ) {
            setActiveRef("navSkill");
        } else if (
            getBoundingBox(projectsRef)?.top! <= scrollPosition &&
            getBoundingBox(projectsRef)?.bottom! >= scrollPosition
        ) {
            setActiveRef("navProject");
        } else if (
            getBoundingBox(aboutRef)?.top! <= scrollPosition &&
            getBoundingBox(aboutRef)?.bottom! >= scrollPosition
        ) {
            setActiveRef("navAbout");
        } else if (
            getBoundingBox(contactRef)?.top! <= scrollPosition &&
            getBoundingBox(contactRef)?.bottom! >= scrollPosition
        ) {
            setActiveRef("navContact");
        } else {
            // Si no estás sobre ninguna sección específica, puedes desactivar la sección activa
            setActiveRef(null);
        }

        
    };



    const subscribeScroll = () => {
        window.addEventListener("scroll", handleScroll);
    };

    const unsubscribeScroll = () => {
        window.removeEventListener("scroll", handleScroll);
    };

    return {
        subscribeScroll,
        unsubscribeScroll
    };
};


