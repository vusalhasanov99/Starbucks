import React, { useEffect, useState } from 'react'
function ProgressBar() {
    const [fill, setFill] = useState(0)
    const [progressBar, setProgressBar] = useState("")
    useEffect(() => {
        if (fill < 100) {
            setTimeout(() => {
                setFill(fill + 10)
            }, 300)
        }
        else {
            setProgressBar("none")
        }
    }, [fill])
    return (
        <div className='progressBar' style={{ display: progressBar, height: "0.8%", width: `${fill}%`, backgroundColor: "#00754a", transition: "0.5s", position: "fixed", top: "0", left: "0" }}>

        </div>
    )
}

export default ProgressBar
