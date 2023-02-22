import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  { id: 1, 
    author: {
      avatarUrl: 'https://github.com/Greycee.png', 
      name: 'Greyce Riquinho', 
      role: 'Software Developer'
    }, 
    content: [{
      type: 'paragraph', content: "I've finished the first module of Ignite. Feel free to check the project on Github :)"
    }],
    publishedAt: new Date()
  }
]

export default function App() {
  const { wrapper } = styles

  return (
    <>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

