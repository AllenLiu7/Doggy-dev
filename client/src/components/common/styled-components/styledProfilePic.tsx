import styled from 'styled-components';
const IMAGE = process.env.S3_IMAGES;

interface Props {
  src: string;
  userId: string;
  height: string;
  width: string;
  borderRadius: string;
}

export const StyledProfilePic = styled.img.attrs(
  ({ src, userId, height, width, borderRadius }: Props) => ({
    src: src
      ? IMAGE + src
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
