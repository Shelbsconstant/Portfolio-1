import React from 'react'
//export default function Example(props)
//{
//    return <p>My favorite show is {props.show},and my favorite charcter in it is {props.charcter}</p>
//}


///These two are exactly the same this is class versus

export default class IndexTwo extends React.Component {
    render() {
        return <p> {this.props.show}  </p>
    }
}