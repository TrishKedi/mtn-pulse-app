componentDidMount = () => {
    this.someDataOnChange = firestore()
        .collection('content')
        .doc('specificDoc')
        .collection('someCollection')
        .onSnapshot(this.updateSomeData, () => {});
    
    this.anotherDataOnChange = firestore()
        .collection('content')
        .doc('anotherDoc')
        .collection('anotherCollection')
        .onSnapshot(this.updateAnotherData, () => {});
};

componentWillUnmount = () => {
    this.someDataOnChange();
    this.anotherDataOnChange();
};
