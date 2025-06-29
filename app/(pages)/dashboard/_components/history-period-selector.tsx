import { Period, Timeframe } from '@/lib/types'
import React from 'react'


interface Props{
    period : Period,
    setPeriod : (period : Period) => void,
    timeFrame : Timeframe,
    setTimeFrame : (timeFrame : Timeframe) => void;
    
}
const HistoryPeriodSelector = ({period,setPeriod,timeFrame,setTimeFrame}:Props) => {
  return (
    <div>
      
    </div>
  )
}

export default HistoryPeriodSelector
