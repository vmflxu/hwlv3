import React from 'react'


const Modals = ({ observer, children }) => {

    return (
        <div>
            {observer ? children : null}
        </div>
    );
}

export default Modals;