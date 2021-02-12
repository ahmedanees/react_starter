import React from 'react';
import { Text, View, Button, StyleSheet, Dimensions, Platform , Image} from 'react-native';
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
		const { data } = this.state;
    var temp = [];

    function EbookTile(props) {
      if (props.data!==null && props.data.title !== undefined){
        return (
          <View style={[styles.container, props.style]}>
              <Image 
              style={styles.thumbnailImage}
              source={{uri:props.data.image.thumb.url}}
              />
              <Text style={styles.title}>{props.data.title}</Text>
              <Text style={styles.author}>{props.data.author_id}</Text>
              <Text style={styles.author}>2002</Text>
              <Text style={styles.annotationCount}>Annotations: {props.data.annotation_count}</Text>
          </View>
        )
      }
      else{
        <Text>asd</Text>
      }

      
  }
    //to ensure three book appear in a row
    let  data_length = data.length;
    for (var index     = 0; index < data_length; index = index + 3) {
        temp.push({
          book1: data[index],
          book2: (index + 1) < data_length ? data[index + 1] : null,
          book3: (index + 2) < data_length ? data[index + 2] : null
        });
    }
    //console.log(temp)
    let temp_data_length = temp.length;
    for (var index     = 0; index < temp_data_length; index = index + 1) {
      console.log(temp[index]['book1'])
    } 
      let booksArray = temp.map( (book, i) => {
          return (
                  <View style={styles.ebookLibraryRow}>
                      
                      {(book['book1'] !=null ) ? <EbookTile style={styles.ebookTile} data={book['book1']}  ></EbookTile>: null}
                      {(book['book2'] !=null ) ? <EbookTile style={styles.ebookTile} data={book['book2']}  ></EbookTile>: null}
                      {(book['book3'] !=null ) ? <EbookTile style={styles.ebookTile} data={book['book3']}  ></EbookTile>: null}
                  </View>
                )
      }
    );
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
                  {booksArray}
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
                 {booksArray}
							
						</ScrollView>
					</View>
				</View>
			);
		}
	}
}


const styles = StyleSheet.create({
  thumbnailImage: {
    width: 162,
    height: 226,
    borderRadius:10
    }, title: {
      marginTop: 14,
      marginBottom: 7,
      alignSelf: "flex-start",
      fontSize: 14,
      lineHeight: 16,
      color: "#0B0B0B"
    },
    author: {
      alignSelf: "flex-start",
      fontSize: 12,
      lineHeight: 14,
      color: "#217CE2"
    },
    annotationCount: {
      alignSelf: "flex-start",
      fontSize:12,
      lineHeight:14,
      color: "#9D9D9D",
      marginTop: 6
    },
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