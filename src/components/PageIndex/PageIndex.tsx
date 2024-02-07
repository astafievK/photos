import React from "react";
import SliderPhotos from "../SliderPhotos/SliderPhotos.tsx";
import {Link} from "react-router-dom";


const PageIndex: React.FC = () => {
    //const createImageBtnRef = React.useRef<HTMLButtonElement>(null);

    return(
        <>
            <h1>Сделай крутое фото для своей семьи</h1>
            <SliderPhotos/>
            <Link className={"create-photo-link"} to="/create"><span>Создать фото</span></Link>
        </>
    )
}
export default PageIndex;