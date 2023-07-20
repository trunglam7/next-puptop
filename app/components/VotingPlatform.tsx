import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react'
import DogCard from './DogCard';
import styles from '../styles/votingPlatform.module.css';

export default function VotingPlatform() {

    const dogs = useQuery(api.dogs.getDogs);
    return (
        <div className={styles.platformContainer}>
            {
                dogs?.map(({_id, name}) => (
                    <DogCard key={_id.toString()} dogName={name}/>
                  ))
            }
        </div>
    )
}
