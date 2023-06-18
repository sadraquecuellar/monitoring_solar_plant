import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import api from "../services/api";
import { useQuery } from "react-query";

type ContextProps = {
  children : ReactNode
}

type ResponseAPI = {
  data: {
      data_type: string,
      x_labels: Array<string>,
      generation: Array<number>,
      expected: Array<number>,
      totals: {
        kwh: string,
        percentage: string,
        trees: string,
        co2: string,
      }
  }
}

interface ISolarContextType {
  hourlyData: ResponseAPI;
  dailyData: ResponseAPI;
  monthlyData: ResponseAPI;
  yearlyData: ResponseAPI;
};

export const StatsSolarContext = createContext({});

export const StatsSolarProvider = ({children}:ContextProps) => {
  const [hourlyData, setHourlyData] = useState<ResponseAPI>()
  const [dailyData, setDailyData] = useState<ResponseAPI>()
  const [monthlyData, setMonthlyData] = useState<ResponseAPI>()
  const [yearlyData, setYearlyData] = useState<ResponseAPI>()

  const getStatsHourly = async () =>{
    return await api.get(
      `/plant/generation/test-2023?dataType=hourly`,
    );
  }
  const getStatsDaily = async () =>{
    return await api.get(
      `/plant/generation/test-2023?dataType=daily`,
    );
  }
  const getStatsMonthly = async () =>{
    return await api.get(
      `/plant/generation/test-2023?dataType=monthly`,
    );
  }
  const getStatsYearly = async () =>{
    return await api.get(
      `/plant/generation/test-2023?dataType=yearly`,
    );
  }

  const { data: hourlyStats, isLoading: hourlyLoading } = useQuery(
    'stats-hourly',
    getStatsHourly
  )
  const { data: dailyStats, isLoading: dailyLoading } = useQuery(
    'stats-daily',
    getStatsDaily
  )
  const { data: monthlyStats, isLoading: monthlyLoading } = useQuery(
    'stats-monthly',
    getStatsMonthly
  )
  const { data: yearlyStats, isLoading: yearlyLoading } = useQuery(
    'stats-yearly',
    getStatsYearly
  )
  

  useEffect(()=>{
    if(!hourlyLoading) setHourlyData(hourlyStats?.data?.data)
    if(!dailyLoading) setDailyData(dailyStats?.data?.data)
    if(!monthlyLoading) setMonthlyData(monthlyStats?.data?.data)
    if(!yearlyLoading) setYearlyData(yearlyStats?.data?.data)
  },[hourlyLoading, dailyLoading, monthlyLoading, yearlyLoading])

  return (
    <StatsSolarContext.Provider value={{hourlyData, dailyData, monthlyData, yearlyData}}>
      {children}
    </StatsSolarContext.Provider>
  )
}

export const useStatsSolar = () => useContext(StatsSolarContext)