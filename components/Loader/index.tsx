
export default function myLoader ({src, width, quality }) {

    return (
        `http://localhost:8888/${src}?w=${width}`
    )

}

