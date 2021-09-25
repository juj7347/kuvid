import React from "react";
import { ResponsivePie } from '@nivo/pie'

const dept_data = [
    {
      "id": "Informatics",
      "label": "Informatics",
      "value": 3,
      "color": "hsl(349, 70%, 50%)"
    },
    {
      "id": "Library",
      "label": "Library",
      "value": 7,
      "color": "hsl(261, 70%, 50%)"
    },
    {
      "id": "Mirae",
      "label": "Mirae",
      "value": 5,
      "color": "hsl(126, 70%, 50%)"
    },
    {
      "id": "Udang",
      "label": "Udang",
      "value": 3,
      "color": "hsl(104, 70%, 50%)"
    },
    {
      "id": "Law(new)",
      "label": "Law(new)",
      "value": 2,
      "color": "hsl(27, 70%, 50%)"
    },
    {
        "id": "Else",
        "label": "Else",
        "value": 1,
        "color": "hsl(27, 70%, 50%)"
      }
]

const CumulativePie = ({ data }) => (
    <ResponsivePie
        data={dept_data}
        margin={{ top: 40, right: 200, bottom: 80, left: 0 }}
        sortByValue={true}
        innerRadius={0.7}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'pastel1' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', '3' ] ] }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Informatics'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Library'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Mirae'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Udang'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Law(new)'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'Else'
                },
                id: 'dots'
            }
        ]}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 175,
                translateY: 0,
                itemsSpacing: 0,
                itemWidth: 125,
                itemHeight: 40,
                itemTextColor: '#000',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 20,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
)

export default CumulativePie;