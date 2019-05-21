import gql from 'graphql-tag';

const HOME_PAGE = gql`
    query {
        movies(limit: 3) {
        id
        title
        }
    }
`;

export default HOME_PAGE;