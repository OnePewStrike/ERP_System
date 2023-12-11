// ChartComponent.tsx
import React, { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

const ChartComponent = (props: ChartProps) => {
    // reference to canvas element
    const chartElement = useRef<HTMLCanvasElement | null>(null);

    // reference to chart.js instance
    let chart = useRef<Chart>();

    const { ChartConfig } = props;

    // separate useEffect is required for cleanup to prevent memory leak
    useEffect(() => {
        // Destroy chart when component unmounts
        return () => {
            chart.current && chart.current.destroy();
        };
    }, []);

    useEffect(() => {
        // if ref to canvas element exists and chart instance is undefined
        if (!!chartElement.current && !chart.current) {
            // get canvas 2d context (required for drawing)
            const ctx: CanvasRenderingContext2D | null =
                chartElement.current.getContext("2d");
            // create chart instance if ctx not null
            if (ctx) {
                chart.current = new Chart(ctx, ChartConfig);
            }
        } else {
            if (chart.current) {
                chart.current.config = ChartConfig;
                chart.current.update();
            }
        }
    }, [ChartConfig]);

    return <canvas ref={chartElement} />;
};

// Typings
interface ChartProps {
    ChartConfig: ChartConfiguration;
}

export default ChartComponent;
