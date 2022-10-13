import React from 'react'

function Links(prop) {
    return (
        <div>
            <h3>Links</h3>
            <a href={prop.git}>{prop.git}</a>
            <a href={prop.linked}>{prop.linked}</a>
        </div>
    )
}

export default Links