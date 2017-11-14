import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import NameForm from './NameForm.jsx';
import EmailForm from './EmailForm.jsx';
import PasswordForm from './PasswordForm.jsx';
import ReviewDialog from './ReviewDialog';
import DeactivateDialog from './DeactivateDialog';
import DeactivateButton from './DeactivateButton';
import { connect } from 'react-redux';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, } = this.props;

    const commands = {
      name: {
        form: <NameForm />,
        review: <ReviewDialog type={type}/>,
        typeText: 'Name',
        text: JSON.parse(localStorage.getItem('user')).info.first + ' ' + JSON.parse(localStorage.getItem('user')).info.last,
        view: this.props.accountSettingsReducer.nameView,
      },
      email: {
        form: <EmailForm />,
        review: <ReviewDialog type={type}/>,
        typeText: 'Email',
        text: JSON.parse(localStorage.getItem('user')).info.email,
        view: this.props.accountSettingsReducer.emailView
      },
      password: {
        form: <PasswordForm />,
        review: <ReviewDialog type={type}/>,
        typeText: 'Password',
        text: '',
        view: this.props.accountSettingsReducer.passwordView
      },
      deactivate: {
        form: <DeactivateButton  view={this.props.accountSettingsReducer.deactivateView}/>,
        review: <DeactivateDialog type={type}/>,
        typeText: 'Manage Account',
        text: '',
        view: this.props.accountSettingsReducer.deactivateView
      }
    };

    return(
      <TableRow style={commands[type].view ? {background:'#f7f7f7'} : null}>

        <TableRowColumn style={css.overflowCol}>

          { commands[type].view ? commands[type].form : commands[type].typeText }

          <ReviewDialog type={type}/>

        </TableRowColumn>

        <TableRowColumn style={css.overflowCol}>

          { commands[type].view ? null : commands[type].text }

        </TableRowColumn>

        <TableRowColumn style={css.editCol}>

          <EditButton type={type}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

export default connect(mapStateToProps, null, null)(AccountSettingsTableRow);
