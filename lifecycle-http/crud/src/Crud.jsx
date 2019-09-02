import React, { Component } from 'react';
import Card from './Card';
import Input from './Input';
import nanoid from 'nanoid';

export default class Crud extends Component {
    state = {
        notes: null,
        content: '',
    }   

    fetchNotes = async () => {
        let response = await fetch('http://localhost:7777/notes');        
        let json = await response.json();        
        this.setState({ notes: json });
    }

    onClick = () => {
        const { notes, content } = this.state;

        fetch('http://localhost:7777/notes', {
            headers: {  
                "Content-type": "application/x-www-form-urlencoded"  
            }, 
            method: 'POST',
            body: `content=${content}`
           
        })

        .then(() => {
            this.fetchNotes();
        })

        .then(() => {
            this.setState({ content: '' });
        });
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({content: value});
    }

    onRemove = (id) => () => {
        fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE',
        }).then(() => {
            this.fetchNotes();
        });
    }

    onUpdate = () => {  
        fetch(`http://localhost:7777/notes`, {
            method: 'GET',
        }).then(() => {
             this.fetchNotes();
        });     
    }

    componentDidMount() {
        this.fetchNotes();
    }

    render() {
        const {notes, content} = this.state;
        return (
            <div className='crud'>
                <div>
                    <div className='notes'>
                        <label>Notes</label>
                        <button onClick={this.onUpdate}>o</button>
                    </div>    
                    <div className='notes-container'>           
                        {notes && notes.map(({content, id}) => {
                                return <Card key={nanoid()} content={content} onRemove={this.onRemove(id)}/>;
                        })}
                    </div>
                </div>
                <Input content={content} onChange={this.onChange} onClick={this.onClick} />
            </div>
        );
    }
}