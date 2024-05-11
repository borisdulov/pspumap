import { BackgroundModel } from "./BackgroundModel";

export default function Experience() {
    return (
        <>        
            <ambientLight intensity={1}/>
            <directionalLight intensity={10} position={[0, 100, 100]} />
            <BackgroundModel />
        </>
    )
}