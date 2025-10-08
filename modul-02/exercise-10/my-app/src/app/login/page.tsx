'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { Formik, Form, FormikProps } from 'formik';
import loginSchema from './schema';
import useAuthStore from '@/store/authStore';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import { login } from '@/services/auth';
import Link from 'next/link';

interface LoginPageProps {
  email: string;
  password: string;
}

export default function LoginPage() {
  const intialValues = { email: '', password: '' };
  const { onLogin } = useAuthStore();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  // const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
      <Card className='w-full max-w-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik<LoginPageProps>
            initialValues={intialValues}
            validationSchema={loginSchema}
            onSubmit={async (values) => {
              // Handle login
              try {
                const response = await login(values);

                if (response.length > 0) {
                  // Handle successful login
                  onLogin(response[0].email);
                  enqueueSnackbar('Login successful', { variant: 'success' });
                  router.push('/');
                } else {
                  // Handle login failure
                  throw new Error('Invalid email or password');
                }
              } catch (error) {
                // Handle login error
                if (error instanceof Error) {
                  enqueueSnackbar(error.message, { variant: 'error' });
                } else {
                  enqueueSnackbar('An unknown error occurred', {
                    variant: 'error',
                  });
                }
              }
            }}
          >
            {(props: FormikProps<LoginPageProps>) => (
              <Form>
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      className='text-xs'
                      name='email'
                      id='email'
                      type='text'
                      placeholder='Entry your email'
                      // required
                      value={props.values.email}
                      onChange={props.handleChange}
                    />
                    {props.touched.email && props.errors.email && (
                      <div className='text-sm text-red-600'>
                        {props.errors.email}
                      </div>
                    )}
                  </div>
                  <div className='grid gap-2 relative'>
                    <div className='flex items-center'>
                      <Label htmlFor='password'>Password</Label>
                      <a
                        href='#'
                        className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      className='text-xs'
                      name='password'
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Entry your password'
                      // required
                      value={props.values.password}
                      onChange={props.handleChange}
                    />
                    <button
                      type='button'
                      className='absolute right-7 top-10 transform -translate-y-1/2 w-3 h-3'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Eye className='text-gray-500' />
                      ) : (
                        <EyeOff className='text-gray-500' />
                      )}
                    </button>
                    {props.touched.password && props.errors.password && (
                      <div className='text-sm text-red-600'>
                        {props.errors.password}
                      </div>
                    )}
                  </div>
                  <Button type='button' className='w-full'>
                    Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
        <CardFooter className='flex-col gap-2'>
          <div className='text-center text-sm text-base-950'>
            Don&#39;t have an account?{' '}
            <Link
              href='/register'
              className='text-sm font-bold text-base-950 underline'
            >
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
