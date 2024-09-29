import { Button, Form, Input, Carousel } from 'antd'
import { Link } from "react-router-dom";
import AuthCarousel from '../../components/auth/AuthCarousel';


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
            <Form.Item label="Confirm password" name={"userpasswordconfirm"} dependencies={["userpassword"]} rules={[{ required: true, message: "Please input your Password!" }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("userpassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The two passwords that you entered do not match"));
              },
            }),
            ]}>
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
        <div className="xl:w-4/6 lg:w-3/5 md:1/2 md:flex hidden bg-[#6c63ff]">
          <div className="w-full h-full flex items-center">
            <div className="w-full">
              <Carousel className="!h-full" autoplay>
                <AuthCarousel img={"/images/responsive.svg"} title={"Responsive"} text={"Compatibility with All Device Sizes"} />
                <AuthCarousel img={"/images/statistic.svg"} title={"Statistic"} text={"Extensive Statistics"} />
                <AuthCarousel img={"/images/customer.svg"} title={"Customer Satisfaction"} text={"Customers Satisfied With the Product at the End of the Experience"} />
                <AuthCarousel img={"/images/admin.svg"} title={"Admin Panel"} text={"Single-Place Management"} />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register