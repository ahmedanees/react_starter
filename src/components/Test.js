
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Test extends Component {
	state = {
		'😃': '😃 Smiley',
		'🚀': '🚀 Rocket',
		'⚛️': '⚛️ Atom Symbol'
	};

	render() {
		return (
			<View style={styles.container}>
				<Text>{this.state['🚀']}</Text>
			</View>
		);
	}
}


export default Test;
