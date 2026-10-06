
export interface ScrollDetectorProps {
    homeRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    experienceRef?: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    setActiveRef: React.Dispatch<React.SetStateAction<string | null>>;
    activeRef: string | null;
}




export const ScrollDetector = (props: ScrollDetectorProps) => {
    const { homeRef, skillsRef, projectsRef, experienceRef, aboutRef, contactRef, setActiveRef } = props;

    const handleScroll = () => {
        // Handle bottom of page edge-case for contact section
        const isAtBottom = window.innerHeight + Math.ceil(window.scrollY) >= document.documentElement.scrollHeight - 50;
        if (isAtBottom && contactRef.current) {
            setActiveRef("navContact");
            return;
        }

        // Viewport threshold in pixels from the top of the screen (accounting for header height ~72px)
        const threshold = 180;

        const isActive = (ref: React.RefObject<HTMLElement> | undefined) => {
            if (!ref || !ref.current) return false;
            const rect = ref.current.getBoundingClientRect();
            return rect.top <= threshold && rect.bottom > threshold;
        };

        if (isActive(homeRef)) {
            setActiveRef("navHome");
        } else if (isActive(skillsRef)) {
            setActiveRef("navSkill");
        } else if (isActive(projectsRef)) {
            setActiveRef("navProject");
        } else if (experienceRef && isActive(experienceRef)) {
            setActiveRef("navExperience");
        } else if (isActive(aboutRef)) {
            setActiveRef("navAbout");
        } else if (isActive(contactRef)) {
            setActiveRef("navContact");
        }
    };

    const subscribeScroll = () => {
        handleScroll(); // Execute once on subscribe to set initial state
        window.addEventListener("scroll", handleScroll, { passive: true });
    };

    const unsubscribeScroll = () => {
        window.removeEventListener("scroll", handleScroll);
    };

    return {
        subscribeScroll,
        unsubscribeScroll
    };
};


