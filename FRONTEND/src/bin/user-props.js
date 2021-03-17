  user: PropTypes.shape({
    profilePicture: PropTypes.string,
    _id: PropTypes.string,
    email: PropTypes.string,
    creationDate: PropTypes.string,
    teams: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,