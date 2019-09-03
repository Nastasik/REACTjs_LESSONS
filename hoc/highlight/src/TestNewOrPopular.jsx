import React from 'react';

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

function Popular(props) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

export function TestNewOrPopular(Component) {
    return function(props, ...args) {
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props} {...args} />
                </Popular>
            );
        } else if (props.views < 100) {
            return (
                <New>
                    <Component {...props} {...args} />
                </New>
            );
        }
        return <Component {...props} {...args} />;
    };
}