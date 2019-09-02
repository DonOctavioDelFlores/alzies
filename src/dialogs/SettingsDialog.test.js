import React from 'react';

import ReactDOM from 'react-dom';

import SettingsDialog from './SettingsDialog';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    (
      <SettingsDialog
        open={false}
        user={{}}
        colors={[]}
        primaryColor=""
        secondaryColor=""
        type=""
        onClose={() => { }}
        onAddAvatarClick={() => { }}
        onChangeAvatarClick={() => { }}
        onAddDisplayNameClick={() => { }}
        onChangeDisplayNameClick={() => { }}
        onAddEmailAddressClick={() => { }}
        onPrimaryColorChange={() => { }}
        onSecondaryColorChange={() => { }}
        onTypeChange={() => { }}
        onResetClick={() => { }}
      />
    ),
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
