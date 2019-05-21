import React from "react";
import {Query} from "react-apollo";
import {MOVIE_DETAILS} from "./queries";

const Detail = ({
    match: {
        params: {movieId}
    }
}) => (
    <Query query={MOVIE_DETAILS}>
        {({loading, data, error}) => {
            if (loading) return "loading";
            if (error) return "error";
            return (
                <React.Fragment>
                    {data.title}
                    {data.genres}
                </React.Fragment>
            )
        }
    }
    </Query>
);

export default Detail;