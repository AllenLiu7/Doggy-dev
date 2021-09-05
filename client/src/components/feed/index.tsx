import styled from 'styled-components';

import PostCard from './postCard';
import ShareCard from './shareCard';

interface Props {
  posts: [];
  isCurrentUser?: boolean;
  isHome?: boolean;
}

export default function Feed({ posts, isCurrentUser, isHome }: Props) {
  //const postsLoading = useSelector((state) => state.userPosts.loading);

  return (
    <>
      <FeedContainer isHome={isHome}>
        {isCurrentUser ? <ShareCard /> : null}

        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </FeedContainer>
    </>
  );
}

const FeedContainer = styled.div`
  display: flex;
  margin-top: ${(props) => (props.isHome ? '40px' : null)};
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  flex: 8;
  height: auto;
`;
