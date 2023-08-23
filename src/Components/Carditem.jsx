import React from 'react'
import { Card, Metric, Text, Flex, BadgeDelta } from "@tremor/react";

function Carditem() {
  return (
   

    <Card className="w-xs " decoration="top" decorationColor="indigo" >
        <Flex justifyContent='between' alignItems='center'>

    <Text>Sales</Text>
        <BadgeDelta>+12</BadgeDelta>
        </Flex>
    <Metric>$ 34,743</Metric>
  </Card>
    
  )
}

export default Carditem