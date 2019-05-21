import React from "react";
import { Query } from "react-apollo";
import HOME_PAGE from "./queries";

const Home = () => (
    <Query query={HOME_PAGE}>{({ loading, data, error }) => {
                console.log(data)
                if(loading) return <span>Loading</span>
                if(error) return <span>Something happend</span>
                return data.movies.map(movie => (
                    <h2 key={movie.id}>
                        {movie.title} / {movie.rating}
                    </h2>
                ));
                
            }
        }
    </Query>
);

export default Home;