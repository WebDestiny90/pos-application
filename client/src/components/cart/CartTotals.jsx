import { Button } from "antd"
import { ClearOutlined, PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons"

const CartTotals = () => {
  return (
    <aside className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">Items in cart</h2>
      <ul className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img className="w-16 h-16 object-cover pt-2" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
            <div className="flex flex-col ml-2">
              <strong>Apple</strong>
              <span>2$ x 3</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />}></Button>
            <span className="font-bold">1</span>
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />}></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img className="w-16 h-16 object-cover pt-2" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
            <div className="flex flex-col ml-2">
              <strong>Apple</strong>
              <span>2$ x 3</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />}></Button>
            <span className="font-bold">1</span>
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />}></Button>
          </div>
        </li><li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img className="w-16 h-16 object-cover pt-2" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
            <div className="flex flex-col ml-2">
              <strong>Apple</strong>
              <span>2$ x 3</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />}></Button>
            <span className="font-bold">1</span>
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />}></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img className="w-16 h-16 object-cover pt-2" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
            <div className="flex flex-col ml-2">
              <strong>Apple</strong>
              <span>2$ x 3</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />}></Button>
            <span className="font-bold">1</span>
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />}></Button>
          </div>
        </li>
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img className="w-16 h-16 object-cover pt-2" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
            <div className="flex flex-col ml-2">
              <strong>Apple</strong>
              <span>2$ x 3</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<PlusCircleOutlined />}></Button>
            <span className="font-bold">1</span>
            <Button className="w-full !rounded-full" type="primary" size="small" icon={<MinusCircleOutlined />}></Button>
          </div>
        </li>
      </ul>
      <div className="cart-totals mt-auto">
        <div className="border-t border-b">
          <div className="flex justify-between p-2">
            <strong>subtotal</strong>
            <span>99$</span>
          </div>
          <div className="flex justify-between p-2">
            <strong>VAT 8%</strong>
            <span className="text-red-700">+7.92$</span>
          </div>
        </div>
        <div className="border-b mt-4">
          <div className="flex justify-between p-2">
            <strong className="text-xl text-green-500">grand total</strong>
            <span className="text-red-700 text-xl">+7.92$</span>
          </div>
        </div>
        <div className="py-4 px-2">
          <Button className="w-full" type="primary" size="large">Create order</Button>
          <Button className="w-full mt-2" type="primary" size="large" icon={<ClearOutlined />} danger>Clear</Button>
        </div>
      </div>
    </aside>
  )
}

export default CartTotals