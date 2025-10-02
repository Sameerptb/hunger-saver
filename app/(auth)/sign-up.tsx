import CustomButton from '@/components/CustomButton';
import CustomInput from '@/components/CustomInput';
import { createUser } from '@/lib/appwrite';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const submit = async () => {
    const { name, email, password } = form;
    if (!name || !email || !password)
      return Alert.alert('Error', 'Please enter valid name, email & password');

    setIsSubmitting(true);

    try {
      await createUser({
        email,
        password,
        name,
      });
      router.replace('/');
    } catch (error: any) {
      Alert.alert('Error', error.message || 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        label="Name"
        placeholder="Enter your full name"
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        value={form.name}
      />
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
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        secureTextEntry
        value={form.password}
      />
      <CustomButton title="Sign Up" onPress={submit} isLoading={isSubmitting} />
      <View className="flex flex-row justify-center mt-5 items-center gap-2">
        <Text className="base-regular text-gray-100">
          Already have an account?
        </Text>
        <Link href="/sign-in" className="base-semibold text-primary">
          Sign In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
