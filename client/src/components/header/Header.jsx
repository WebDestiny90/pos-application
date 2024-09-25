import { Link } from "react-router-dom";
import { Badge, Input } from 'antd';
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LoginOutlined
} from '@ant-design/icons';

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className='py-4 px-6 flex justify-between items-center gap-10'>
        <div className="logo">
          <Link to={"/"}><h2 className='text-2xl font-bold md:text-4xl'>LOGO</h2></Link>
        </div>
        <div className="header-search flex-1 flex justify-center">
          <Input className='rounded-full max-w-[800px]' size="large" placeholder="Search" prefix={<SearchOutlined />} />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed z-50 bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <Link to={"/"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Home</span>
          </Link>
          <Badge className="md:flex hidden" count={5} offset={[0.6]}>
            <Link to={"/cart"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Cart</span>
            </Link>
          </Badge>
          <Link to={"/invoices"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">invoice</span>
          </Link>
          <Link to={"/"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">customers</span>
          </Link>
          <Link to={"/"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">statistics</span>
          </Link>
          <Link to={"/"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <LoginOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Log out</span>
          </Link>
        </div>
        <Badge className="md:hidden flex" count={5} offset={[0.6]}>
          <Link to={"/"} className="menu-Link flex flex-col items-center hover:text-[#40a9ff] transition-all">
            <ShoppingCartOutlined className="text-2xl" />
            <span className="md:text-xs text-[10px]">Cart</span>
          </Link>
        </Badge>
      </header>
    </div>
  )
}

export default Header