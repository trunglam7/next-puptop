import React, { createContext, useContext, useState } from 'react'
import { useMutation, useQuery } from 'convex/react'
import styles from  '../styles/main.module.css'
import { api } from '../../convex/_generated/api';
import DogCard from './DogCard';
import VotingPlatform from './VotingPlatform';
import Dialog from './Dialog';
import { list } from '@/convex/messages';

export default function Main() {

  return (
    <main className={styles.main}>
      <VotingPlatform />
      <Dialog />
    </main>
  )
}
