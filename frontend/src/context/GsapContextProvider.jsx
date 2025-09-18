import gsap from "gsap";
import { createContext, useEffect, useRef } from "react";

export const GsapContext = createContext();

export const GsapContextProvider = ({ children }) => {

    const masterTimeline = useRef(gsap.timeline({ paused: true }));
    const isFirstLoad = useRef(true);

    // const playTimeline = () => {
    //     timeline.current.play();
    // };

    // const restartTimeline = () => {
    //     timeline.current.restart();
    // };

    useEffect(() => {masterTimeline.current.play()}, []);

    return (
        <GsapContext.Provider value={{ masterTimeline, isFirstLoad }}>
            {children}
        </GsapContext.Provider>
    );
};