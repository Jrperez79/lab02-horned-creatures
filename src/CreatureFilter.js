import React, { Component } from 'react'

export default class CreatureFilter extends Component {
    state = {
        filterItems: '',
    }

    handleChange = (e) => {
        this.setState({filterItems: e.target.value})
    }

    render() {
        return (
            <>
                {this.props.images.map(creature => <option key={creature.title} value={creature.keyword}>{creature.keyword}</option>)}            
            </>
        )
    }
}

