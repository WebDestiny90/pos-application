import Header from "../components/header/Header"
import StatisticCard from "../components/statistic/StatisticCard"
import { Area, Pie } from '@ant-design/plots';

const StatisticPage = () => {

  const config = {
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/aapl.json',
    },
    xField: (d) => new Date(d.date),
    yField: 'close',
  };

  const config2 = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
    annotations: [
      {
        type: 'text',
        style: {
          text: 'AntV\nCharts',
          x: '50%',
          y: '50%',
          textAlign: 'center',
          fontSize: 40,
          fontStyle: 'bold',
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">Statistic</h1>
        <div className="statistic-section">
          <h2 className="text-lg">Welcome <span className="text-green-700 font-bold text-xl">Admin</span></h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard img={"images/user.png"} title={"Total Customers"} amount={"6"} />
            <StatisticCard img={"images/money.png"} title={"Total Income"} amount={"50$"} />
            <StatisticCard img={"images/sale.png"} title={"Total Sales"} amount={"10"} />
            <StatisticCard img={"images/product.png"} title={"Total Product"} amount={"12"} />
          </div>
          <div className="flex justify-between gap-10 lg:flex-row flex-col">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...config2} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatisticPage