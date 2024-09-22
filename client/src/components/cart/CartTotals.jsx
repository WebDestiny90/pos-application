import { Button } from "antd"
import { ClearOutlined } from "@ant-design/icons"

const CartTotals = () => {
  return (
    <aside className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">Items in cart</h2>
      <div className="cart-items">
        <div className="cart-item">cart item</div>
      </div>
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