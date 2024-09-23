import { Button, Card, Form, Input, Modal, Select } from 'antd'
import React from 'react'

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);

  }
  return (
    <Modal title="Create invoice" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item name={"customerName"} label="Customer name" rules={[{ required: true, message: "Please input your name!" }]}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item name={"PhoneNumber"} label="Phone" rules={[{ required: true, message: "Please input your Phone number!" }]}>
          <Input placeholder="Phone number" maxLength={11} type='tel' />
        </Form.Item>
        <Form.Item name={"Paymentmethod"} label="Payment method" rules={[{ required: true, message: "Please select Payment method" }]}>
          <Select placeholder="Select">
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Credit card">Credit card</Select.Option>
          </Select>
        </Form.Item>
        <Card>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>50$</span>
          </div>
          <div className="flex justify-between my-2">
            <span>VAT Total %8</span>
            <span className="text-red-600">+5$</span>
          </div>
          <div className="flex justify-between">
            <strong>Total</strong>
            <strong className="">55$</strong>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setIsModalOpen(true)} className="mt-4" type="primary" htmlType="submit">Create Order</Button>
          </div>
        </Card>
      </Form>
    </Modal>
  )
}

export default CreateBill