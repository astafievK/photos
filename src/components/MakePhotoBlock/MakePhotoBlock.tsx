import React from 'react';

const MakePhotoBlock: React.FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const startVideo = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <video id={"video"} width={"720"} height={"560"}></video>
            <button onClick={startVideo}>Начать съемку</button>
        </>
    );
}
export default MakePhotoBlock;