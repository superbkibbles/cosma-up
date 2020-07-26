import React from 'react';

export default ({ on }) => {
    const show = on ?
        'header__mobile__sideBar':
        'header__mobile__sideBar header__mobile__sideBar-hide';

    return (
        <div className={show}>
            <ul>
                <li>
                    <h1>something</h1>
                </li>
                <li>
                    something else
                </li>
            </ul>
        </div>
    )
}