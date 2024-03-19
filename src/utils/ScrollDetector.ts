
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
        const scrollPosition = window.scrollY-200;


        const getBoundingBox = (ref: React.RefObject<HTMLElement>) => {
            if (ref.current) {
              return ref.current.getBoundingClientRect();
            }
            return null;
          };

        const isActive = (ref: React.RefObject<HTMLElement>) => {
            const top = getBoundingBox(ref)?.top!;
            const bottom = getBoundingBox(ref)?.bottom!;
            return top <= scrollPosition && bottom >= scrollPosition;
        };

        if (isActive(homeRef)) {
            setActiveRef("navHome");
        } else if (isActive(skillsRef)) {
            setActiveRef("navSkill");
        } else if (isActive(projectsRef)) {
            setActiveRef("navProject");
        } else if (isActive(aboutRef)) {
            setActiveRef("navAbout");
        } else if (isActive(contactRef)) {
            setActiveRef("navContact");
        } else {
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


