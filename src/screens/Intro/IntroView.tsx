import React from 'react';
import { Text, View, Button, StyleSheet, Dimensions, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import EbookTile from './EbookTitle';




		

//Returns true if the screen is in portrait mode
const isPortrait = () => {
	const dim = Dimensions.get('screen');
	return dim.height >= dim.width;
	};





class IntroView extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		orientation: isPortrait() ? 'portrait' : 'landscape',
		data:[],
		isLoading: true
		};

		
		
	}

	componentDidMount() {
		//get Books
		fetch('https://uat.xcarta.com//api/v1/my_save_media/1')
		.then((response) => response.json() )
		.then( (json) => {
			this.setState({ data: json.books })
		})
		.catch( (error) => {
			console.error(error)
		})
		.finally(() => {
			this.setState( {isLoading:false} )
		});

		// Event Listener for orientation changes
		Dimensions.addEventListener('change', () => {
			this.setState({
				orientation: isPortrait() ? 'portrait' : 'landscape'
			});
		});
	}

	componentWillUnmount() {
		Dimensions.removeEventListener('change',
			this.setState({
				orientation: isPortrait() ? 'portrait' : 'landscape'
			})
		)
	}

	
	render() {
		const { navigation } = this.props;
		const { data } = this.state;

		let booksArray = data.map( (book, i) => {

			return <EbookTile style={styles.ebookTile} data={book} key={i} count={i} ></EbookTile>

		});

		

		

		 /* let booksArray = data.map( (book, i) => {
			if (i == 0 ) {
				return ([
					<View style={styles.ebookLibraryRow}>,
					<EbookTile style={styles.ebookTile} data={book} key={i} count={i} ></EbookTile>
					])
			} else if ( (i)%4 == 0 ){
				return ([
					</View>,
					<View style={styles.ebookLibraryRow}>,
					<EbookTile style={styles.ebookTile} data={book} key={i} count={i} ></EbookTile>
				])
			} else if ( i == books.Array.length ) {
				return ([
					<EbookTile style={styles.ebookTile} data={book} key={i} count={i} ></EbookTile>,
					</View>
				])
			} else {
				return (<EbookTile style={styles.ebookTile} data={book} key={i} count={i} ></EbookTile>)
			}


			

			
		}); */
		

		


		if (this.state.orientation === 'portrait') {
			return (
				<View style={styles.container}>
					{/* <Text>LIBRARY SCREEN</Text>
					<Button 
						title="Go to Ebook Detail"
						onPress={() => navigation.navigate('Detail')}
					/>
					<Button 
						title="Go to Reader"
						onPress={() => navigation.navigate('Reader')}
					/> */}
					<View style={{flex:1, justifyContent:"center", alignItems: "center", width:"100%"}}>
						<ScrollView style={styles.ebookLibraryWrapper} contentContainerStyle={{}}>

						<View style={styles.ebookLibraryRow}>
							{booksArray[0]}
							{booksArray[1]}
							{booksArray[2]}
							{booksArray[3]}
						
						</View>
						<View style={styles.ebookLibraryRow}>
						{booksArray[4]}
						{booksArray[5]}
						{booksArray[6]}
						{booksArray[7]}
						</View>
						<View style={styles.ebookLibraryRow}>
						{booksArray[8]}
						{booksArray[9]}
						{booksArray[10]}
						{booksArray[11]}

						</View>
						<View style={styles.ebookLibraryRow}>
						{booksArray[12]}
						{booksArray[13]}
						{booksArray[14]}
						{booksArray[15]}

						</View>
							
							
						
							
							

							
							
						</ScrollView>
					</View>
				</View>
			);
		} else {
			return (
				<View style={styles.container}>
					<Text>LIBRARY SCREEN</Text>
					<Button 
						title="Go to Ebook Detail"
						onPress={() => navigation.navigate('Detail', routeData)}
					/>
					<View style={{flex:1, justifyContent:"center", alignItems: "center", width:"100%"}}>
						<ScrollView style={styles.ebookLibraryWrapper} contentContainerStyle={{}}>
							<View style={styles.ebookLibraryRow}>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
							</View>
							<View style={styles.ebookLibraryRow}>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
								<EbookTile style={styles.ebookTile}></EbookTile>
								
							</View>
							
						</ScrollView>
					</View>
				</View>
			);
		}
	}
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#FCFCFC',
		padding:0,
		paddingTop:30
	},
	ebookLibraryWrapper : {
		flex:1,
		width: "100%",
		flexDirection: "column",
		paddingLeft:35
		
	},
	ebookLibraryRow: {
		flex:1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginBottom: 33,
		marginRight: "auto"
	},
	ebookTile: {
		
	}
});

export default IntroView;