import React, {Component} from 'react';
import { render}  from 'react-dom';
import {connect} from 'react-redux';

import Tag from './components/Tag';
import TagInput from './components/TagInput';
import merge from 'lodash/fp/merge';
import configureStore from './store/configureStore'
import Root from './../common/bootstrap/Root'



const store = configureStore();

class TagsInput extends Component {


    constructor(props){
        super(props);

    }


    // componentWillMount() {
    //
    //     this.setState({
    //         classNames: merge({}, this.state.defaultClassNames, this.props.classNames)
    //     });
    // }

    componentDidMount() {
        if (this.props.autofocus && !this.props.readOnly) {
            this.refs.input.focus();
        }
    }

    componentWillReceiveProps(props) {
        var suggestions = this.filteredSuggestions(this.props.query, props.suggestions);
        this.setState({
            suggestions: suggestions,
            classNames: merge({}, this.props.defaultClassNames, props.classNames)
        });
    }

    tagItems(){
        return this.props.tags.map(function(tag, i) {
            return <Tag key={i}
                        tag={tag}
                        labelField={this.props.labelField}
                        onDelete={this.handleDelete.bind(this, i)}
                        moveTag={moveTag}
                        removeComponent={this.props.removeComponent}
                        readOnly={this.props.readOnly}
                        classNames={this.props.classNames}
                {...this.props}/>
        } );

    }

    handleDelete(ctx, index){
        
    }

    render(){
        return(
            <div className={this.props.classNames.tags}>
                <div className={this.props.classNames.selected}>
                    {this.tagItems}
                    {<TagInput {...this.props}/>}
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        global: state.global,
        classNames: state.classNames,
        suggestions: state.suggestions,
        query: state.query,
        selectedIndex: state.selectedIndex


    }
}

const Page = connect(mapStateToProps)(TagsInput)

render(

    <Root store={store}>
        <Page/>
    </Root>,
    document.getElementById('app')
);

