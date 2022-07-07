import React, { Component } from 'react'
import './styles.scss'

export default class Attribute extends Component {
  render() {
    return (
        <div className='item-attr-content'>
            <span>
                {this.props.attr.name}:
            </span>
            {this.props.attr.type === 'text' ?
                <div className='item-attr-list'>
                    {this.props.attr.items.map((item) => 
                        <div className='item-attr-text'>
                            {item.value}
                        </div>
                    )}
                </div>
            :
                <div className='item-attr-list-color'>
                    {this.props.attr.items.map((item) => 
                        <div className='item-attr-color' style={{'backgroundColor': item.value}}/>
                    )}
                </div>
            }
        </div>
    )
  }
}
