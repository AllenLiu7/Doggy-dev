import styled from 'styled-components';

import { useAppSelector } from '../../Hook/typedReduxHook';
import { followingUsersSelector } from '../../redux/slice/getFollowingUsers';
import ProfilePicNameBig from '../common/profilePicNameBig';
import { Card } from '../common/styled-components/card';

export default function RightBarFriendListCard() {
  const followings = useAppSelector(followingUsersSelector);

  return (
    <CustomCard>
      <Title>Friends</Title>
      {followings.length > 0 ? (
        <Content>
          {followings.map((user, i) => (
            <ProfilePicNameBig key={i} user={user} />
          ))}
        </Content>
      ) : (
        <p>Find some friends!</p>
      )}

      {/* <Content>
        {followings.map((user, i) => (
          <ProfilePicNameBig key={i} user={user} />
        ))}
      </Content> */}
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  padding: 20px;
  margin-bottom: 30px;
  height: auto;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  width: 100%;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 15px;
`;
