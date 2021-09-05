import styled from 'styled-components';

import { Card } from '../common/styled-components/card';

export default function UserBioCard() {
  return (
    <CustomCard>
      <Title>User Bio</Title>
      <Content>
        <InfoItem>
          <Span>City:&nbsp;&nbsp;</Span>
          <DynamicSpan>New York</DynamicSpan>
        </InfoItem>
        <InfoItem>
          <Span>From:&nbsp;&nbsp;</Span>
          <DynamicSpan>London</DynamicSpan>
        </InfoItem>
        <InfoItem>
          <Span>Relationship:&nbsp;&nbsp;</Span>
          <DynamicSpan>Single</DynamicSpan>
        </InfoItem>
      </Content>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
  margin: 7px 0 40px 0;

  padding: 20px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const InfoItem = styled.div`
  margin-bottom: 5px;
`;

const Span = styled.span``;

const DynamicSpan = styled.span`
  font-size: 15px;
  color: #838383;
`;
