import React from "react";
import Button from "@/components/button";
import UserStatisticsCard from "@/components/graphic";
import PieChartComponent from "@/components/piechart";
import RadialChartComponent from "@/components/radialchart";
import NasaMedia from "@/services/infonasa"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-8 p-8 w-full h-full min-h-screen">
        <div className="justify-center items-center gap-4">
          <h1 className="flex text-xl font-bold items-center justify-center">Hello World !</h1>
        </div>
        
        <div className="border border-gray-600 rounded-lg flex justify-center items-center"><NasaMedia></NasaMedia></div>
        <div className="border border-gray-600 rounded-lg flex justify-center items-center"><iframe src="https://jch4ipas.github.io/kata-APOD" className="w-full h-full"></iframe></div>
        <div className="border border-gray-600 rounded-lg flex justify-center items-center"><RadialChartComponent></RadialChartComponent></div>
        <div className="border border-gray-600 rounded-lg flex justify-center items-center"><iframe 
          src="https://grafana-prod-route-grafana-prod.apps.ocpitsp0001.xaas.epfl.ch/dashboards" 
          className="w-full h-full"
        ></iframe></div>
        <div className="border border-gray-600 rounded-lg flex justify-center items-center"><h1>ooh Hello</h1></div>
      </div>
    </div>
  );
}
