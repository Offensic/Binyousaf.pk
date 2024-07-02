import React, { useEffect } from 'react'
function DisableRightClick() {

    useEffect(() => {

        function preventRightClick(event) {
            event.preventDefault();
        }

        document.addEventListener('contextmenu', preventRightClick)
        return () => {

            document.removeEventListener('contextmenu', preventRightClick);
        };

    }, []);



    return (
        <div>




        </div>
    )
}

export default DisableRightClick