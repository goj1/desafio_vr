import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconButton, AppBar, Avatar} from '@react-native-material/core';

const HeaderDesafio = (props) => {
  return (
    <AppBar
      title={props.title}
      centerTitle={true}
      leading={props.leading ? leadingProps1 => (
        <IconButton
          testID={'iconButtonLeadingHeader'}
          icon={leadingProps2 => <Icon
            testID={'iconLeadingHeader'}
            name={props.platform === 'ios' ? 'arrow-back-ios' : 'arrow-back'} {...leadingProps2}
            color={'#FFFFFF'}
          />} {...leadingProps1}
          onPress={props.onPressBack}
        />
      ) : <></>}
      trailing={props.trailing ? trailingProps1 => (
        <IconButton
          testID={'iconButtonTrailingHeader'}
          icon={trailingProps2 => props.iconTrailing ?
            <Avatar
              testID={'avatarTrailingHeader'} {...trailingProps2}
              image={{ uri: props.iconTrailing }}
            />
            :
            <Icon
              testID={'iconTrailingHeader'}
              name={'person'} {...trailingProps2}
              color={'#FFFFFF'}
            />
          } {...trailingProps1}
          onPress={props.actionTrailing}
        />
      ) : <></>}
    />
  );
};

export default HeaderDesafio;
