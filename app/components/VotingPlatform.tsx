import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react'
import DogCard from './DogCard';
import styles from '../styles/votingPlatform.module.css';

export default function VotingPlatform() {
    const dogs = useQuery(api.dogs.getDogs);
    const data = useQuery(api.messages.list);

    return (
        <div className={styles.platformContainer}>
            {
                dogs?.map(({_id, name, image}) => (
                    <DogCard key={_id.toString()} dogName={name} dogImage={data?.filter((x : any) => x.body === image)[0]?.url}/>
                  ))
            }
        </div>
    )
}
