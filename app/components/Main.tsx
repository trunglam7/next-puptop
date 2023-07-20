import React from 'react'
import { useQuery } from 'convex/react'
import styles from  '../styles/main.module.css'
import { api } from '../../convex/_generated/api';
import DogCard from './DogCard';
import VotingPlatform from './VotingPlatform';

export default function Main() {

  return (
    <main className={styles.main}>
      <VotingPlatform />
    </main>
  )
}
