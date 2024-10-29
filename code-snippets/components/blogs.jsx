import React, { Suspense, lazy, Component } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Content} from 'native-base';
import { connect } from 'react-redux';
import moment from 'moment';


import Configs from '../../../configs';

const {
	Loader,
	colors: { yellow, white, youth },
	font,
	dimensions,

} = Configs;

const HeaderImage = lazy(() => import('../../common/image'));
const Button = lazy(() => import('../../common/button'));

class Blog extends Component {

  	onBackButtonPress = () => {
		const { navigation } = this.props;

		navigation.navigate('blog');
	};

  	render() {
		const { navigation, blogs: { blogs } } = this.props;
	  	const blogId = navigation.getParam('blogId');
	  	const selectedBlog = blogs.find(blog => blog.blogId === blogId);
		const {containerStyle, imageContainerStyle, backButtonContainerStyle, blogContentContainerStyle, blogTitleStyle, commonTextStyle, blogLinkStyle } = style;

    	return (
			<Suspense fallback={Loader}>
				<StatusBar backgroundColor={yellow} barStyle="dark-content" />
				<Content contentContainerStyle={containerStyle} alwaysBounceVertical={false} bounces={false} enableAutomaticScroll={false}>
					<View style={imageContainerStyle}>
						<View style={backButtonContainerStyle}>
							<Button text="Back" isBackButton={true} onPress={this.onBackButtonPress} color={youth} textColor={white} />
						</View>
						<HeaderImage source={{uri: selectedBlog.image}} hasCurve={true} curveColor={white} width={dimensions.width} height={dimensions.width * 0.583} />
					</View>
					<View style={blogContentContainerStyle}>
						<Text style={blogTitleStyle}>{selectedBlog.title}</Text>
						<Text style={commonTextStyle}>Posted: {moment(`${selectedBlog.dateModified}`).format("MMM Do YYYY")}</Text>
						<Text style={commonTextStyle}>{selectedBlog.excerpt}</Text>
						<Text style={blogLinkStyle} onPress={() => { Linking.openURL(`${selectedBlog.link}`)}}> Read Article</Text>
					</View>
				</Content>
			</Suspense>
    	);
	}
}

const style = StyleSheet.create({
	containerStyle: {
		padding: font.size,
		paddingTop: 0,
		flexGrow: 1
	},
	imageContainerStyle: {
		margin: -font.size,
		marginBottom: font.size,
		position: 'relative'
	},
	backButtonContainerStyle: {
		position: 'absolute',
		top: font.size * 2,
		left: font.size,
		bottom: 0,
		zIndex: 1
	},
	blogContentContainerStyle: {
		flex: 1,
		marginTop: font.size * 0.5,
		alignItems: 'center'
	},
	blogTitleStyle: {
		fontSize: font.size * 1.5,
		...font.family.bold.normal,
		padding: font.size * 0.5
	},
	blogLinkStyle: {
		paddingTop: font.size,
		fontSize: font.size * 1.3,
		...font.family.regular.normal,
		color: youth
	},
	commonTextStyle: {
		fontSize: font.size,
		...font.family.regular.normal
	}
});

const mapStateToProps = ({ blogs }) => {
  return { blogs }
}

export default connect(mapStateToProps, {})(Blog);