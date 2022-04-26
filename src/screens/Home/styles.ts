import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  margin-top: 8px;
  margin-bottom: 32px;
  font-size: 16px;
`;

export const Button = styled.Button.attrs({
  color: '#0D0C9A',
})``;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const Divider = styled.View`
  margin-top: 32px;
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;

export const Description = styled.Text`
  margin-top: 32px;
  text-transform: capitalize;
  color: #414141;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;
