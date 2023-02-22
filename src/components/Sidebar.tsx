import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  const { sidebar, cover, profile } = styles

  return(
    <aside className={sidebar}>
      <img className={cover} src="https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={profile}>
        <Avatar src="https://github.com/Greycee.png" />
        <strong>Greyce Riquinho</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Edit profile
        </a>
      </footer>
    </aside>
  )
}