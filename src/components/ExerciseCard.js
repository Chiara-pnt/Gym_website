import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stak, Typography } from '@mui/material';

const ExerciseCard = () => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>

    </Link>
  )
}

export default ExerciseCard;