import React, {Fragment} from 'react';
import NavbarDashboard from '../layout/NavbarDashboard';

const ReviewSuccess = props => {
    const { match: {params} } = props;

    return (
        <Fragment>
            <NavbarDashboard />
            <div className="review-success">
                <h3>Review Published Successfuly!</h3>
                <a href={`/bookpage/${params.book_id}`}>Return to book page</a>
            </div>
        </Fragment>
    );
}

export default ReviewSuccess;