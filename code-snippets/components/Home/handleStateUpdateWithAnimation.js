// Function to handle state updates and trigger animations after a delay

triggerSpecialEvent = () => {
    const { updateProfile, user: { token, details: { id } }, navigation, labels } = this.props;
  
    this.setState({ specialEvent: { ...this.state.specialEvent, triggered: true }});
  
    setTimeout(() => {
      this.closeSpecialModal();
  
      if (this._animationView) {
        this._animationView.startAnimation();
      }
  
      updateProfile(
        { navigation, id, token, event_triggered: 'yes' },
        () => {
          if (this._animationView) {
            this._animationView.stopAnimation();
          }
        },
        error =>
          setTimeout(
            () =>
              this.setState({
                modal: {
                  modalVisible: true,
                  modalTitle: labels.successTitle,
                  modalDescription: labels[error] || error,
                  buttonText: labels.okayText
                }
              }), 1000)
      );
    }, 3000);
  }
  