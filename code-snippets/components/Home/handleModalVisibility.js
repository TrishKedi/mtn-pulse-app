// Function to open or close a modal based on a specific condition

openSpecialModal = () => {
    const { user } = this.props;
    const hasOpenedModal = user.details.hasOpenedModal;
  
    if (hasOpenedModal) {
      return;
    } else {
      this.setState({ specialModal: { ...this.state.specialModal, modal: { visible: true } } });
    }
  }
  
  closeSpecialModal = () => {
    this.setState({ specialModal: { ...this.state.specialModal, modal: { visible: false } } });
  }
  