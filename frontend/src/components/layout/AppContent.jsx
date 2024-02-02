import React from 'react'
import { Layout, Typography } from 'antd';
import {useCrypto} from "../../context/crypto-context"
import PortfolioChart from './PortfolioChart';
import AssetsTable from './AssetsTable';

const contentStyle = {
    textAlign: 'center',
    minHeight: "calc(100vh - 60px)",
    color: '#fff',
    backgroundColor: '#001529',
    padding: "1rem"
  };

const AppContent = () => {
  const {assets, crypto} = useCrypto()

  const cryptoPriceMap = crypto.reduce((acc, cur) => {
    acc[cur.id] = cur.price
    return acc
  }, {})

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{textAlign: "left", color: "#fff"}}>
        Portfolio: {" "}
        {assets
        .map(asset => asset.amount * cryptoPriceMap[asset.id])
        .reduce((acc, cur) => acc + cur, 0)
        .toFixed(2)}$
      </Typography.Title>
      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  )
}

export default AppContent