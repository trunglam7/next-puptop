import React from 'react'
import { useQuery } from 'convex/react'
import styles from  '../styles/main.module.css'
import { api } from '../../convex/_generated/api';

export default function Main() {

  const dogs = useQuery(api.dogs.get);
  return (
    <main className={styles.main}>
      {
        dogs?.map(({_id, name}) => (
          <div key={_id.toString()}>{name}</div>
        ))
      }
    </main>
  )
}
