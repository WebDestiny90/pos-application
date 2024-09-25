import { Button, Modal } from 'antd'
import React from 'react'

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal title="Print invoice" width={800} open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6">
          <article className="overflow-hidden">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice detail:</p>
                  <p className="">Unwrapped</p>
                  <p className="">Fake street 123</p>
                  <p className="">San Javier</p>
                  <p className="">CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700">Invoice:</p>
                  <p className="">The Boring Company</p>
                  <p className="">Tesla street 007</p>
                  <p className="">Frisco</p>
                  <p className="">CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700">Invoice number:</p>
                    <p className="">0041</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Data of issue:</p>
                    <p className="">24-09-2024</p>
                  </div>
                </div>
                <div className="text-md text-slate-500 sm:block hidden">
                  <div>
                    <p className="font-bold text-slate-700">Terms:</p>
                    <p className="">0 Days</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Due:</p>
                    <p className="">01-10-2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead className="">
                  <tr className="border-b border-slate-200">
                    <th className="py-3.5 text-left text-sm text-slate-700 md:pl-0 sm:table-cell hidden" scope="col">
                      Visual
                    </th>
                    <th className="py-3.5 text-left text-sm text-slate-700 md:pl-0 sm:table-cell hidden" scope="col">
                      Title
                    </th>
                    <th className="py-3.5 text-left text-sm text-slate-700 md:pl-0 sm:hidden" colSpan="4" scope="col">
                      Title
                    </th>
                    <th className="py-3.5 text-center text-sm text-slate-700 md:pl-0 sm:table-cell hidden" scope="col">
                      Price
                    </th>
                    <th className="py-3.5 text-center text-sm text-slate-700 md:pl-0 sm:table-cell hidden" scope="col">
                      Piece
                    </th>
                    <th className="py-3.5 text-end text-sm text-slate-700 md:pl-0" scope="col">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="py-4 sm:table-cell hidden">
                      <img className="w-12 h-12 object-cover" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" alt="" />
                    </td>
                    <td className="py-4">
                      <div className="flex flex-col">
                        <span className="font-medium">Apple</span>
                        <span className="sm:hidden inline-block text-xs">1 unit at 2$</span>
                      </div>
                    </td>
                    <td className="py-4 text-center sm:table-cell hidden">
                      <span className="font-medium">2$</span>
                    </td>
                    <td className="py-4 sm:text-center text-right sm:table-cell hidden">
                      <span className="font-medium">2</span>
                    </td>
                    <td className="py-4 text-right" colSpan={4}>
                      <span className="font-medium">2.00$</span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th className="text-right pt-6 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Sub total</span>
                    </th>
                    <th className="text-left pt-6 sm:hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Sub total</span>
                    </th>
                    <th className="text-right pt-6" scope="row">
                      <p className="font-normal text-slate-700">2.00$</p>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Tax</span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Tax</span>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-red-500">+1.00$</span>
                    </th>
                  </tr>
                  <tr>
                    <th className="text-right pt-4 sm:table-cell hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="text-left pt-4 sm:hidden" colSpan="4" scope="row">
                      <span className="font-normal text-slate-700">Total</span>
                    </th>
                    <th className="text-right pt-4" scope="row">
                      <span className="font-normal text-slate-700">3.00$</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
              <div className="py-9">
                <div className="border-t pt-9 border-slate-200">
                  <p className="text-sm font-light text-slate-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aspernatur cupiditate minima itaque accusamus ullam, rerum aperiam sit hic voluptatum vitae rem enim reprehenderit repudiandae? Dolorum in a esse quam?
                    Cupiditate earum quis nihil tempore consectetur voluptas architecto ut labore omnis, doloribus assumenda, aliquam voluptate repudiandae eveniet, accusantium rerum? Esse tempore neque ipsam earum aspernatur molestiae similique quisquam vitae eligendi?
                    Sint necessitatibus, suscipit cumque doloremque nihil mollitia ad vero cupiditate sit? Praesentium dolore fugiat, expedita vero libero facilis molestias deserunt eius iusto aperiam distinctio accusamus ratione cumque, sunt cum atque.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section >
      <div className="flex justify-end mt-4">
        <Button type="primary" size="large">Create</Button>
      </div>
    </Modal >
  )
}

export default PrintBill