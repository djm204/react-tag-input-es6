import React, {Component} from 'react';
import {connect} from 'react-redux';

class TagInput extends Component{

    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className={this.state.classNames.tagInput}>
                <input ref="input"
                       type="text"
                       placeholder={this.props.placeholder}
                       aria-label={this.props.placeholder}
                       onChange={this.handleChange}
                       onKeyDown={this.handleKeyDown}/>
                <Suggestions query={this.props.query}
                             suggestions={this.props.suggestions}
                             selectedIndex={this.props.selectedIndex}
                             handleClick={this.handleSuggestionClick}
                             handleHover={this.handleSuggestionHover}
                             minQueryLength={this.props.minQueryLength}
                             shouldRenderSuggestions={this.props.shouldRenderSuggestions}
                             classNames={this.props.classNames}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        global: state.global,
        classNames: state.classNames,
        suggestions: state.suggestions,
        query: state.query,
        selectedIndex: state.selectedIndex

    }
}

export default connect(mapStateToProps)(TagInput);