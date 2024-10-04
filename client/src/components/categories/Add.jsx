import { Button, Form, Input, Modal, message } from 'antd';

const Add = ({ isAddModalOpen, setIsAddModalOpen, categories, setCategories }) => {
  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      });
      message.success("New category added successfully")
      form.resetFields()
      setCategories([...categories, {
        _id: Math.random(), title: values.title,
      }])
    } catch (error) {
      console.error(error)
    }
  }

  const [form] = Form.useForm();

  return (
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
  )
}

export default Add