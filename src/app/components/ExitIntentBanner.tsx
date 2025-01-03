"use client";

import { useEffect, useState } from 'react';

const ExitIntentBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const count =localStorage.getItem("visitCount");
        const newCount = count ? parseInt(count) + 1 : 1;
        localStorage.setItem("visitCount", newCount.toString());
        setVisitCount(newCount);
        setShowBanner(true);
    }, []);

    const getBannerImage = () => {
        switch(visitCount) {
            case 1:
                return "/images/popup_01.png";
            case 2:
                return "/images/popup_02.png";
            case 3:
                return "/images/popup_03.png";
            default:
                return "/images/popup_04.png";
        }
    };

    if (!showBanner) return null;

    return(
        <div className="popup_banner">
            <div className="popup_inner">   
                <img src={getBannerImage()} alt="Popup Banner" />
                <button onClick={() => setShowBanner(false)} className="close_btn">×</button>
            </div>
        </div>
    );
};
export default ExitIntentBanner;