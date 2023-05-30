import React from "react"

const ImageDisplay = ({imageurl}) => {
console.log(imageurl)
    return (
        <img src={imageurl} alt="cover images" className="h-32 w-32 ml-16 mt-8"/>
    )
}

export default ImageDisplay