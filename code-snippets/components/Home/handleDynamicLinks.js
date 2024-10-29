// Function to handle dynamic links in both background and foreground cases

handleBackgroundLink = () => {
    dynamicLinks()
      .getInitialLink()
      .then(link => {
        if (link && link.url === 'https://example.com/promo1') {
          this.props.navigation.navigate('promoRoute', {screen: 'promo', params: {id: 'promo1', name: 'Promotion 1'}});
        } else if (link && link.url === 'https://example.com/promo2') {
          this.props.navigation.navigate('promoRoute', {screen: 'promo', params: {id: 'promo2', name: 'Promotion 2'}});
        }
      })
  }
  
  handleForegroundLink = link => {
    if (link && link.url === 'https://example.com/promo1') {
      this.props.navigation.navigate('promoRoute', {screen: 'promo', params: {id: 'promo1', name: 'Promotion 1'}});
    } else if (link && link.url === 'https://example.com/promo2') {
      this.props.navigation.navigate('promoRoute', {screen: 'promo', params: {id: 'promo2', name: 'Promotion 2'}});
    }
  }
  