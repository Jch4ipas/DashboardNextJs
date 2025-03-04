"use client";

import { useState, useEffect } from "react";
import Button from "@/components/button";
import UserStatisticsCard from "@/components/graphic";
import PieChartComponent from "@/components/piechart";
import RadialChartComponent from "@/components/radialchart";
import NasaMedia from "@/services/infonasa"

export default function Home() {

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefresh((prev) => prev + 1);
    }, 3000000);

    return () => clearInterval(intervalId);
  }, []);


  const boxes = [
    { id: 1, width: 2, height: 4, content: <p className="flex text-xl font-bold items-center justify-center">Hello World</p>  },
    { id: 2, width: 2, height: 2, content: <iframe src="https://grafana-prod-route-grafana-prod.apps.ocpitsp0001.xaas.epfl.ch/d/wpngrfndshbrda/e29cb0-wpn-e29cb0?orgId=1&from=now-12h&to=now&timezone=browser&refresh=30s" className="w-full h-full"></iframe>},
    { id: 3, width: 2, height: 2, content: <p className="flex text-xl font-bold items-center justify-center">WPN</p>},
    { id: 4, width: 4, height: 2, content: <NasaMedia></NasaMedia> },
  ];

  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-6 grid-rows-4 gap-2 w-full h-full p-2">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="border border-gray-600 rounded-3xl flex justify-center items-center text-white font-bold shadow-md p-2"
            style={{
              gridColumn: `span ${box.width}`,
              gridRow: `span ${box.height}`,
            }}
          >
            {box.content}
          </div>
        ))}
      </div>
    </div>
  );
}
