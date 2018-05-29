import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';



class PostsNew extends Component{
    renderField(field){
        const { meta: { touched, error }} = field;
        // all meta = field.meta;

        const classNames = `form-group ${touched && error ? 'has-danger': ''}`;

        return (
            <div className={classNames}>
                <lable>{field.labelsss}</lable>
                <input 
                    className="form-control" 
                    // argument used for handeling event
                    // onChange={field.inpout.onChange}
                    type="text"
                    {...field.input}
                />  
                <div className="text-help">
                {touched ? error : ''}
                </div>
            </div>
        )
    }

    onSubmit(values){
        this.props.createPost(values, (() => this.props.history.push('/')));


    }


    render(){
        const handleSubmit = this.props.handleSubmit;
        console.log(this.props.history)

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                labelsss="Title For Post"
                name="title"
                component={this.renderField}
                />

                <Field 
                labelsss="Categories"
                name="categories"
                component={this.renderField}
                />

                <Field
                labelsss="Post Content"
                name="content"
                component={this.renderField}
                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger" >Cancle</Link>
            </form>       
        )
    }
}


function validate(values){
    const errors = {};

    if(!values.title || values.title.length < 3){
        errors.title = "Enter a title";
    }

    if(!values.categories){
        errors.categories = "Enter some categories";
    }

    if(!values.content){
        errors.content = "Enter some content please";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (
    connect(null, { createPost })(PostsNew)
);


