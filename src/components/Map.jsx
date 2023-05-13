import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup
} from "react-simple-maps";

const Map = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-87.0, -14.0, 2.9],
                center: [-5, -3],
                scale: 1150
            }}
            className='w-full absolute left-1/3 top-[-40px] '
        >
            <Geographies
                geography="/portfolio/features.json"
                fill="#370a6a"
                stroke="white"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[85.8245, 20.2961]}
                dx={0}
                dy={0}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 2,
                    strokeLinecap: "round"
                }}
            >
                <text
                    x="20"
                    y="20"
                    textAnchor="end"
                    alignmentBaseline="middle"
                    fill="white"
                >
                    {"Bhubaneswar"}
                </text>
            </Annotation>

            <Annotation
                subject={[77.5946, 12.9716]}
                dx={0}
                dy={0}
                connectorProps={{
                    stroke: "white",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text
                    x="20"
                    y="20"
                    textAnchor="end"
                    alignmentBaseline="middle"
                    fill="white"
                >
                    {"Bangalore"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default Map;
