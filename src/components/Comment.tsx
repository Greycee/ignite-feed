import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import Avatar from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export default function Comment({content, onDeleteComment}: CommentProps) {
  const { comment, boxContainer, commentContent, contentInfo,  } =  styles

  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeClick() {
    setLikeCount(likeCount + 1)
  }

  return(
    <div className={comment}>
      <Avatar hasBorder={false} src="https://yourwikis.com/wp-content/uploads/2020/01/mark-zuck-img.jpg"/>
      <div className={boxContainer}>
        <div className={commentContent}>
          <header>
            <div className={contentInfo}>
              <strong>Mark Zuck</strong>
            </div>
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeClick}>
            <ThumbsUp />
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}