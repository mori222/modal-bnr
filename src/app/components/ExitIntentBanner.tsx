"use client";

import { useEffect, useState } from 'react';

const ExitIntentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const count =localStorage.getItem("visitCount");
        const newCount = count ? (parseInt(count) % 4) + 1 : 1;
        localStorage.setItem("visitCount", newCount.toString());
        setVisitCount(newCount);
        setShowBanner(true);

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const getBannerImage = () => {
        switch(visitCount) {
            case 1:
                return "/images/popup_01.png";
            case 2:
                return "/images/popup_02.png";
            case 3:
                return "/images/popup_03.png";
            case 4:
                return "/images/popup_04.png";
            default:
                return "/images/popup_01.png";
        }
    };

    if (!showBanner) return null;

    return(
        <div className="popup_banner">
            <div className="popup_inner">
                <img src={getBannerImage()} alt="Popup Banner" />
                <button onClick={() => {
                    setShowBanner(false);
                    document.body.style.overflow = 'auto';
                }} className="close_btn">×</button>
            </div>
        </div>
    );
};
export default ExitIntentBanner;
