import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

import logic from './../../logic/';

const GameOver = ({ score, playAgain, user }) => {
    const saveUserRanking = () => {
        swal({
            title: 'Save Score',
            text: 'Enter your password to save your score',
            input: 'password',
            type: 'info',
            showCancelButton: true,
            confirmButtonText: 'Save it!',
            showLoaderOnConfirm: true,
            preConfirm: password => {
                const userRanking = {
                    username: user.username,
                    password: password,
                    cinemaQuiz: { score }
                };

                return logic.updateUser(user.id, userRanking).then(res => res);
            },
            allowOutsideClick: () => !swal.isLoading()
        }).then(result => {
            if (result.dismiss) return;

            if (result.value.status === 'OK') {
                swal({
                    title: 'Score saved!',
                    type: 'success'
                });
            } else {
                swal({
                    title: 'Oops! Invalid Password provided!',
                    type: 'error'
                });
            }
        });
    };

    return (
        <div className="row justify-content-center">
            <div className="col-8">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h5 className="card-title no-margin">
                            <span role="img" aria-label="icon">
                                ☠
                            </span>{' '}
                            GAME OVER!{' '}
                            <span role="img" aria-label="icon">
                                ☠
                            </span>
                        </h5>
                    </div>
                    <div className="card-body">
                        <h2 className="text-center">
                            <span role="img" aria-label="icon">
                                🏆
                            </span>{' '}
                            <span className="font-weight-bold">Score:</span>{' '}
                            {score}
                        </h2>
                    </div>
                    <div className="card-footer">
                        <button
                            className="btn btn-info btn-lg btn-block"
                            onClick={() => playAgain()}
                        >
                            Play Again
                        </button>
                        <button
                            onClick={saveUserRanking}
                            className="btn btn-dark btn-lg btn-block"
                        >
                            Save your Score!
                        </button>
                        <Link
                            to="/ranking"
                            className="btn btn-secondary btn-lg btn-block"
                        >
                            View Ranking
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameOver;
