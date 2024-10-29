updateUser = (snapshot) => {
    const keys = [
        'firstName', 'lastName', 'email', 'region', 'gender',
        'phone', 'ageGroup', 'hasAdditionalProperty'
    ];
    _.forEach(keys, (key) => {
        this.props.updateUserDetail(key, snapshot._data[key]);
    });
};
