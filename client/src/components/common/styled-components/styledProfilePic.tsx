import styled from 'styled-components';
const PF = process.env.PROFILE_PIC;

export const StyledProfilePic = styled.img.attrs(
  ({ src, userId, height, width, borderRadius }) => ({
    src: src
      ? PF + src
      : `https://avatars.dicebear.com/api/bottts/${userId}.svg`,
    alt: 'User',
    height: height || '30px',
    width: width || '30px',
    borderRadius: borderRadius || '50%',
  })
)`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius};
  object-fit: cover;
  cursor: pointer;
`;

// '../../public/assets/profile-pictures/3.jpg'
