import React, {Fragment} from 'react';
import NavbarDashboard from '../layout/NavbarDashboard';

const WriteReview = () => {
    return (
        <Fragment>
            <NavbarDashboard />
            <div className="review">
                <div className="review-body">
                    <h2>Escreva uma review para<br />Harry Potter e a Pedra Filosofal</h2>
                    <form>
                        <div id="star-input" className="star-input">
                            <h5>Dê sua nota:</h5>
                            <i id="1-star" className="far fa-star"></i>
                            <i id="2-star" className="far fa-star"></i>
                            <i id="3-star" className="far fa-star"></i>
                            <i id="4-star" className="far fa-star"></i>
                            <i id="5-star" className="far fa-star"></i>
                        </div>
                        <div className="review-writing">
                            <h5>Escreva sua review:</h5>
                            <textarea name="review-text" className="form-input"></textarea>
                        </div>
                        <button type="submit" className="btn btn-submit">Enviar Review</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default WriteReview;