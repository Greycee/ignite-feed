import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: string;
  content: string;
}

interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export default function Post({ author, content, publishedAt }: PostProps) {
  const { post, postAuthor, authorInfo, postContent, comment, commentList } = styles

  const [comments, setComments] = useState(['So nice!'])
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleInvalidcomment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Required field!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const formatDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)
  return (
    <article className={post}>
      <header>
        <div className={postAuthor}>
          <Avatar src={author.avatarUrl}/>
          <div className={authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time>{formatDate}</time>
      </header>
      <div className={postContent}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={comment}>
        <strong>Leave a comment</strong>
        <textarea
          name="comment"
          placeholder="Leave a comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleInvalidcomment}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentText.length === 0}>Publish</button>
        </footer>
      </form>
      <div className={commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  )
}