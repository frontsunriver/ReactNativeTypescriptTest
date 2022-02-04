import { BackHandler, StyleSheet } from 'react-native';

import { TYPOGRAPHY } from '../../styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: TYPOGRAPHY.COLOR.Secondary,
  },
  sub_container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: TYPOGRAPHY.COLOR.Primary,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  }, 
  footer: {
    position: 'absolute', 
    bottom: 0, 
    padding: 50, 
    width: '100%'
  }
});

export default styles;
