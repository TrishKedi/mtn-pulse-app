renderHomeButtons = () => {
    const { homeButtonsContainer, innerButtonContainer, buttonOuterContainer, buttonContainer, homeIconStyle, buttonText } = style;

    return (
        <View style={homeButtonsContainer}>
            <FlatList
                data={this.props.menuData}
                contentContainerStyle={innerButtonContainer}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => this.handleNavigation(item.navigateTo)}
                        style={buttonOuterContainer}
                    >
                        <View style={[buttonContainer, { backgroundColor: item.colorCode }]}>
                            <Image source={{ uri: item.image }} style={homeIconStyle} />
                        </View>
                        <Text style={buttonText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
