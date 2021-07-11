import React from 'react';

export const Loading = () => {
    return (
        <div className="col">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>This is taking forever...</p>
        </div>
    );
};