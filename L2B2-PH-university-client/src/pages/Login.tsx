import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { id: 'A-0001', password: 'admin123' },
  });

  const [login, { error }] = useLoginMutation();
  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    const userInfo = verifyToken(res.data.accessToken);
    dispatch(setUser({ user: userInfo, token: res.data.accessToken }));
    console.log(res);
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
