

import React from 'react'

const project = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projectes</h1>
            <div className="project-container">
                {Projectdata.map((val, ind) => {
                    return (
                        <Projectcollection
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            sourcecode={val.sourcecode}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default project