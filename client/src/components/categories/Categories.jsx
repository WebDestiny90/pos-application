import { PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, message, Modal } from 'antd';
import { useState } from "react";
import "./style.css"

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      message.success("New category added successfully")
      form.resetFields()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <aside>
      <ul className="flex md:flex-col gap-4 text-lg">
        <li className="category-item">
          <p>All</p>
        </li>
        <li className="category-item">
          <p>Products</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item">
          <p>Drink</p>
        </li>
        <li className="category-item bg-purple-800" onClick={() => setIsAddModalOpen(true)}>
          <PlusOutlined className="md:text-2xl" />
        </li>
        <Modal title="Add new category" footer={false} open={isAddModalOpen} onCancel={() => setIsAddModalOpen(false)}>
          <Form layout="vertical" onFinish={onFinish} form={form}>
            <Form.Item name="title" label="Add category" rules={[{ required: true, message: "Category field cannot be empty" }]}>
              <Input />
            </Form.Item>
            <Form.Item className="flex justify-end mb-0">
              <Button type="primary" htmlType="submit">Create</Button>
            </Form.Item>
          </Form>
        </Modal>
      </ul>
    </aside>
  )
}

export default Categories