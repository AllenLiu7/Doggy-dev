import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  render: () => ReactNode;
  linkName?: string;
  show?: boolean;
};

export default function SideBarLink({ render, linkName, show }: Props) {
  return (
    <>
      <LinkWrapper show={show}>
        {render()}
        <LinkName>{linkName}</LinkName>
      </LinkWrapper>
    </>
  );
}

type LinkWrapperProps = {
  show?: boolean;
};

const LinkWrapper = styled.div<LinkWrapperProps>`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: ${(props) => (props.show ? 'none' : 'block')};
  transition: all 2s;
`;

const LinkName = styled.span`
  margin-left: 20px;
`;
