import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const addName = e => setName(e.target.value)
  const addComment = e => setComment(e.target.value)
  const addNewComment = event => {
    event.preventDefault()
    if (name !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
      }
      setCommentsList(prevList => [...prevList, newComment])
      setName('')
      setComment('')
    }
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={addNewComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={addName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={addComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
