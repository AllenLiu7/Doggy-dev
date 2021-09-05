import styled from 'styled-components';

interface Props {
  comments?: number;
}

export default function PostCardComment({ comments }: Props) {
  return <CommentLink>{`${comments || 11} comments`}</CommentLink>;
}

const CommentLink = styled.a`
  margin-left: auto;
  margin-right: 20px;
  text-decoration: underline solid lightgrey;
  cursor: pointer;
`;
