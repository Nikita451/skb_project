import React from 'react'
import { inject, observer } from 'mobx-react'

//@inject('comments')
@observer
export default class Comment extends React.Component {
    addComment = (e) => {
        if (e.keyCode != 13) return;
        let newComment = e.target.value;
        this.props.comments.add( newComment )
    }

    render() {
        return (
            <section>
                <div>
                    {/*this.props.comments.comments.map( el => <p> {el} </p> )*/}
                    {this.props.appStore.commentStore.comments.map( el => <p> {el} </p> )}
                </div>
                <div>
                    <textarea onKeyDown={this.addComment}></textarea>
                </div>
            </section>
        )
    }
}