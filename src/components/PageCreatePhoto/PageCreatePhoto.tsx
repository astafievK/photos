import React from "react";
import {Link} from "react-router-dom";
import AdviceBlock from "../AdviceBlock/AdviceBlock.tsx";
import MakePhotoBlock from "../MakePhotoBlock/MakePhotoBlock.tsx";

const PageCreatePhoto: React.FC = () => {
    return(
        <>
            <div className={"page create"}>
                <Link to={"/"} className={"back"}>Назад</Link>
                <div className={"advices"}>
                    <span className={"advices-title"}>Желательно чтобы фото было:</span>
                    <ul className={"advices-list"}>
                        <AdviceBlock counter={1} description={"анфас"}/>
                        <AdviceBlock counter={2} description={"взгляд в камеру"}/>
                        <AdviceBlock counter={3} description={"без эмоций"}/>
                        <AdviceBlock counter={4} description={"между головой и краем кадра во все стороны должно быть пространство"}/>
                    </ul>
                </div>
                <MakePhotoBlock/>
            </div>
        </>
    )
}
export default PageCreatePhoto;