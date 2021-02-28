import { useEffect, useState } from 'react'

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChnage = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', onLocationChnage)

        return () => {
            window.removeEventListener('popstate', onLocationChnage)
        }
    }, []);

    return currentPath === path ? children : null
}

export default Route;
