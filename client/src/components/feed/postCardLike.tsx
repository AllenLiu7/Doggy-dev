import styled from 'styled-components';

interface Props {
  likes?: [];
}

export default function PostCardLike({ like, handleLikeClick }: Props) {
  return (
    <Container>
      <PostLike
        onClick={() => {
          handleLikeClick();
        }}
      />
      <PostHeart />
      <LikeCountWrap>{`${like} people likes it`}</LikeCountWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const PostLike = styled.img.attrs({
  src: '../../public/assets/like.png',
  alt: 'like',
})`
  height: 25px;
  cursor: pointer;
`;

const PostHeart = styled.img.attrs({
  src: '../../public/assets/heart.png',
})`
  height: 25px;
  margin-left: 6px;
`;

const LikeCountWrap = styled.div`
  margin-left: 10px;
`;
