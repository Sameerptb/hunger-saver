import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { signIn } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import * as Sentry from '@sentry/react-native';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });

  const submit = async () => {
    const { email, password } = form;
    if (!email || !password)
      return Alert.alert('Error', 'Please enter valid email & password');

    setIsSubmitting(true);

    try {
      await signIn({
        email,
        password,
      });
      router.replace('/');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Something went wrong');

      Sentry.captureException(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        keyboardType="email-address"
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        value={form.email}
      />
      <CustomInput
        label="Password"
        placeholder="Enter your Password"
        keyboardType="default"
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        secureTextEntry
        value={form.password}
      />
      <CustomButton title="Sign In" onPress={submit} isLoading={isSubmitting} />

      <View className="flex flex-row justify-center mt-5 items-center gap-2">
        <Text className="base-regular text-gray-100">
          Don&apos;t have an account?
        </Text>
        <Link href="/sign-up" className="base-semibold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
