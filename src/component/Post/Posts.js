import React, {Component} from 'react';
import { connect } from 'react-redux';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts :props.posts
        }
    }

    render() {
        const {posts} = this.state
        const postLists  = posts.map((post)=>{
            return <h1 key={post.id}>{post.title}</h1>
        })
        return (
            <div>
                <h1>Post List</h1>
                {postLists}
            </div>
        );
    }
}

function mapStateToProps(state){
    const posts = state.postReducer.posts
    return{
        posts
    }
}

export default connect(mapStateToProps)(Posts);