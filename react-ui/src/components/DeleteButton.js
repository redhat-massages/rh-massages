// react imports
import React, { Component } from 'react';

// component imports
import ConfirmationModal from '../components/ConfirmationModal';

// util imports
import _t from '../utils/Translations.js';

/**
 * Custom delete button component.
 */
class DeleteButton extends Component {

  state = {active: false}

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  render() {
    return(
      <span>
        <button style={{ 'color': '#000' }} type="button" className="btn btn-link" onClick={this.handleToggle}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
        {this.state.active ?
          <ConfirmationModal
            message={ _t.translate('Are you sure? This action cannot be reverted.') }
            onClose={() => this.handleToggle()}
            onConfirm={() => {
              this.handleToggle();
              this.props.onDelete();
            }}
          /> : ''
        }
      </span>
    )
  }
}

export default DeleteButton
