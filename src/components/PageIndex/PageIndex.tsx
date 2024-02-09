import React from "react";
import SliderPhotos from "../SliderPhotos/SliderPhotos.tsx";
import {Link} from "react-router-dom";

const PageIndex: React.FC = () => {
    return(
        <div className="page intro">
            <h1 className={"creat-photo-title"}>Сделай крутое фото<br/>для своей семьи</h1>
            <SliderPhotos/>
            <Link className={"create-photo-link"} to="/create"><span>Создать фото</span></Link>
        </div>
    )
}
export default PageIndex;