import React, {Component} from 'react';
import flow from 'lodash/fp/flow';

class Tag extends Component {

    constructor(props) {
        super(props);

        const propTypes = {
            labelField: React.PropTypes.string,
            onDelete: React.PropTypes.func.isRequired,
            tag: React.PropTypes.object.isRequired,
            moveTag: React.PropTypes.func,
            removeComponent: React.PropTypes.func,
            classNames: React.PropTypes.object,
        }
    }

    getDefaultProps() {
        return {
            labelField: 'text'
        };
    }

    render() {
        var label = this.props.tag[this.props.labelField];

        return (
            <span
                className={this.props.classNames.tag}>{label}
                <RemoveComponent className={this.props.classNames.remove}
                                 onClick={this.props.onDelete}/>
            </span>
        );

    }


}

export default Tag;