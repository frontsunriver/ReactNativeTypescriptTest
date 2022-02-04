import * as React from 'react';
import { View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

import styles from './styles';
import { GLOBAL } from '../../styles/global';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { tabbedNavigation } from '../../../navigators/navigation';

import { Props } from './index';
import { CTEXT } from '../../elements/custom';
import { TYPOGRAPHY } from '../../styles/typography';
const SPLASH: React.FC<Props> = (props: Props) => {

  const [status, setStatus] = React.useState('nothing');

  React.useEffect(() => {
    const { splashLaunched } = props;
    splashLaunched();
  },[]);

  const navigateToHome = () => {
    tabbedNavigation();
  };

  return (
    <SafeAreaView style={GLOBAL.LAYOUT.SafeArea}>
      <View style={styles.container}>
        <View style={styles.sub_container}>
          <CTEXT style={[GLOBAL.CTA.Style.primaryText, {color: '#fff', paddingTop: 50, letterSpacing: 2}]}>Fill in the missing word</CTEXT>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
            <CTEXT style={[GLOBAL.CTA.Style.primaryText, {color: '#fff', fontSize: 20, letterSpacing: 2}]}>The </CTEXT>
            <CTEXT style={[GLOBAL.CTA.Style.primaryText, {color: '#fff', fontSize: 20, fontWeight: 'bold', borderBottomColor: '#fff', borderBottomWidth: 0.6, letterSpacing: 2}]}>house</CTEXT>
            <CTEXT style={[GLOBAL.CTA.Style.primaryText, {color: '#fff', fontSize: 20, letterSpacing: 2}]}> is small</CTEXT>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
            <CTEXT style={[GLOBAL.CTA.Style.primaryText, {color: '#fff', fontSize: 20, letterSpacing: 2}]}>DAS </CTEXT>
            <View style={{width: 100, borderBottomColor: '#fff', borderBottomWidth: 0.6}}></View>
            <CTEXT style={[GLOBAL.CTA.Style.primaryText, {color: '#fff', fontSize: 20, letterSpacing: 2}]}> ist klein</CTEXT>
          </View>
          <View style={{flex: 1, marginTop: 50}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
              <TouchableOpacity
                activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
                style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, {flex: 1, marginLeft: 20, borderRadius: 20,  borderWidth: 0, marginRight: 20,  backgroundColor: TYPOGRAPHY.COLOR.Default}]}
              >
                <CTEXT style={{color: TYPOGRAPHY.COLOR.Success}}>folgon</CTEXT>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
                style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, {flex: 1, marginRight: 20, borderRadius: 20,   borderWidth: 0, backgroundColor: TYPOGRAPHY.COLOR.Default}]}
              >
                <CTEXT style={{color: TYPOGRAPHY.COLOR.Success}}>schaf</CTEXT>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 20}}>
              <TouchableOpacity
                activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
                style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, {flex: 1, marginLeft: 20, borderRadius: 20,  marginRight: 20, borderWidth: 0, backgroundColor: TYPOGRAPHY.COLOR.Default}]}
              >
                <CTEXT style={{color: TYPOGRAPHY.COLOR.Success}}>Beredien</CTEXT>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
                style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, { flex: 1, marginRight: 20, borderRadius: 20, borderWidth: 0, backgroundColor: TYPOGRAPHY.COLOR.Default}]}
              >
                <CTEXT style={{color: TYPOGRAPHY.COLOR.Success}}>Hause</CTEXT>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.footer, {backgroundColor: TYPOGRAPHY.COLOR.Primary}]}>
        <TouchableOpacity
          activeOpacity={GLOBAL.CTA.TouchableOpacity.default}
          style={[GLOBAL.CTA.Style.primary, GLOBAL.LAYOUT.shadow, {borderWidth: 0, backgroundColor: TYPOGRAPHY.COLOR.Success}]}
        >
          <CTEXT style={{color: TYPOGRAPHY.COLOR.Default}}>Continue</CTEXT>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SPLASH;
