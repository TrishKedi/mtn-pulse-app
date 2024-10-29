updateFreebies = (snapshot) => {
    let freebies = _.transform(
        snapshot._docs,
        (freebies, entry) => {
            freebies[entry.id] = { details: entry.data() };
        },
        {}
    );

    let imagesFound = 0;

    const saveFreebies = () => {
        if (imagesFound === _.keys(freebies).length) {
            this.props.updateFreebies(freebies);
        }
    };

    _.forEach(_.keys(freebies), (key) => {
        storage()
            .ref(`path/to/freebies/images/${key}.jpg`)
            .getDownloadURL()
            .then((url) => {
                freebies[key].details['image'] = url;
                imagesFound++;
                saveFreebies();
            })
            .catch(() => {
                freebies[key].details['image'] = '';
                imagesFound++;
                saveFreebies();
            });
    });
};
