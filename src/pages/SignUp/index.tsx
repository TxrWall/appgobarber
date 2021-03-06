import React, { useRef } from 'react';
import {
    Image, View, ScrollView, KeyboardAvoidingView, Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

import {
    Container, Title, BackToSignInButton, BackToSignInButtonText,
} from './styles';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={logoImg} />

                        <View>
                            <Title>Crie sua conta</Title>
                        </View>
                        <Form ref={formRef} onSubmit={(data) => { console.log(data); }}>
                            <Input name="name" icon="user" placeholder="Nome" />
                            <Input name="email" icon="mail" placeholder="E-mail" />
                            <Input name="password" icon="lock" placeholder="Senha" />

                            <Button onPress={() => { formRef.current?.submitForm(); }}>Entrar</Button>
                        </Form>
                    </Container>
                </ScrollView>

                <BackToSignInButton onPress={() => { navigation.goBack(); }}>
                    <Icon name="arrow-left" size={20} color="#fff" />
                    <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
                </BackToSignInButton>

            </KeyboardAvoidingView>
        </>
    );
};

export default SignUp;
