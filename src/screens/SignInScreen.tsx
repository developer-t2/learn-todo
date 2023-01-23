import { memo, useCallback, useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import styled from '@emotion/native';

import { Button, Input, SafeInputContainer } from '../components';

const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledImage = styled.Image({
  width: 200,
  height: 200,
});

const ButtonContainer = styled.View({
  width: '100%',
  paddingHorizontal: 20,
  marginTop: 32,
});

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef<TextInput>(null);

  const onChangeEmail = useCallback((email: string) => {
    setEmail(email.trim());
  }, []);

  const onSubmitEmail = useCallback(() => {
    passwordRef.current?.focus();
  }, []);

  const onChangePassword = useCallback((password: string) => {
    setPassword(password.trim());
  }, []);

  const onLogin = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <SafeInputContainer>
      <Container>
        <StyledImage source={require('../../assets/main.png')} />

        <Input
          title="Email"
          icon="email"
          placeholder="Please enter your email"
          keyboardType="email-address"
          returnKeyType="next"
          blurOnSubmit={false}
          value={email}
          onChangeText={onChangeEmail}
          onSubmitEditing={onSubmitEmail}
        />

        <Input
          inputRef={passwordRef}
          title="Password"
          icon="lock"
          placeholder="Please enter your password"
          secureTextEntry
          value={password}
          onChangeText={onChangePassword}
          onSubmitEditing={onLogin}
        />

        <ButtonContainer>
          <Button title="LOGIN" onPress={onLogin} />
        </ButtonContainer>
      </Container>
    </SafeInputContainer>
  );
};

export default memo(SignInScreen);
