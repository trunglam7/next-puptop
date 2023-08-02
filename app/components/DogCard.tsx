import React from 'react'
import styles from '../styles/dogCard.module.css'
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

type DogCardProps = {
    dogName: string,
    dogImage: string
}

export default function DogCard({dogName, dogImage} : DogCardProps) {

  return (
    <div className={styles.cardContainer} style={{'backgroundImage': `url("${dogImage}")`}}>
        <p className={styles.dogName}>{dogName}</p>
    </div>
  )
}
