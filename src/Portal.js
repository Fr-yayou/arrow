import { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRott = document.getElementById('portal')

export default class Portal extends Component {
    constructor() {
        super()
        this.el = document.createElement('div')
    }

    componentDidMount() {
        portalRott.appendChild(this.el)
    }
    componentWillUnmount() {
        portalRott.removeChild(this.el)
        
    }

    render() {
        const { children } = this.props
        return ReactDOM.createPortal(children, this.el)
    }
}