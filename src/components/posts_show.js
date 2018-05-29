import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { showPost , deletePost} from '../actions';




class Show extends Component {
    componentDidMount(){

        if(!this.props.post){
        const {id} = this.props.match.params;
        this.props.showPost(id);

        console.log('thiss is id ', id)
        console.log(this.props);
        }
    }



    onDeleteClick(){

        const {id} = this.props.match.params;
        this.props.deletePost(id, () => this.props.history.push('/') );
        console.log('delet');
    } 
    
    





    render(){
        // posts[this.props.match.params.id]; // post we want to show
        
        const { post } = this.props;

        if(!post){
            return <div></div>;
        }


        return (
            <div>  
                <Link to="/">Back to Index</Link>

                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                > 
                    Delete Post   
                </button>



                <h3>{post.title}</h3>
                <h5>Categories: {post.categories}</h5>
                <p>{post.content}</p>

            </div>

        )
    }
} 


function mapStateToProps({posts}, ownProps){
    return{
        post: posts[ownProps.match.params.id]    
    }
}

export default connect(mapStateToProps, {showPost, deletePost })(Show);
