import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  const featureArr1 = [
    {
      "text": "Single User",
      "allowed": true
    },
    {
      "text": "50GB Storage",
      "allowed": true
    },
    {
      "text": "Unlimited Public Projects",
      "allowed": true
    },
    {
      "text": "Community Access",
      "allowed": true
    },
    {
      "text": "Unlimited Private Projects",
      "allowed": false
    },
    {
      "text": "Dedicated Phone Support",
      "allowed": false
    },
    {
      "text": "Free Subdomain",
      "allowed": false
    },
    {
      "text": "Monthly Status Report",
      "allowed": false
    },
  ];

  const featureArr2 = [
    {
      "text": "Single User",
      "allowed": true
    },
    {
      "text": "50GB Storage",
      "allowed": true
    },
    {
      "text": "Unlimited Public Projects",
      "allowed": true
    },
    {
      "text": "Community Access",
      "allowed": true
    },
    {
      "text": "Unlimited Private Projects",
      "allowed": true
    },
    {
      "text": "Dedicated Phone Support",
      "allowed": true
    },
    {
      "text": "Free Subdomain",
      "allowed": true
    },
    {
      "text": "Monthly Status Report",
      "allowed": false
    },
  ];

  const featureArr3 = [
    {
      "text": "Single User",
      "allowed": true
    },
    {
      "text": "50GB Storage",
      "allowed": true
    },
    {
      "text": "Unlimited Public Projects",
      "allowed": true
    },
    {
      "text": "Community Access",
      "allowed": true
    },
    {
      "text": "Unlimited Private Projects",
      "allowed": true
    },
    {
      "text": "Dedicated Phone Support",
      "allowed": true
    },
    {
      "text": "Free Subdomain",
      "allowed": true
    },
    {
      "text": "Monthly Status Report",
      "allowed": true
    },
  ];

  return (
    <>
      <div className='container'>
        <Card type='FREE' price='0' featureArr={featureArr1}/>
        <Card type='PLUS' price='9' featureArr={featureArr2}/>
        <Card type='PRO' price='49' featureArr={featureArr3}/>
      </div>

    </>
  )
}

export default App
