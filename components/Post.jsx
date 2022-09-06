import styled from 'styled-components/native';

const PostView = styled.View`
flex-direction: row;
padding: 15px;
border-bottom-width: 1px;
border-bottom-color: rgba(0, 0, 0, 0.1);
border-bottom-style: solid;
`;

const PostImage = styled.Image`
width: 80px;
height: 80px;
border-radius: 12px;
margin-right: 12px;
`;

const PostTitle = styled.Text`
font-size: 17px;
font-weight: 700;
`;

const PostDetails = styled.View`
flex-direction: column;
justify-content: center;
flex: 1;
`

const PostInstructions = styled.Text`
font-size: 12px;
color: rgba(0, 0, 0, 0,4);
margin-top: 2px;
`;

export const Post = ({ strDrink, strDrinkThumb, strInstructions }) => {
    return (   
    <PostView>
    <PostImage
     source={{ uri: strDrinkThumb }}
     />
 <PostDetails>
 <PostTitle>{strDrink}</PostTitle>
 <PostInstructions>{strInstructions}</PostInstructions>
 </PostDetails>
  </PostView>
)}