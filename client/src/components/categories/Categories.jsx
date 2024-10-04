import { useState } from "react";
import { EditOutlined, PlusOutlined } from "@ant-design/icons"
import Add from "./Add";
import Edit from "./Edit";
import "./style.css";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <aside>
      <ul className="flex md:flex-col gap-4 text-lg">
        {
          categories.map(({ _id, title }) => {
            return (
              <li key={_id} className="category-item">
                <p>{title}</p>
              </li>
            )
          })
        }
        <li className="category-item bg-purple-800" onClick={() => setIsAddModalOpen(true)}>
          <PlusOutlined className="md:text-2xl" />
        </li>
        <li className="category-item bg-orange-800" onClick={() => setIsEditModalOpen(true)}>
          <EditOutlined className="md:text-2xl" />
        </li>
        <Add isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} categories={categories} setCategories={setCategories} />
        <Edit isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} />
      </ul>
    </aside>
  )
}

export default Categories