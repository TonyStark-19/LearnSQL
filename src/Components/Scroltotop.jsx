// import use effect
import { useEffect } from "react";

// import use location
import { useLocation } from "react-router-dom";

// scroll to top function
export default function ScrollToTop({ scrollRef }) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (scrollRef?.current) {
            scrollRef.current.scrollTo(0, 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}