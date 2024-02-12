import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import {  setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { TUserInfo } from '../types/auth.type';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { id: 'A-0001', password: 'admin123' },
  });

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const toastId = toast.loading('logged in', { position: 'top-right' });
      const res = await login(data).unwrap();

      const userInfo = verifyToken(res.data.accessToken) as TUserInfo;
      console.log(userInfo);

      dispatch(
        setUser({
          user: userInfo,
          token: res.data.accessToken,
        })
      );
      toast.success('Login successful', { id: toastId, duration: 3000 });
      navigate(`/${userInfo.role}/dashboard`);
    } catch (error) {
      toast.error('Something went wrong', { duration: 3000 });
    }
  };
  return (
    <div>
      Log in Page
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">User Id: </label>
          <input {...register('id', { required: true })} type="text" id="id" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            {...register('password', { required: true })}
            type="text"
            id="password"
          />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
