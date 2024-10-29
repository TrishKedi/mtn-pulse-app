onBackButtonPress = () => {
    const { navigation } = this.props;
    navigation.navigate('blog');
  };
  
  <Button
    text="Back"
    isBackButton={true}
    onPress={this.onBackButtonPress}
    color={youth}
    textColor={white}
  />
  