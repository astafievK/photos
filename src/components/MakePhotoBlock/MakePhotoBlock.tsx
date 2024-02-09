import React from 'react';

const MakePhotoBlock: React.FC = () => {
    const video = document.getElementById('video')

    function startVideo(){
        navigator.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.error(err)
        )
    }

    return (
        <>
            <video id={"video"} width={"720"} height={"560"}></video>
            <button onClick={startVideo}>Начать съемку</button>
        </>
    );
}
export default MakePhotoBlock;