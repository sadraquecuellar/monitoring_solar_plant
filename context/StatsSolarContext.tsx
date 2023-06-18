import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import api from "../services/api";
import { useQuery } from "react-query";

type ContextProps = {
  children : ReactNode
}
type ResponseAPI = {
  data_type: string,
  x_labels: Array<string>,
  generation: Array<number>,
  expected: Array<number>,
  totals: {
    kwh: string,
    percentage: number,
    trees: number,
    co2: number,
  }
}
interface ISolarContextType {
  hourlyData: ResponseAPI;
  dailyData: ResponseAPI;
  monthlyData: ResponseAPI;
  yearlyData: ResponseAPI;
};

const initialState = {
  data_type: '',
  x_labels: [''],
  generation: [0],
  expected: [0],
  totals: {
    kwh: '',
    percentage: -1,
    trees: 0,
    co2: 0 
  }
}

export const StatsSolarContext = createContext<ISolarContextType>({
  hourlyData: initialState,
  dailyData: initialState,
  monthlyData: initialState,
  yearlyData: initialState
});


export const StatsSolarProvider = ({children}:ContextProps) => {
  const [hourlyData, setHourlyData] = useState(initialState)
  const [dailyData, setDailyData] = useState(initialState)
  const [monthlyData, setMonthlyData] = useState(initialState)
  const [yearlyData, setYearlyData] = useState(initialState)

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