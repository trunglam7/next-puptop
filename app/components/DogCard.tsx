import React from 'react'
import styles from '../styles/dogCard.module.css'

type DogCardProps = {
    dogName: string
}

export default function DogCard({dogName} : DogCardProps) {
  return (
    <div className={styles.cardContainer} style={{'backgroundImage': 'url("https://cdn-fastly.petguide.com/media/2022/02/16/8250961/miniature-australian-shepherd.jpg?size=720x845&nocrop=1")'}}>
        <p className={styles.dogName}>{dogName}</p>
    </div>
  )
}
