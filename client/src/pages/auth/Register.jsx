import { Button, Form, Input } from 'antd'
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 flex flex-col h-full justify-center">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item label="User Name" name={"username"} rules={[{ required: true, message: "Please input your name!" }]}>
              <Input />
            </Form.Item>
            <Form.Item label="E-mail" name={"usermail"} rules={[{ required: true, message: "Please input your E-mail!" }]}>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name={"userpassword"} rules={[{ required: true, message: "Please input your Password!" }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item label="Confirm password" name={"userpasswordconfirm"} rules={[{ required: true, message: "Please input your Password!" }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button className="w-full" size="large" type="primary" htmlType="submit">Registration</Button>
            </Form.Item>
          </Form>
          <div className="flex items-center gap-x-1">
            <p>Already have an account?</p> <Link className="text-blue-600" to={"/login"}>Login here</Link>
          </div>
        </div>
        <div className="xl:w-4/6">right</div>
      </div>
    </div>
  )
}

export default Register