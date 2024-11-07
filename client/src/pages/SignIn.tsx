import { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const SignIn = () => {
  type FieldType = {
    username?: string;
    password?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center flex-col">
          <div className="my-4">
            <h1 className="text-4xl uppercase font-medium">Log in</h1>
          </div>
          <div className="my-4">
            <Form
              layout="vertical"
              className="size-80"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <div className="mt-4">
                <Form.Item<FieldType>
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}>
                  <Input />
                </Form.Item>
              </div>

              <div className="mt-4">
                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}>
                  <Input.Password />
                </Form.Item>
              </div>

              <Form.Item>
                <div>
                  <p>
                    Create your account ?
                    <Link to="/sign-up">
                      <b>Sign up</b>
                    </Link>
                  </p>
                </div>
                <Button
                  className="w-full mt-4 p-4"
                  type="primary"
                  htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
