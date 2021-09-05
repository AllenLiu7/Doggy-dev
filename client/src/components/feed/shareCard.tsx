import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchTimelinePosts } from '../../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../../redux/slice/loginUser';
import { newPostReq } from '../../service/api/post';
import { uploadPostImageReq } from '../../service/api/upload';
import { StyledHr } from '../common/styled-components/hr';
import { Input } from '../common/styled-components/input';
import { StyledButton } from '../common/styled-components/styledButton';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
import ShareOptions from './shareOptions';

export default function ShareCard() {
  const { currentUser } = useSelector(currentUserSelector);
  const dispatch = useDispatch();
  const desc = useRef(null);

  const [isAttatch, setIsAttatch] = useState(false);

  const handleUploadChange = () => {
    setIsAttatch(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    const newPost = {
      userId: currentUser._id,
      desc: desc.current.value,
    };

    //upload image to server and get back the file name
    if (file) {
      const data = new FormData();
      data.append('post-image', file);

      try {
        const response = await uploadPostImageReq(data);
        newPost.img = response.data.fileName; //server returns the modified file name
      } catch (err) {
        console.log(err);
      }
    }

    //creat post
    try {
      await newPostReq(newPost);
      dispatch(fetchTimelinePosts(currentUser._id));
    } catch (err) {}
  };

  return (
    <Container>
      <TopWrapper>
        <StyledProfilePic
          height='45px'
          width='45px'
          src={currentUser.profilePicture}
        />
        <InputWrapper>
          <Input placeholder='What is in your mind?' ref={desc} />
        </InputWrapper>
      </TopWrapper>
      <StyledHr />
      <form
        onSubmit={handleSubmit}
        encType='multipart/form-data'
        name='shareForm'
      >
        <DownWrapper>
          <ShareOptions
            isAttatch={isAttatch}
            handleChange={handleUploadChange}
          />
          <StyledButton bgColor='green' margin='0 50px' type='submit'>
            Share
          </StyledButton>
        </DownWrapper>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 30px;
  margin: 0px 30px 40px 30px;
  width: 85%;
  height: 150px;
  background-color: white;
  border-radius: 15px;

  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const DownWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  width: 80%;
  margin-left: 20px;
`;
