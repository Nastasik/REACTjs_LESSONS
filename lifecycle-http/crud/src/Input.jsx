import React, { Component } from 'react';

export class Input extends Component {
    render() {
        const {content, onClick, onChange} = this.props;
        return (
            <div className='input-form'> 
                <div>
                    <label>New Note</label>
                    <input value={content} onChange={onChange} />
                </div>                
                <button onClick={onClick}>+</button>
            </div>
        );
    }
}

export default Input;
