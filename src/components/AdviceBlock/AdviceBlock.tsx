import React from "react";

interface AdviceBlockProps {
    counter: number
    description: string
}

const AdviceBlock: React.FC<AdviceBlockProps> = (props) => {
    return(
        <>
            <li className={"advice"}>
                <div className={"counter-wrapper"}>
                    <span className={"counter"}>{props.counter}</span>
                </div>
                <div className={"description-wrapper"}>
                    <span className={"description"}></span>{props.description}
                </div>
            </li>
        </>
    )
}
export default AdviceBlock;