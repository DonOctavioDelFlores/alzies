import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import AccountTab from '../layout/AccountTab';
import AppearanceTab from '../layout/AppearanceTab';

const styles = (theme) => ({
  tabs: {
    marginBottom: theme.spacing(1),
  },
});

class SettingsDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };
  }

  handleKeyPress = (event) => {
    const key = event.key;

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (key === 'Enter') {
      this.props.onClose();
    }
  };

  changeTab = (event, value) => {
    this.setState({
      selectedTab: value
    });
  };

  changeIndex = (index) => {
    this.setState({
      selectedTab: index
    });
  };

  handleResetClick = () => {
    const { primaryColor, secondaryColor, type, defaultTheme } = this.props;

    if (primaryColor !== defaultTheme.primaryColor || secondaryColor !== defaultTheme.secondaryColor || type !== defaultTheme.type) {
      setTimeout(this.props.onResetClick, 137.5);
    }
  };

  render() {
    // Styling
    const { classes } = this.props;

    // Properties
    const {
      open,
      colors,
      primaryColor,
      secondaryColor,
      type,
      defaultTheme
    } = this.props;

    // Events
    const {
      onClose,
      onPrimaryColorChange,
      onSecondaryColorChange,
      onTypeChange
    } = this.props;

    const { selectedTab } = this.state;

    let hasDeviatedFromDefaultSettings = false;

    if (defaultTheme) {
      hasDeviatedFromDefaultSettings = (
        primaryColor !== defaultTheme.primaryColor.name ||
        secondaryColor !== defaultTheme.secondaryColor.name ||
        type !== defaultTheme.type
      );
    }

    return (
      <Dialog open={open} onClose={onClose} onKeyPress={this.handleKeyPress}>
        <DialogTitle>Settings</DialogTitle>

        <Tabs
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.changeTab}
          value={selectedTab}
          variant="fullWidth">

          <Tab label="Account" />
          <Tab label="Appearance" />
        </Tabs>

        <DialogContent>
          {selectedTab === 0 &&
            <AccountTab />
          }

          {selectedTab === 1 &&
            <AppearanceTab
              colors={colors}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              type={type}
              onPrimaryColorChange={onPrimaryColorChange}
              onSecondaryColorChange={onSecondaryColorChange}
              onTypeChange={onTypeChange}
            />
          }
        </DialogContent>

        {(selectedTab === 1 && hasDeviatedFromDefaultSettings) &&
          <React.Fragment>
            <DialogActions>
              <Button color="primary" variant="contained" onClick={this.handleResetClick}>Reset</Button>
            </DialogActions>
          </React.Fragment>
        }
      </Dialog>
    );
  }
}

SettingsDialog.propTypes = {
  classes: PropTypes.object.isRequired,

  open: PropTypes.bool.isRequired,

  colors: PropTypes.array.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

  onClose: PropTypes.func.isRequired,

  onPrimaryColorChange: PropTypes.func.isRequired,
  onSecondaryColorChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired
};

export default withStyles(styles)(SettingsDialog);