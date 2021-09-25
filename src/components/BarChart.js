import React from "react";
import { ResponsiveBar } from '@nivo/bar'

const cum_data = [
    {
      "month": "Jan",
      "num": 2,
      "numColor": "hsl(120, 70%, 50%)"
    },
    {
      "month": "Feb",
      "num": 5,
      "numColor": "hsl(73, 70%, 50%)"
    },
    {
      "month": "Mar",
      "num": 7,
      "numColor": "hsl(286, 70%, 50%)"
    },
    {
      "month": "Apr",
      "num": 11,
      "numColor": "hsl(113, 70%, 50%)"
    }
]

const CumulativeBar = ({ data }) => (
    <ResponsiveBar
        data={cum_data}
        keys={[ 'num' ]}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'accent' }}
        borderColor={{ from: 'color', modifiers: [ [ 'brighter', '1.5' ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'month',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={null}
        enableGridY={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', '3' ] ] }}
        legends={[]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)

export default CumulativeBar;