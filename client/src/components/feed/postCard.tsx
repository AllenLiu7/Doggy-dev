import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TimeAgo from 'react-timeago';
import styled from 'styled-components';

import { useUserInfo } from '../../Hook/useUserInfo';
import { currentUserSelector } from '../../redux/slice/loginUser';
import { updateLikeReq } from '../../service/api/post';
import PostMenu from '../common/postMenu';
import ProfileHead from '../common/profilePicName';
import PostCardComment from './postCardComment';
import PostCardLike from './postCardLike';

export default function PostCard({ post }) {
  const {
    currentUser: { _id: currentUserId },
  } = useSelector(currentUserSelector);
  const { userId, img, desc, likes, _id: postId, createdAt } = post;
  const date = new Date(createdAt).toDateString();

  const {
    user: { profilePicture, username },
  } = useUserInfo(userId); //fetch post creator info

  const [isLiked, setIsLiked] = useState(likes.includes(currentUserId));
  const [like, setLike] = useState(likes.length);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (currentUserId === userId) return setIsOwner(true);
  }, [currentUserId, userId]);

  const handleLikeClick = () => {
    const updateLike = async (postId: string, currentUserId: string) => {
      try {
        await updateLikeReq(postId, currentUserId);
      } catch (err) {
        console.log(err);
      }
    };

    setIsLiked(!isLiked);
    setLike(isLiked ? like - 1 : like + 1);
    updateLike(postId, currentUserId);
  };

  return (
    <>
      <Container>
        <PostHeader>
          <ProfileWrap>
            <ProfileHead src={profilePicture} name={username} />
            <TimeStamp date={date} />
          </ProfileWrap>
          <PostMenu isOwner={isOwner} postId={postId} />
        </PostHeader>

        <PostContent>
          <DescWrap>{desc}</DescWrap>
          <ImgWrapper>
            {img ? (
              <StyledImg src={process.env.PUBLIC_FOLDER + '/post/' + img} />
            ) : null}
          </ImgWrapper>

          <PostBottomWrap>
            <PostCardLike like={like} handleLikeClick={handleLikeClick} />
            <PostCardComment />
          </PostBottomWrap>
        </PostContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //padding: 20px 30px;
  margin: 0px 30px 30px 30px;
  width: 85%;
  height: auto;
  background-color: white;
  border-radius: 15px;

  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
`;

const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const PostBottomWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 20px 20px 20px;
`;

const TimeStamp = styled(TimeAgo)`
  margin-left: 8px;
  font-size: 12px;
`;

const DescWrap = styled.div`
  margin: 0px 20px 20px 20px;
`;

const StyledImg = styled.img`
  width: 100%;
  max-height: 700px;
  object-fit: contain;
  margin-bottom: 20px;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
