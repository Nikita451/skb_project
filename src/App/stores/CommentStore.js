import {observable} from 'mobx';


export default class Comment {
    @observable comments = ["Comment 1", "Comment 2" ];

    add(comment) {
        this.comments.push( comment )
    }
    
}