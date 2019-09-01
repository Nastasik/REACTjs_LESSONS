import InputForms from './InputForms';
import WatchesList from './WatchesList';
import Item from './Item.js';
import React, { Component } from 'react'

export class Watches extends Component {

    state = {
        city: '',
        timezone: '',
        time: new Date(),    
        progress: [],    
    }

    handleDelete = (id) => {        
        let afterRemove = this.state.progress.filter(item => item.id !== id)
        this.setState(prev => ({...prev, progress: afterRemove}));          
    }

    onChange = (event) => {
        const {name, value} = event.target;        
        this.setState(prevForm => ({...prevForm, [name]: value}));
        console.log(this.state, 'STATE');
    }

    onSubmit = (event) => {
        event.preventDefault();
        const newDay = new Item(this.state.city, this.state.timezone);
        console.log(newDay, 'new Date(form.GMT) ')
        this.setState(prev => ({...prev, progress: [...prev.progress, newDay]}));
        this.setState({city: '', timezone: ''});      
    }   

    loadActualTime = () => {          
            setInterval(() => {               
                  let newTime = this.state.progress.map(item => {
                      item.time = new Date(+new Date() + item.timezone*3600000 + 1000);                  
                      item.hour = item.time.getHours() * 30 - 90 + 'deg';
                      item.min = item.time.getMinutes() * 0.5 + 'deg';
                      item.sec = item.time.getSeconds() * 6 + 'deg';
                      return item;
                  })
                    
                  this.setState(prevProgress => ({...prevProgress, progress: newTime}));                  
            }, 1000)
    }
           
    componentWillUnmount = () => {
        clearInterval(this.loadActualTime);
    }

    componentDidMount = () => {
        this.loadActualTime();
    }  

    render() {
      const {city, timezone, progress} = this.state
      return (<>
          <InputForms city={city} timezone ={timezone} onSubmit={this.onSubmit} onChange={this.onChange}/>
          <WatchesList progress={progress} handleDelete={this.handleDelete}/>
      </>)}
}

export default Watches;
