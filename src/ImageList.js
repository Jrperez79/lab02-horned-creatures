import React, { Component } from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends Component {
    render() {
        return (
            <div>
                <ul id="creature-list">
                    { this.props.images.map(creature => (
                        <ImageItem key={ creature.title } src={ creature } />
                    ))}
                </ul>
            </div>
        )
    }
}
